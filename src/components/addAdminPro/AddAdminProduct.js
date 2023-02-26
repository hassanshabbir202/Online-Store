import React,{useState} from 'react'
import { Input , Form, Button } from 'antd';
import "../addAdminPro/AddAdminProduct.css"
import { InboxOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
import fakeData from '../fakeproducts/FakeProducts';
import { Select, Space } from 'antd';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase/Firebase';
const { TextArea } = Input;



const AddAdminProduct = () => {

  
  const [data,setData] = useState({
    img:"",
    itemname:"",
    category:"",
    description:"",
    unitname:"",
    unitprice:""
  })
  
  


  let name,value;
const handleChange = (event) => {
  name = event.target.name;
  value = event.target.value;
  setData({...data, [name]:value})
}

  
  const productsAdd = async () => {
    const {itemname,description,unitname,unitprice} = data;
    await (addDoc(collection(db,"products"),{
      img: data.img,
      itemname: data.itemname,
      category: data.category,
      description: data.description,
      unitname: data.unitname,
      unitprice: data.unitprice
    }).then((res)=>{
      alert("Data Stored!");
    }).catch((err)=>{
      alert(err);
    })
    )
  }
  return (
    <div>
      <div className='admin-cat-cont'>
      <h2 className='add-item'>Add New Items</h2>

      <Form.Item
        name="img"
      rules={[
        {
          required: true,
          message: 'Please input your Image Url!',
        },
      ]}
    >
      <Input placeholder="Image Url" className='inputs' value={data.img}    name="img"  onChange={handleChange}/>

      </Form.Item>
      
      <Form.Item
        name="itemname"
      rules={[
        {
          required: true,
          message: 'Please input your Item Name!',
        },
      ]}
    >
      <Input placeholder="Item Name" className='inputs' value={data.itemname}    name="itemname"  onChange={handleChange}/>

    </Form.Item>
 
    <Form.Item
        name="category"
      rules={[
        {
          required: true,
          message: 'Please input your Category!',
        },
      ]}
    >
      <Input placeholder="category" className='inputs' value={data.category}    name="category"  onChange={handleChange}/>

    </Form.Item>


  <Form.Item
        name="description"
      rules={[
        {
          required: true,
          message: 'Please input your Description!',
        },
      ]}
    >

    <TextArea className='inputs' name='description' value={data.description} rows={4} placeholder="Describe this Item"  onChange={handleChange} /> <br/>
    </Form.Item>


    <Form.Item
        name="unitname"
      rules={[
        {
          required: true,
          message: 'Please input your Unit Name!',
        },
      ]}
    >
      <Input placeholder="Unit Name" className='inputs' value={data.unitname}   name="unitname"  onChange={handleChange}/>

    </Form.Item>

    <Form.Item
        name="unitprice"
      rules={[
        {
          required: true,
          message: 'Please input your Unit Price!',
        },
      ]}
    >
      <Input placeholder="Unit Price" className='inputs' value={data.unitprice}    name="unitprice"  onChange={handleChange}/>

    </Form.Item>

    <a><Button className='add-product' htmlType="submit" onClick={productsAdd}>
        Add Product
      </Button></a>
    
      </div>
    </div>
  )
}

export default AddAdminProduct
