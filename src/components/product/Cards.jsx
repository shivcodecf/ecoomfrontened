import React from 'react'
import '../../css/Product.css'
import { useState } from 'react'
import Navbar from './Navbar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';




const Cards = ({item,cart,setCart,props}) => {
const{title,price,img,desc}=item;
const[itemcount,setitemcount]=useState(0);


const AddItem = (item) =>{
        let flag=false;
        let count=0;
      

    cart.forEach(element => {
        if(item.id==element.id)
        {
          flag=true;
        }
    });
    if(!flag){
    setCart([...cart,item])
    count++;
    setitemcount(count);
    }
    else {
        toast.warn('Item is already add', {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        })
    }
    
}



  return (
    <div className='product-container'>
        
        
    
        
        <div className="product-cards">

        <img src={img} width={200} height={280}/>
      <p style ={{fontWeight:"600"}} >{title}</p>
      {/* <p>M</p> */}
      <p>{desc}</p>
      <div className="add-cart">
      <p className='product-price'>&#x20B9;{price}</p>
      <AddShoppingCartIcon onClick ={()=>AddItem(item)} style={{cursor:"pointer",border:"none", color:"#84dcc6",marginRight:"15px"}}/> 
    

      </div>
      </div>
      <ToastContainer />
     
      </div>
    
  )
}

export default Cards;
