import {  FaMoneyBillAlt, FaMoneyCheckAlt, FaShopify, FaUserCog, FaWhmcs } from 'react-icons/fa';
import './SideBarStyle.css'
import React , { useState } from "react"
import {
    FaBars,
    
    FaTh, FaThList, 
} from "react-icons/fa"
import { NavLink } from 'react-router-dom'
const Sidebar = ({children}) => {
    const [isOpen , setIsOpen] =useState(true   );
    const toggle = ()=> setIsOpen(!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Dashbord",
            icon:<FaTh/>
        },
        {
            path:"/article",
            name:"Article",
            icon:<FaShopify/>
        },
        {
            path:"/facture",
            name:"Facture",
            icon:<FaMoneyBillAlt/>
        },
        {
            path:"/finance",
            name:"Finance",
            icon:<FaMoneyCheckAlt/>
        },
        {
            path:"/personel",
            name:"Personel",
            icon:<FaUserCog/>
        },
        {
            path:"/statistique",
            name:"Statistique",
            icon:<FaThList/>
        },
        {
            path:"/stock",
            name:"Stock",
            icon:<FaTh/>
        },
        {
            path:"/settings",
            name:"Settings",
            icon:<FaWhmcs/>
        },
    ]
  return (

    <div>
      <div style={{width: isOpen? "300px" : "50px"}} className="sidebar">
      <div className="top_section">
        <h1 style={{display: isOpen? "block" : "none"}} className="logo">Go Stock</h1>
        <div style={{marginLeft: isOpen? "50px" : "0px"}} className="bars">
        <FaBars onClick={toggle}/>
        </div>
      </div>
        {
            menuItem.map((item,index)=>(
                <NavLink to={item.path } key={index} className="link" activeClassName="active">
                    <div className="icon">{item.icon}</div>
                    <div style={{display: isOpen? "block" : "none"}}  className="link_text">{item.name}</div>

                </NavLink>
            ))
        }
      </div>
      <main>{children}</main>
      </div>
  )
}

export default Sidebar
