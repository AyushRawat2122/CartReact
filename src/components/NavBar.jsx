import React, { useEffect } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from '../contexts/CartItem';
import { NavLink , Link } from 'react-router-dom';
function NavBar() {

  const {items} = useCart();
  useEffect(()=>{console.log(items);} , [items])
  return (
    <nav className='bg-black text-white p-2 flex justify-between'> 
    
    <ul className='flex gap-5 text-2xl'>
    <NavLink to="/"> Home</NavLink>
    <li>Contact us</li>
    <li>About us</li>
    <li>F&Q</li>
    </ul>
    
   <NavLink to = "/cart"> <div className='flex justify-center items-center px-10 relative' >
        <div className='text-black bg-gray-300 h-4 w-4 flex items-center justify-center font-bold rounded-full absolute top-0 right-9 text-xs border-black border'>{items.length}</div>
    <FaShoppingCart className='text-3xl'></FaShoppingCart>
    </div></NavLink>
     </nav>
  )
}

export default NavBar