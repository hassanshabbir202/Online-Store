import React, { useState, useEffect, useContext } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../adminhome/AdminHome.css";
import { Container } from "react-bootstrap";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/Firebase";
import { Input, Space } from 'antd';
import Foter from "../footer/Foter";


const AdminHome = () => {
  const [showData, setShowData] = useState([]);
  const [searchVal,setSearchVal] = useState("");
    
  useEffect(() => {
    const colRef = collection(db, "products");
    getDocs(colRef).then((snapshot) => {
      let items = [];
      snapshot.docs.forEach((doc) => {
        items.push({ ...doc.data(), id: doc.id });
      });
      setShowData(items);
    });
  }, []);
  
  
  const cartItems = async (image,price) => {
    document.querySelector(".cart-icon").style.color="red"
    await (addDoc(collection(db,"cartItems"),{
      image: image,
      price: price
    }).then((res)=>{
      alert("Data Stored!");
    }).catch((err)=>{
      alert(err);
    })
    );
  }


  return (
    <div>
         
      <h3 className="text-center m-4">All Products Fruits , Vegetables , Meet</h3>
      <Container className="my-4">
        {showData.map((element , ind) => {
          return (
            <>
              <Card className="text-center my-4 cardCont">
                <Card.Header className="headerName">{element.itemname}</Card.Header>
                <Card.Body>
                  <div className="flexCont">
                    <Card.Title>
                      <img className="product-img" src={element.img} />
                    </Card.Title>
                    <Card.Text className="product-price">
                      Price : {element.unitprice}
                    </Card.Text>
                    <Card.Text className="product-unitname">
                      Unit : {element.unitname}
                    </Card.Text>
                    <Card.Text className="product-itemname">
                      Item : {element.itemname}
                    </Card.Text>
                    <Card.Text className="product-category">
                      Category : {element.category}
                    </Card.Text>
                    <Button className="cart-btn" onClick={() => cartItems(element.img , element.unitprice)}>Add to Cart</Button>
                    
                  </div>
                </Card.Body>
                <Card.Footer className="text-muted">Just Now</Card.Footer>
              </Card>
            </>
          );
        })}
      </Container>
      <Foter/>
    </div>
  );
};

export default AdminHome;
