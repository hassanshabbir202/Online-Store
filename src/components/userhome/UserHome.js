import React from 'react'
import UserNav from '../userNav/UserNav'
import Slider from "../homeSlider/Slider"
import ShopData from '../shopData/ShopData'

const UserHome = () => {
  return (
    <div>
      <UserNav/>
      <Slider/>
      <ShopData/>
    </div>
  )
}

export default UserHome
