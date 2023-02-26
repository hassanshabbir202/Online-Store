import React, { useEffect, useState } from "react";
import { Button, Form, Input } from "antd";
import { Container } from "react-bootstrap";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/Firebase";
import "../login/Login.css";
import { useNavigate, useLocation, Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  useEffect(()=>{
    let loggedIn = localStorage.getItem("login");
    if(loggedIn){
         navigate("/home")
    }
})

  const loginForm = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        localStorage.setItem("login", true);
        navigate("/home")
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        setError(errorMessage);
        // ..
      });
  };

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  return (
    <div>
      <Container className="bg-div">
        <div className="textContainer">
          <h2 className="text-heading">SYLANI WELFARE</h2>
          <p className="text-paragraph">ONLINE DISCOUNT STORE</p>
        </div>
        <div className="formCont">
          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            style={{
              maxWidth: 600,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            autoComplete="off"
          >
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your Email!",
                },
              ]}
            >
              <Input
                placeholder="Email"
                className="inputs"
                value={email}
                name="email"
                onChange={(event) => setEmail(event.target.value)}
              />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input
                placeholder="password"
                className="inputs"
                name="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </Form.Item>

            <div className="forgot-pasword">
              <a href="">Forgot Password?</a>
            </div>
            <span className="text-center" style={{ color: "red" }}>
              {error}
            </span>
            <div className="sign-in">
              <Button
                className="login-up-btn"
                htmlType="submit"
                onClick={loginForm}
              >
                Sign In
              </Button>
            </div>
          </Form>
        </div>
        <div className="already-have-an-account">
          <Link to="/signup" className="already-account">
            Already have an Account ?{" "}
          </Link>
          <Link to="/signup" className="already-login">
            Register
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Login;
