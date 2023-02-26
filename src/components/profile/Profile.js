import { Button, Form, Input } from 'antd'
import React from 'react'
import adminlogo from "../assets/adminlogo.jpg"
import "../profile/Profile.css"
import { InboxOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
const { Dragger } = Upload;


const props = {
  name: 'file',
  multiple: true,
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  onChange(info) {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log('Dropped files', e.dataTransfer.files);
  },
};


const Profile = () => {
  return (
    <div className='profile-cont'>
      <h3 style={{marginTop:"2vh"}}>Settings</h3>
      <img className='profile-logo' style={{marginTop:"2vh"}} src={adminlogo}/>
      <Form.Item
   
   name="updatename"
   rules={[
     {
       required: true,
       message: 'Please input your updatename!',
     },
   ]}
 ><br/>
   <Input placeholder="updatename" className='inputs mx-2'  name="updatename"/>
   <Button className='update-item' htmlType="submit">
        Update
      </Button>
 </Form.Item>
 <Dragger {...props} style={{padding:"0rem 2rem",width:"300px"}}>
    <p className="ant-upload-drag-icon">
      <InboxOutlined />
    </p>
    <p className="ant-upload-text" style={{fontSize:"10px"}}>Click or drag file to this area to upload</p>
  </Dragger><br/>


  <Form.Item
   
   name="new-category-name"
   rules={[
     {
       required: true,
       message: 'Please input your new-category-name!',
     },
   ]}
 >
   <Input placeholder="new-category-name" className='inputs'  name="new-category-name"/>
   <Button className='update-item mx-2' htmlType="submit">
        Add
      </Button>
 </Form.Item>

    <div className='category d-flex my-2 mx-2' style={{border:"1px solid green", width:"300px",borderRadius:"12px"}}>
        <img style={{height:"30px",marginTop:"1vh",marginLeft:"1vw"}} src='https://media.istockphoto.com/id/1400057530/photo/bananas-isolated.jpg?b=1&s=170667a&w=0&k=20&c=uiSdjIQkTr7S4gEdW_oB_5zfFYhpfe0LP-CryQl49w4='/>
        <p style={{marginLeft:"3vw",marginTop:"1vh"}}>Fruits</p>
    </div>
    <div className='category d-flex my-2 mx-2' style={{border:"1px solid green", width:"300px",borderRadius:"12px"}}>
        <img style={{height:"30px",marginTop:"1vh",marginLeft:"1vw"}} src='https://thumbs.dreamstime.com/b/healthy-fresh-produce-vegetables-27382614.jpg'/>
        <p style={{marginLeft:"3vw",marginTop:"1vh"}}>Vegetables</p>
    </div>
   <Button className='log-out-btn' htmlType="submit" >
      Logout
      </Button>
    </div>
  )
}

export default Profile
