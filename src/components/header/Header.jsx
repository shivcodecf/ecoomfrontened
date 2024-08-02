import React from 'react'
import '../../css/Header.css'
import logo from "../../images/logo.png"
import logo1 from "../../images/shopeay logo.webp"
import logo2 from "../../images/final logo.jpg"
import Login from '../login/Login'
import MenuIcon from '@mui/icons-material/Menu';
import { useAuth0 } from "@auth0/auth0-react";
import { ButtonGroup } from '@mui/material'
import Signup from '../signup/Signup' 
import { useAuth } from "../../Context/AuthProvider"; 
import { Navigate } from "react-router-dom";
import Logout from '../logout/Logout'




import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';



import { NavLink } from 'react-router-dom'
import { Button } from '@mui/material'


const Navbar = () => {  
  const [authUser, setAuthUser] = useAuth();
  // const { loginWithRedirect,logout,isAuthenticated,user } = useAuth0();
  return (
    <>


<header> 

  <div className="container_nav">
    <div className="logo-box">
    <NavLink to = "/">
        <img src={logo2} alt='logo' />
        {/* <div>ShopHub</div> */}
    </NavLink>
    </div>
    <nav>
      
     
    <ul >
    <li><NavLink to = "/" className="nav_">Home</NavLink></li>
     
      <li><NavLink to = "/Product" className="nav_">Products</NavLink></li>
      <li><NavLink to = "/Contact" className="nav_">Contact</NavLink></li> 

      {
         authUser ?   <li><NavLink to = "/Signup" classNameName="nav_ nav_login">SIGNUP</NavLink></li>     : <li><NavLink to = "/Login" classNameName="nav_ nav_login">Login</NavLink></li>  
      }
       
       
       
       {authUser && (
                <li><Logout /></li>
              )}
      

         
      
             
           

      

      
   </ul> 

   
   
   
  
  </nav>  

             


  
 
  
  </div>
  
  
</header>

</>


  )

}

export default Navbar;







 
          