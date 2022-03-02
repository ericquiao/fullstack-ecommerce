import { useState, useContext, useEffect } from "react";
import { Form, Button } from "react-bootstrap";

import Swal from "sweetalert2";

import UserContext from "../userContext";

import { Navigate } from "react-router-dom";

const Login = () => {
  const { user, setUser } = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (email !== "" && password !== "") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [email, password]);

  function loginUser(e) {
   
    e.preventDefault();

    fetch("http://localhost:4000/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        
        if (data.accessToken) {
          Swal.fire({
            icon: "success",
            title: "Login Successful",
            text: "Thank you for logging in!",
          });

          localStorage.setItem("token", data.accessToken);

          let token = localStorage.getItem("token");

          fetch("http://localhost:4000/users/getUserDetails", {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
            .then((res) => res.json())
            .then((data) => {
              setUser({
                id: data._id,
                isAdmin: data.isAdmin,
              });
            });
        } else {
          Swal.fire({
            icon: "error",
            title: "Login Failed",
            text: data.message,
          });
        }
      });
  }

  return user.id ? (
    <Navigate to='/courses' replace={true} />
  ) : (
    <>
      <h1 className='my-5 text-center'>Login</h1>
      <Form onSubmit={(e) => loginUser(e)}>
        <Form.Group>
          <Form.Label>Email:</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter Email'
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password:</Form.Label>
          <Form.Control
            type='password'
            placeholder='Enter Password'
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </Form.Group>
        {isActive ? (
          <Button variant='primary' type='submit' className='my-5'>
            Submit
          </Button>
        ) : (
          <Button variant='primary' disabled className='my-5'>
            Submit
          </Button>
        )}
      </Form>
    </>
  );
};
export default Login;
