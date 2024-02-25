import React from 'react'
import AddLocationIcon from '@mui/icons-material/AddLocation';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import TelegramIcon from '@mui/icons-material/Telegram';
import Divider from '@mui/material/Divider';
import contact from "../../images/contact-logo.png"
import Button from '@mui/joy/Button';


import TextField from '@mui/material/TextField';



import '../../css/Contact.css'

const Contact = () => {
  return (
    <> 
     <p className='contact-heading'></p>
    <div className="contact-container">
   
    <div className="contact-left">
    <div className="location">
        <AddLocationIcon style={{color:"blue"}}/>
        <p>Address</p>
        <p>ghaziabad</p>
        <p>Delhi-Meerut Expressway</p>
    </div>
    <Divider light style={{width:"200px",marginleft:"5px" ,color:"black"}}/>
    <div className="phone">
   < LocalPhoneIcon style={{color:"blue"}}/>
   <p>Call</p>
   <p>8601028673</p>
   <p>7800634869</p>
    </div>
    <Divider light style={{width:"200px",marginleft:"5px"}}/>
    <div className="email">
        <p><TelegramIcon style={{color:"blue"}}/></p>
        <p>shopEasy@gmail.com</p>
        <p>info@gmail.com</p>
    </div>
   
    </div>
    {/* <div className="divider-contact">
    <Divider orientation='vertical' style={{marginLeft:"-100px"}}/>
    </div>
     */}
    
    <div className="contact-right">
        <p>Send us message</p>
       
        <div className="send-us">
        <form action="https://formspree.io/f/xoqogjwo" method="POST">
           <div className="name-contact">
        <TextField id="standard-basic"  
        type="username"
        name="username"
        autoComplete='off'
        required
        variant="standard" placeholder='Enter your Name' />
        </div>
         
       <div className="email-contact">
       < TextField id="standard-basic" 
       type="email"
       name="email"
       autoComplete='off'
       required
       
       variant="standard" placeholder='Enter your email' />
       </div>
       <div className="textarea-contact">
       <textarea id="w3review" 
       
       name="message" rows="4" cols="50" 
       autoComplete='off'
       required
       
       placeholder='message'/>


</div>
<div className="button-contact">
   <button type="submit" class="button"><span>Send</span></button>
   </div>
   </form>
        </div>
      
        
    </div>
    {/* <div className="contact-image">
    <img src={contact} alt='image'/>
    </div> */}
    </div>
    </>
  )
}

export default Contact
