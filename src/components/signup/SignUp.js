import React,{useState} from 'react'
import TextCont from '../textCont/TextCont'
import {Alert, Button, Form, Input } from 'antd';
import { Container } from 'react-bootstrap';
import "../signup/SignUp.css"
import { useNavigate , Link} from "react-router-dom";
import {auth} from "../firebase/Firebase"
import { createUserWithEmailAndPassword   } from "firebase/auth";

const SignUp = () => {

  const navigate = useNavigate();


    const [data,setData] = useState({
        username:"",
        email:"",
        contact:"",
        password:""
      })

      const [error,setError] = useState("")

    //  const {signUp} = useUserAuth();

      const submitSignUp = () => {
        createUserWithEmailAndPassword(auth, data.email, data.password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
   
          console.log(user)
          // ...
        })
        .catch((error) => {
          const errorMessage = error.message;
          console.log(errorMessage)
          // ..
        });
        navigate("/login");
     }



      
        let name,value;
       const handleChange = (event) => {
        name = event.target.name;
        value = event.target.value;
        setData({...data, [name]:value})
     }

     const onFinish = (values) => {
        console.log('Success:', values);
      };





  return (
    <div>
      <Container className='sign-up-bg-div'>
      <div className="textContainer">
        <h2 className="text-heading">SYLANI WELFARE</h2>
        <p className="text-paragraph">ONLINE DISCOUNT STORE</p>
    </div>
      <div className='form-container'>
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
   
      name="username"
      rules={[
        {
          required: true,
          message: 'Please input your username!',
        },
      ]}
    >
      <Input placeholder="Username" className='inputs' value={data.username}  name="username" onChange={handleChange}/>
    </Form.Item>

    {error && <Alert variant='danger'>{error}</Alert>}

    <Form.Item
        name="email"
      rules={[
        {
          required: true,
          message: 'Please input your Email!',
        },
      ]}
    >
      <Input placeholder="Email" className='inputs'   value={data.email} name="email"  onChange={handleChange}/>
    </Form.Item>

    <Form.Item
   
      name="contact"
      rules={[
        {
          required: true,
          message: 'Please input your Contact!',
        },
      ]}
    >
      <Input placeholder="Contact" className='inputs'  value={data.contact}  name="contact" onChange={handleChange}/>
    </Form.Item>

    <Form.Item
   
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password placeholder="password" className='inputs'  value={data.password} name="password" onChange={handleChange}/>
    </Form.Item>

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <a href='/login'><Button className='sign-up-btn' htmlType="submit" onClick={submitSignUp}>
        Sign Up
      </Button></a>
    </Form.Item>
    </Form>
      </div>
         <div className='already-have-an-account'>
        <Link to='/login' className='already-account'>Already have an Account ?</Link>
        <Link to='/login' className='already-login'>Login</Link>

      </div>
      </Container>
   
    </div>
  )
}

export default SignUp
