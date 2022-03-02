import {useState,useEffect,useContext} from 'react'
 
import Banner from '../components/Banner';
import CourseCard from '../components/CourseCard';
import AdminDashboard from '../components/AdminDashboard';
 
import UserContext from '../userContext';
 
const Courses = () => {
 
   const {user} = useContext(UserContext);
 
   let coursesBanner = {
 
       title: "Welcome to the Courses Page.",
       description: "View one of our courses below.",
       buttonText: "Register/Login to Enroll",
       destination: "/register"
 
   }
 
   const [coursesArray,setCoursesArray] = useState([])
 
   useEffect(()=>{
 
        fetch("http://localhost:4000/courses/getActiveCourses")
       .then(res => res.json())
       .then(data => {
 
           setCoursesArray(data.map(course => {
 
               return (
 
                       <CourseCard key={course._id} courseProp={course} />
 
                   )
 
           }))
 
       })
 
 
   },[])
 
   return (
 
       user.isAdmin
       ?
       <AdminDashboard />
       :
       <>
           <Banner bannerProp={coursesBanner}/>
           {coursesArray}
       </>
 
 
   )
}
export default Courses;
