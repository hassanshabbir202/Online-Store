import React from 'react'
import "./App.css"
import WelcomeScreen from './components/welcomeScreen/WelcomeScreen'
import {Routes , Route} from "react-router-dom"
import Login from './components/login/Login'
import Admin from './components/admin/Admin'
import AddAdminProduct from "./components/addAdminPro/AddAdminProduct"
import Profile from './components/profile/Profile'
import AdminP from './components/adminP/AdminP'
import ProfileP from './components/profileP/ProfileP'
import UserHome from './components/userhome/UserHome'
import Cart from './components/cart/Cart'
import SignUp from './components/signup/SignUp'
import Shopping from './components/shopping/Shopping'
import UserProfile from './components/userprofile/UserProfile'
import ProtectedRoute from './protectedRoutes/ProtectedRoute'

const App = () => {

  

  return (
    <>
    <Routes>

      
      <Route path='/' element={ <WelcomeScreen/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/login' element={<Login/>}/>

      {/* Protected Routes */}
      <Route path='/admin' element={<ProtectedRoute Component={Admin}/>}/>
      <Route path='/addproduct' element={<ProtectedRoute Component={AdminP}/>}/>
      <Route path='/profile' element={<ProtectedRoute Component={ProfileP}/>}/>
      <Route path='/home' element={<ProtectedRoute Component={UserHome}/>}/>
      <Route path='/cart' element={<ProtectedRoute Component={Cart}/>}/>
      <Route path='/shopping' element={<ProtectedRoute Component={Shopping}/>}/>
      <Route path='/userprofile' element={<ProtectedRoute Component={UserProfile}/>}/>
    </Routes>
    </>
  )
}

export default App
