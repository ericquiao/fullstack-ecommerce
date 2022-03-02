import { useContext } from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import UserContext from "../userContext";
import { Link } from "react-router-dom";

const AppNavBar = () => {

  const { user } = useContext(UserContext);
  console.log(user);

  return (
    <Navbar bg='dark' variant='dark' expand='lg'>
      <Container fluid>
        <Navbar.Brand href='/'>B146 Booking</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ml-auto'>
            <Link to='/' className='nav-link'>
              Home
            </Link>
            <Link to='/courses' className='nav-link'>
              Courses
            </Link>
            {user.id ? (
              user.isAdmin ? (
                <>
                  <Link to='/addCourse' className='nav-link'>
                    Add Course
                  </Link>
                  <Link to='/logout' className='nav-link'>
                    Logout
                  </Link>
                </>
              ) : (
                <Link to='/logout' className='nav-link'>
                  Logout
                </Link>
              )
            ) : (
              <>
                <Link to='/register' className='nav-link'>
                  Register
                </Link>
                <Link to='/login' className='nav-link'>
                  Login
                </Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default AppNavBar;
