import React from 'react'
import "../Components/Style/MenuStyle.css"
import home from './imgs/home.png'
import { Link } from 'react-router-dom'
import profile from './imgs/profile.png'
import { FaWhmcs } from 'react-icons/fa'
import products from './imgs/products.png'
import users from './imgs/users.png'
import facture from './imgs/facture.png'
const Menu = () => {
  return (
    <div className='menuSide'>
      <div className="itemSide">
        <span className='titleSide'>Main</span>
        <Link to="/" className='listItme'  >
          <img src={home} alt="404" />
          <span className='listItemTitle'>Home</span>
        </Link>
        <Link to="/profile"  className='listItme'>
          <img src={profile} alt="404" />
          <span className='listItemTitle'>Profile</span>
        </Link>
      </div>
      <div className="itemSide">
        <span className='titleSide'>Lists</span>
        <Link to="/products"  className='listItme'>
          <img className='homeLogo' src={products} alt="404" />
          <span className='listItemTitle'>Products</span>
        </Link>
        <Link to="/users"  className='listItme'>
          <img src={users} alt="404" />
          <span className='listItemTitle'>Users</span>
        </Link>
        <Link to="/facture"  className='listItme'>
          <img src={facture} alt="404" />
          <span className='listItemTitle'>Factures</span>
        </Link>
        
      </div>
      <div className="itemSide">
      <span className='titleSide'>Maintenance</span>
      <Link to="/settings"  className='listItme'>
        <FaWhmcs className='settingsLogo'/>
        <span className='listItemTitle'>Settings</span>
      </Link>
      
    </div>

    </div>
  )
}

export default Menu
