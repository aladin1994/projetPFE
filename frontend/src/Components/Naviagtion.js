import React from 'react'

import './NavigationStyle.css'
const Naviagtion = () => {
  return (
    <div> 
     <nav className='navbar'>
        <a href="#" className='logo'>Go Stock</a>
        <div className="nav-link">
        <ul>
            <li className='active'><a href="#">Home</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">LogIn</a></li>
            <li><a href="#">Info</a></li>
            <li><a href="#">Recherche</a></li>
            
        </ul>
        </div>
        
      <img className='menu-logo' src="img/menu.png" alt="404" />
      </nav>
    


  </div>
  )
}

export default Naviagtion