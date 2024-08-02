import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import  LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import '../../css/Home.css'

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="container">
            <div className="footer-content1">
                <h3>Contact Us</h3>
                <p>Email:shopEasy@example.com</p>
                <p>Phone:+918601028673</p>
                {/* <p>Address:Ghaziabad Sanchi</p> */}
            </div>
            {/* <div className="footer-content">
                <h3 className='Cartify'>Shop Easy</h3>
                 <ul className="list">
                    <li><a href="http://localhost:3000/">Home</a></li>
                    <li><a href="http://localhost:3000/Product">Product</a></li>
                    
                    <li><a href="http://localhost:3000/Contact">Contact</a></li>
                    <li><a href="http://localhost:3000/Login">Login</a></li>
                 </ul>
            </div> */}
            <div className="footer-content">
                <h3 className='followh3'>Follow Us</h3>
                <ul className="social-icons">
                 <li><a href=""><InstagramIcon/></a></li>
                 <li><a href=""><TwitterIcon /></a></li>
                 
                 <li><a href="https://www.linkedin.com/in/shivam-yadav-620a03232/"><LinkedInIcon/></a></li>
                </ul>
                </div>
        </div>
        <div className="bottom-bar">
            <p>&copy; 2023 Shop Easy . All rights reserved</p>
        </div>
        </footer>
    

    </div>
  )
}

export default Footer
