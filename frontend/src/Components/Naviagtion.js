import React from 'react'
import logo from './imgs/stock-logo.png'
import searchLogo from './imgs/search.svg'
import expand from "./imgs/sonr.svg"
import notification from "./imgs/notification.svg"
import user from "./imgs/user.jpg"
import '../Components/Style/NavigationStyle.css'
import { FaTh, FaWhmcs } from 'react-icons/fa';
const Naviagtion = () => {
  return (
    <div className='navbar'>

      <div className="logo">
        <img className='logoImg' src={logo} alt="404" />
        <span>Go Stock</span>
      </div>
      <div className="icons">
        <img src={searchLogo} alt="404" className="icon" />
        <FaTh className='icon' />
        <img src={expand} alt="404" className="icon" />
        <div className="notification">
          <img className='notificationImg' src={notification} alt="404" />
          <span className='notificationSpan'>1</span>
        </div>
        <div className="user">
        <img className='userImg' src={user} alt="404" />
        <span>Aladin</span>
        </div>
        <FaWhmcs className="icon" />
      </div>

    </div>
  )
}

export default Naviagtion