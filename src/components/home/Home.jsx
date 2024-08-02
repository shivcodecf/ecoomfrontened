import React from 'react'
import '../../css/Home.css'
import home from "../../images/home-logo.jpg"

import shirt1 from "../../images/shirt1.png"
import shirt2 from "../../images/shirt2.png"
import jacket1 from "../../images/jacket1.png"
import {BiDollarCircle,BiRupee,BiCloudDownload,BiLayer} from "react-icons/bi";
import { TbWorldUpload } from "react-icons/tb";
import { AiFillFacebook, AiFillTwitterSquare, AiFillLinkedin,  AiFillGithub} from "react-icons/ai";
import { NavLink } from 'react-router-dom'
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import InstagramIcon from '@mui/icons-material/Instagram';
import  LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';


const Home = () => {
  return (
    <>
    <div className='home-container'>
    <div className='Home-text-container'>
      <h1 className='logo-name'>SHOP EASY</h1>
      <p className='home-text'>Welcome to <span className='cartify-text'>Shop Easy</span></p>
      <div className="flex flex-col items-start">
  <p className='home-discription '>An E-Commerce Website where you can</p>
  <p className='home-discription'>buy all your Favorite Shirts and</p>
  <p className='home-discription'>Jackets at the lowest Price.</p>
</div>
{/* <a href="http://localhost:3001/Product">
<button classNameName='sign-up '>SHOP NOW</button>
</a> */}
<NavLink to = "/Product" className="nav_"><button className='sign-up '>SHOP NOW</button></NavLink>

    </div>
    <div className='home-logo'>
     <img src={home}/>
    </div>
    </div>
    <div className="all_service" >
        <div className="service">
            <div className="service_icon"> 
     <LocalShippingIcon/>
            </div>
            <div className="service_description">
<span className="feature">Free Delivery</span> <br/>
<span className="des">Free Shipping on all Orders</span>
            </div>
        </div>


        <div className="service">
            <div className="service_icon"> 
            <LocalShippingIcon/>
            </div>
            <div className="service_description">
<span className="feature">Online Support 24/7</span> <br/>
<span className="des">Support Online 24 hours a day</span>
            </div>
        </div>

        <div className="service">
            <div className="service_icon"> 
            <LocalShippingIcon/>
            </div>
            <div className="service_description">
<span className="feature">Money Return</span> <br/>
<span className="des">Back Guarantee under 7 days</span>
            </div>
        </div>

        <div className="service">
            <div className="service_icon"> 
            <LocalShippingIcon/>
            </div>
            <div className="service_description">
<span className="feature">Member Discount</span> <br/>
<span className="des">On every order over 499</span>
            </div>
        </div>        
    </div>
    {/* <div classNameName="deal-container"> */}
    <div className="deal-container">
    <p className='trending-name'>Features products</p>
    <div className="Deals">
   

   <div className="deal-cards">
   <img src={shirt1}/>
   <p className='shirt'>Roadster</p>
   <p className='shirt-desc'>Men cotton casual shirt</p>
   <div className="rupee-container">
   <p className='shirt-rupee'>Rs.599</p>
   <p className='shirt-profit'>Rs.999</p>
   <p className='shirt-off'>(40% OFF)</p>
   </div>
   </div>
   <div className="deal-cards">
   <img src={jacket1}/>
   <p className='shirt'>CL SPORT</p>
   <p className='shirt-desc'>Men cotton casual shirt</p>
   <div className="rupee-container">
   <p className='shirt-rupee'>Rs.999</p>
   <p className='shirt-profit'>Rs.1999</p>
   <p className='shirt-off'>(50% OFF)</p>
   </div>
   </div>
   </div>
   </div>
   <div className="Trusted-container">
   <h1 className="trust_head">Trusted</h1><div className="trust_main">
    
    <div className="trust_icon">
      <TbWorldUpload style={{color:"#6085ef"}}/>
    </div>
    <div className="trust_icon">
      <BiDollarCircle/>
    </div>
    <div className="trust_icon">
      <BiRupee style={{color:"#6085ef"}}/>
    </div>
    <div className="trust_icon">
      <BiCloudDownload/>
    </div>
    <div className="trust_icon">
      <BiLayer style={{color:"#6085ef"}}/>
    </div>
  </div>
   </div>
   



   

    
    </>

    
  )
}

export default Home
