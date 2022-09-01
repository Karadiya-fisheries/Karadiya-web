import React, { useState} from 'react';
import './Navbar.css';
import { GiFishEscape } from "react-icons/gi";
import { AiOutlineBars } from "react-icons/ai";
import { RiCloseLine } from "react-icons/ri";
import {Link} from "react-router-dom";
import authService from '../../services/auth.service';
import AccountPopover from './AccountPopover';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [user,setUser]  = useState(authService.getCurrentUser())

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  }
  return (
    <nav className="  navbar fluid" style={{backgroundColor:'#0a1930',width: '100%', height: '100%',minHeight: '5vh'}}>
        <div className="logo">
            <GiFishEscape color="#fff" size={45} style={{marginLeft:"20px"}}/>
            <p className="logo-text"><span>K</span>aradiya</p>
        </div>
        <menu>
            <ul style={{marginRight:'20px'}}className='nav-links' id={showMenu ? "nav-links-mobile" :
          "nav-links-mobile-hide"}>
                <li style={{paddingTop:'14px'}}><a href="#Home">Home</a></li>
                <li style={{paddingTop:'14px'}}><a href="#features">Features</a></li>
                <li style={{paddingTop:'14px'}}><a href="#download">Download</a></li>
                <li style={{paddingTop:'14px'}}><a href="#download">Notices</a></li>
                <li style={{paddingTop:'14px'}}><a href="#faq">Faqs</a></li>
                
            { !user && (<><li><Link to="/login">LogIn</Link></li>
              <li><Link to="/signup">SignUp</Link></li></> )}
            
            <li style={{paddingTop:'3px'}}>{user && (
              <AccountPopover />
            )}</li>
            </ul>
        </menu>
        <div className="menu-icons" onClick={toggleMenu}>
          {
            showMenu ? 
            (
              <RiCloseLine color="#fff" size={30}/>
            ) : (
              <AiOutlineBars color="#fff" size={27}/>
            )
          }
        </div>
    </nav>
  )
}

export default Navbar