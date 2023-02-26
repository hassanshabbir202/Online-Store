import React from 'react'
import { Carousel } from 'antd';
import image1 from "../assets/firstsliderimg.jpg"
import image2 from "../assets/slidersecondimg.jpg"
import image3 from "../assets/sliderthirdimg.jpg"

import "../homeSlider/Slider.css"


const Slider = () => {
  return (
    <>

    <div>
      <Carousel autoplay>
    <div>
      <h3 className='content-style' ><img style={{width:"100%",height:"100%"}} src={image2} /></h3>
    </div>
    <div>
      <h3 className='content-style' ><img style={{width:"100%",height:"100%"}} src={image1} /></h3>
    </div>
    <div>
      <h3 className='content-style' ><img style={{width:"100%",height:"100%"}} src={image3} /></h3>
    </div>
  </Carousel>
    </div>
    </>
  )
}

export default Slider
