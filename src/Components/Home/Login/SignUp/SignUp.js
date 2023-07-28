import React from "react";
import "./SignUp.css";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div>
      <div className=" login-container pb-5 bg-success-subtle">
        <h1 className="pt-3 pb-3 ">Please Login First</h1>
        <div className="under-login bg-dark pb-5 pt-1">
          <Form className="mx-5 my-5 ">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="text-danger fs-5 fw-bold">
                Your Name
              </Form.Label>
              <Form.Control type="email" placeholder="Type Your Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="text-danger fs-5 fw-bold">
                Email address
              </Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="text-danger fs-5 fw-bold">
                Password
              </Form.Label>
              <Form.Control type="password" placeholder="password" />
            </Form.Group>
            <Link to={"/login"}>Already Sign-Up?</Link> <br />
            <br />
            <br />
            <Button variant="warning">Google Sign In</Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
