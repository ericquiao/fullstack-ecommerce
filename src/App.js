import { useState, useEffect } from "react";

import { Container } from "react-bootstrap";

import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

import AppNavBar from "./components/AppNavBar";

import Home from "./pages/Home";
import Courses from "./pages/Courses";
// import Register from "./pages/Register";
 import Login from "./pages/Login";
// import ErrorPage from "./pages/ErrorPage";
import AddCourse from "./pages/AddCourse";
 import Logout from "./pages/Logout";
 import ViewCourse from "./pages/ViewCourse";

import { UserProvider } from "./userContext";

import "./App.css";

export default function App() {
  const [user, setUser] = useState({
    id: null,
    isAdmin: null,
  });

  useEffect(() => {
    fetch("http://localhost:4000/users/getUserDetails", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setUser({
          id: data._id,
          isAdmin: data.isAdmin,
        });
      });
  }, []);

  const unsetUser = () => {
    localStorage.clear();
  };

  return (
    <>
      <UserProvider value={{ user, setUser, unsetUser }}>
        <Router>
          <AppNavBar />
          <Container>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/courses/viewCourse/:courseId" element={<ViewCourse />} />
              <Route path="/addCourse" element={<AddCourse />} />

              <Route path="/login" element={<Login />} />
 
             <Route path="/logout" element={<Logout />} />

            </Routes>
          </Container>
        </Router>
      </UserProvider>
    </>
  );
}
