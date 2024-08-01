import React from 'react'
import { useState,useEffect } from 'react'
import '../../css/Product.css'
import shirt3 from "../../images/shirt3.png"
import Shirts from './Shirts'
import Navbar from './Navbar'

import Jackets from './Jackets'
import shirt4 from "../../images/shirt4.png"
import shirt5 from "../../images/shirt5.png"
import shirt6 from "../../images/shirt6.png"
import banner from "../../images/banner.jpg"

import { NavLink } from 'react-router-dom'
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import ShoppingBagRoundedIcon from '@mui/icons-material/ShoppingBagRounded'; 

import { ShoppingCart } from 'lucide-react';




import Cards  from './Cards'
import list from './data'
import Cart from './Cart'




const Product = () => {    
  let flag=1;
  const[show,setShow]=useState(flag);

  

  const handler=()=>{
       
    setShow(flag=>flag+1);
 }

 
  


       



    
    const[cart,setCart]=useState([]);
    
    const[itemcount,setitemcount]=useState(0);
    

   

    const AddItemPrice = (item,d) => {
        const ind= cart.indexOf(item);
        const arr=cart;
        arr[ind].amount+=d;
        if (arr[ind].amount === 0) arr[ind].amount = 1;
        setCart([...arr]);


    };
  
    const Random =()=>{
        
    
      let cnt=0;

        cart.map((item) => cnt++);
        setitemcount(cnt);
         
        
    
    
    }
    useEffect(() => {
        Random();
      });  




      const [isFixed, setIsFixed] = useState(false); 

    //   useEffect(() => {
    //     const fetchProducts = async () => {
    //         try {
    //             const response = await axios.get('http://localhost:5002/api/products', { withCredentials: true });
    //             setProducts(response.data.products || []);
    //         } catch (err) {
    //             setError(err.response ? err.response.data.message : 'Error fetching products');
    //         }
    //     };

    //     fetchProducts();
    // }, []);



useEffect(() => {
  const handleScroll = () => {
    const threshold = 350; // Adjust this value as needed
    if (window.scrollY > threshold) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  };

  window.addEventListener('scroll', handleScroll);

  // Clean up the event listener on unmount
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);


   


    


    
  return (
   
 
    <div >
         
       
         <div className='cart-top'>
         <ShoppingCart 
  className={`main-cart ${isFixed ? 'fixed' : ''} text-4xl sm:text-3xl md:text-4xl lg:text-5xl cursor-pointer`} 
  onClick={() => handler()} 
/>


        
       
        
        
        
        <div className={`main-cart-count ${isFixed ? 'fixed' : ''}`}  >{itemcount}</div>
       </div>
       
       
       {/* <div classNameName="product-nav">
       <Navbar  />
       </div> */}
       <div className="best-deals-p">
      
       
       
         
           </div>
        
           <div className='product-container'>
       {
        
        
        
       
        show%2 ?
       
       
      list.map((item) => (
       
       <>
        <Cards key={item.id}  cart={cart} setCart={setCart} item={item} style={{display:"flex"}}/>
        {/* < Shirts key={item.id}  cart={cart} setCart={setCart} item={item}/> */}
        </>
      )):
     
    
      <div className="cart_box" >
       
      <Cart cart={cart} setCart={setCart} AddItemPrice={AddItemPrice} show={show} flag={flag} setShow={setShow}/>
      </div>
      
      } 
        </div>
     
      
       
      
     


        

      </div>


    
        
           
      
      
  )
}

export default Product
