
import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from '../home/Home'
import Product from '../product/Product'
import Contact from '../contact/Contact'
import Shirts from '../product/Shirts.jsx'
import Login from '../login/Login.jsx'
import Signup from '../signup/Signup.jsx'
import Logout from '../logout/Logout.jsx'
import Header from '../header/Header.jsx'
import Navbar from '../product/Navbar.jsx'
import Jackets from '../product/Jackets.jsx'
import Cards from '../product/Cards.jsx'
import Footer from '../footer/Footer' 
import Cart from '../product/Cart.jsx' 
import { useAuth } from "../../Context/AuthProvider"; 
import { Navigate } from "react-router-dom";

const Routers = () => {

  const [authUser, setAuthUser] = useAuth();
 
  return (
   <Router>
    <div></div>
   <Header/>
   
   
    <Routes>

      <Route path='/' element = {<Home />} />
      <Route path='/products' element = {<Product/>} />
      <Route path='/shirts' element = {<Shirts/>} />
      <Route path='/jackets' element = {<Jackets/>} />
      <Route path='/product' element = { authUser ? < Product/> : <Navigate to="/login" /> }/> 
      <Route path='/contact' element = {<Contact />}/> 

      <Route path='/login' element = { authUser ?  <Navigate to ="/product" />: <Login/>} /> 

      <Route path='/signup' element = { <Signup/>} />

      <Route path='/logout' element = { authUser ? <Logout /> : <Navigate to ="/login"/>} /> 
       
    </Routes> 

    <Footer/>
    
   </Router>
 
  )
}

export default Routers