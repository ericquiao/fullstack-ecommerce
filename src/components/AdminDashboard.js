import { useState, useEffect, useContext } from "react";

import UserContext from "../userContext";

import { Table, Button } from "react-bootstrap";

import { Navigate } from "react-router-dom";

export default function AdminDashboard() {

  const { user } = useContext(UserContext);
  console.log(user);

  const [allCourses, setAllCourses] = useState([]);

  function archive(courseId) {

    fetch(`http://localhost:4000/courses/archive/${courseId}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {

        window.location.href = "/courses";
      });
  }

//activate function
function activate(courseId){
  fetch(`http://localhost:4000/courses/activate/${courseId}`,{

  method: 'PUT',
  headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
  }

})
.then(res => res.json())
.then(data => {

  console.log(data);
  //refresh the page after archive
  window.location.href = "/courses";

})

}


  useEffect(() => {
    if (user.isAdmin) {
      //fetch all courses
      fetch("http://localhost:4000/courses/", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          //console.log(data);
          setAllCourses(
            data.map((course) => {
              return (
                <tr key={course._id}>
                  <td>{course._id}</td>
                  <td>{course.name}</td>
                  <td>{course.price}</td>
                  <td>{course.isActive ? "Active" : "Inactive"}</td>
                  <td>
                    {course.isActive ? (
                      <Button
                        variant='danger'
                        className='mx-2'
                        onClick={() => {
                          archive(course._id);
                        }}
                      >
                        Archive
                      </Button>
                    ) : (
                      <Button 
                        variant='success' 
                        className='mx-2'
                        onClick={() => {
                          activate(course._id);
                        }}
                        >
                        Activate
                      </Button>
                    )}
                  </td>
                </tr>
              );
            })
          );
        });
    }
  }, []);




  return (
    <>
      <h1 className='my-5 text-center'>Admin Dashboard</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>idSample</td>
            <td>nameSample</td>
            <td>priceSample</td>
            <td>statusSample</td>
            <td>actionsSample</td>
          </tr>
          {allCourses}
        </tbody>
      </Table>
    </>
  );
}
