import React, { useState } from 'react'
import adminlogo from "../assets/adminlogo.jpg"
import { UserOutlined } from '@ant-design/icons';
import { Button, Input , Timeline} from 'antd';
import { signOut } from "firebase/auth";
import {auth} from "../firebase/Firebase"
import "../userprofile/UProfile.css"
import { useNavigate } from 'react-router-dom';

const UProfile = () => {
 
   const navigate = useNavigate();

       const logout = () => {
        signOut(auth).then(() => {
          alert("SignOut Successfully");
          localStorage.setItem("login", false);
          navigate("/")
        }).catch((error) => {
          alert(error);
        });
       }
  const [editName, setEditName] = useState("")

  const updateName = () => {
    document.querySelector(".prev-name").innerHTML = editName;
    setEditName("")
  }

  const handleChange = (e) => {
    setEditName(e.target.value);
  }


  return (
    <div>
       <div className="u-pro">
       <h3 style={{marginTop:"2vh"}} className='prev-name'>Hassan</h3>
      <img className='profile-logo' style={{marginTop:"2vh"}} src={adminlogo}/>
      <Input placeholder="Edit Name" value={editName} onChange={handleChange} style={{width:"300px",marginTop:"4vh"}} prefix={<UserOutlined />} />
       <div>
        <Button className='update-name' onClick={updateName}>Update Name</Button>
       </div>
        <div style={{marginTop:"5vh"}}>
        <Timeline
    items={[
      {
        children: 'Create a services site 2015-09-01',
      },
      {
        children: 'Solve initial network problems 2015-09-01',
      },
      {
        children: 'Technical testing 2015-09-01',
      },
      {
        children: 'Network problems being solved 2015-09-01',
      },
    ]}
  />
  
        </div>
        <div>
        <Button className='logout' onClick={logout}>LogOut</Button>
        </div>
       </div>
    </div>
  )
}

export default UProfile
