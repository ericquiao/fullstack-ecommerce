import { useState, useEffect, useContext } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import Swal from "sweetalert2";
import UserContext from "../userContext";

const ViewCourse = () => {


  const { courseId } = useParams();

  const { user } = useContext(UserContext);
 
  const [courseDetails, setCourseDetails] = useState({
    name: null,
    description: null,
    price: null,
  });

  useEffect(() => {

    fetch(`http://localhost:4000/courses/getSingleCourse/${courseId}`)
      .then((res) => res.json())
      .then((data) => {
        //console.log(data);
        setCourseDetails({
          name: data.name,
          description: data.description,
          price: data.price,
        });
      });
  }, [courseId]);

  function enroll() {
    console.log("enroll");
    console.log(courseId);

    fetch("http://localhost:4000/users/enroll", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        courseId: courseId,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.message === "Enrolled Successfully.") {
          Swal.fire({
            icon: "success",
            title: "Enrolled Successully.",
            text: "Thank you for enrolling.",
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Enrollment Failed.",
            text: data.message,
          });
        }
      });
  }

  return (
    <Row className='mt-5'>
      <Col>
        <Card>
          <Card.Body className='text-center'>
            <Card.Title>{courseDetails.name}</Card.Title>
            <Card.Subtitle>Description:</Card.Subtitle>
            <Card.Text>{courseDetails.description}</Card.Text>
            <Card.Subtitle>Price:</Card.Subtitle>
            <Card.Text>{courseDetails.price}</Card.Text>
          </Card.Body>
          {user.id && user.isAdmin === false ? (
            <Button variant='primary' className='btn-block' onClick={enroll}>
              Enroll
            </Button>
          ) : (
            <Link className='btn btn-danger btn-block' to='/login'>
              Login To Enroll
            </Link>
          )}
        </Card>
      </Col>
    </Row>
  );
};
export default ViewCourse;
