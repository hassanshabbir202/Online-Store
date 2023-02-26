import React from 'react'
import AdminHome from '../adminhome/AdminHome'
import NavM from "../navbar/NavM"

const Admin = () => {
  return (
    <div>
       <NavM/>
        <AdminHome cdata={0}/>
    </div>
  )
}

export default Admin
