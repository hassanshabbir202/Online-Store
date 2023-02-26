import React from 'react'
import { Layout } from 'antd';
const { Footer} = Layout;
const Foter = () => {
  return (
    <div style={{backgroundColor:"#fff",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",padding:"1.5rem",marginTop:"8vh"}}>
       <Footer 
          style={{
            textAlign: 'center',
            marginTop:"2.4vh"
          }}
        >
          Ant Design ©2023 Created by Ant UED
        </Footer>
    </div>
  )
}

export default Foter
