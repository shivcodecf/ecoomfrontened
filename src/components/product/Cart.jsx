import React from 'react'
import Cards from './Cards'; 
import { NavLink } from 'react-router-dom';

import { useState,useEffect } from 'react'
import '../../css/Product.css'
import DeleteIcon from '@mui/icons-material/Delete';
import ClearIcon from '@mui/icons-material/Clear'; 
import { MoveLeft } from 'lucide-react'; 


const Cart = ({cart,setCart,AddItemPrice,show,flag,setShow}) => {   
    const[price,setPrice]=useState(""); 

   


    const handlePrice = () => {
        let ans=0;
        cart.map((item) => (ans += item.amount * item.price));
        setPrice(ans);
      };
    
      useEffect(() => {
        handlePrice();
      });
      const removeitems=(id)=>{
        
    
           
            const arr = cart.filter((item)=>item.id!==id);
            setCart(arr);
      
      }  
      const backhandler=()=>{
       setShow(flag=>flag+1);
      }
    



    
    
  return (
    <div> 
       
     
    
         <div className='back'> 
     
       
        
        <MoveLeft style={{cursor:"pointer"}} onClick={backhandler}/> 
        
       
        </div>
      
   
     
        <div className='cart-main-title'></div>
         {
            cart?.map((item)=>(
                <div className="cart_box" >
                    <div className="cart-box-content">
                    <div className="cart_img">
                        <img src={item.img} className='cart-img' />
                       
                    </div>
                    {/* <div classNameName='cart-content'> */}
                    <div className="item-car-title">
                    <p>{item.title}</p>
                    </div>

                    <div className="cart-button">
                        
                        
                        <button onClick={()=>AddItemPrice(item,-1)} > - </button>
                        <button className='quantity-cart'>{item.amount}</button>
                        <button onClick={()=>AddItemPrice(item,1)}> + </button>
                    
                    </div>
                    <div className="cart-price">
                       <p > Rs.{item.price}</p>
                       <button onClick={()=>removeitems(item.id)}><ClearIcon style={{textAlign:"center"}}/> </button>
                    </div>
                    
                   
                    </div>
                   
                    

                 
                   
                </div>
                
               
               
                 
            ))} 

            { 

            cart.length &&
             <div className="total-price">
                 <p>Total price of Your Cart:</p>
 
              <p className='total-price-amt'>Rs.{price}</p>
                </div> 
           }

               
           
    </div>
  )
}

export default Cart
