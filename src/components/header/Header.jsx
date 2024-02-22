import React from 'react'
import '../../css/Header.css'
import logo from "../../images/logo.png"
import logo1 from "../../images/shopeay logo.webp"
import logo2 from "../../images/final logo.jpg"
import MenuIcon from '@mui/icons-material/Menu';



import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';



import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <>


<header>
  <div class="container_nav">
    <div class="logo-box">
    <NavLink to = "/">
        <img src={logo2} alt='logo' />
        {/* <div>ShopHub</div> */}
    </NavLink>
    </div>
    <nav>
      
     
    <ul >
    <li><NavLink to = "/" className="nav_">Home</NavLink></li>
     
      <li><NavLink to = "/Product" className="nav_">Products</NavLink></li>
      <li><NavLink to = "/Contact" className="nav_">ContactUs</NavLink></li>
      <li><NavLink to = "/Login" className="nav_ nav_login">Login</NavLink></li>
      
   </ul>
   
   
  
  </nav>
  
 
  {/* <a href="#" className='nav-toggle'>
  <MenuIcon  style={{marginLeft:"200px"}} />
  </a> */}
  </div>
  
  
  
</header>
</>
  )
}

export default Navbar;







 
          