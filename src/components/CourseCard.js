import { useState } from "react";

import { Card } from "react-bootstrap";

import { Link } from "react-router-dom";

const CourseCard = ({ courseProp }) => {
  const [count, setCount] = useState(0);
  const [seats, setSeats] = useState(30);

  function enroll() {
    setCount(count + 1);
    setSeats(seats - 1);
  }

  return (
    <Card>
      <Card.Body>
        <Card.Title>{courseProp.name}</Card.Title>
        <Card.Text>{courseProp.description}</Card.Text>
        <Card.Text>Price: {courseProp.price}</Card.Text>
        <Link
          to={`/courses/viewCourse/${courseProp._id}`}
          className='btn btn-primary'
        >
          View Course
        </Link>
      </Card.Body>
    </Card>
  );
};
export default CourseCard;
