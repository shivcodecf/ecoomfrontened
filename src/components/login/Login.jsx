import React from 'react'
import '../../css/Login.css'
import TextField from '@mui/material/TextField';
import login1 from "../../images/login1.png"
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom'
import home from "../../images/home-logo.jpg"
import '../../css/Home.css'

const Login = () => {
  return (
    <> 
    <div className='login_main'>

<div className='login_image'>
   <img src="https://media.istockphoto.com/id/1281150061/vector/register-account-submit-access-login-password-username-internet-online-website-concept.jpg?s=612x612&w=0&k=20&c=9HWSuA9IaU4o-CK6fALBS5eaO1ubnsM08EOYwgbwGBo=" alt=''/>
</div>
<div className='login_form'>
       <h2>Shop Easy</h2>
      <form>
   
        <input type="email" placeholder='Email' className='login_email' required/>
        <br/>
        <input type="password" placeholder='Password' className='login_password' required/>
        <br/>
      <NavLink to='/'> <button action="submit" className='login_submit' >  Login </button></NavLink> 
    </form>
</div>

</div>
      </>
  )
}

export default Login
