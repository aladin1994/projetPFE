import React from 'react'
import { Link } from "react-router-dom";

import './NavigationStyle.css'
import Contact from './Contact';
const Naviagtion = () => {
  return (
    <div> 
     <nav className='navbar'>
        
        <div className="nav-link">
        
        <ul>
            <li className='active'><a href="#">Home</a></li>
            <li><Link to="/contact" >contact</Link></li>
            <li><a href="#">LogIn</a></li>
            <li><a href="#">Info</a></li>
            <li><a href="#">Recherche</a></li>
            
        </ul>
        </div>
        
      </nav>
    


  </div>
  )
}

export default Naviagtion