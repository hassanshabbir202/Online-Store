import React, { Component, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const ProtectedRoute = (props) => {

    const {Component} = props
    const navigate = useNavigate();
     
    useEffect(()=>{
        let loggedIn = localStorage.getItem("login");
        if(!loggedIn){
             navigate("/login")
        }
    })

  return (
    <div>
      <Component/>
    </div>
  )
}

export default ProtectedRoute
