import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import { Button } from 'antd';
import "../cart/Cart.css";
import UserNav from "../userNav/UserNav";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/Firebase";
import Form from 'react-bootstrap/Form';
import { Table } from 'antd';

const Cart = () => {
  const [cartData, setCartData] = useState([]);
  const [count,setCount] = useState(0)
  const [formData,setFormData] = useState({
    name:"",
    email:"",
    phone:"",
    shipping:""
  })

  // const removeItem = (item) => {
  //   setCartData(cartData.filter(i => i.id !== item.id));
  // };

  useEffect(() => {
    const colRef = collection(db, "cartItems");
    getDocs(colRef).then((snapshot) => {
      let items = [];
      snapshot.docs.forEach((doc) => {
        items.push({ ...doc.data(), id: doc.id });
      });
      setCartData(items);
    });
  }, []);

  const clearCart = () => {
  }
  
  let name , value
  const handleOnChange = (event) => {
   name = event.target.name;
   value = event.target.value;

  }

  

  return (
    <>
      <div>
        <UserNav />
        <Container>
      <h2 className="text-center my-4 cart-text">Your Cart</h2>
      <div>
        
      
      {
        cartData.map((element)=>{
          return(
            <>
<Table pagination={false} />
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 20 }}>
        <Button type="primary">Checkout</Button>
      </div>
            </>
          )
        })
      }
    </div>
    </Container>
       <div style={{display:"flex", justifyContent:"center"}}>
       <div className="adress-form-container">
        <h2 className="enter-details">Enter Details</h2>
       <Form className="my-4">
      <Form.Group className="mb-3" >
        <Form.Control type="text" onChange={handleOnChange} value={formData.name} className="multiple-inputs" placeholder="Full Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" onChange={handleOnChange} value={formData.email} className="multiple-inputs" placeholder="Email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="phone">
        <Form.Control type="phone" onChange={handleOnChange} value={formData.phone} className="multiple-inputs" placeholder="Phone Num" />
      </Form.Group>

      
      <Form.Group className="mb-3" controlId="shipping">
        <Form.Control type="text" onChange={handleOnChange} value={formData.shipping} className="multiple-inputs" placeholder="Shipping" />
      </Form.Group>
      
      <Button type="primary">Place Order</Button>
    </Form>
       </div>
       </div>
      </div>
    </>
  );
};

export default Cart;
