import React, { useState} from 'react';
import './Navbar.css';
import { GiFishEscape } from "react-icons/gi";
import { AiOutlineBars } from "react-icons/ai";
import { RiCloseLine } from "react-icons/ri";
import {Link} from "react-router-dom";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

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
                <li><a href="#Home">Home</a></li>
                <li><a href="#features">Features</a></li>
                <li><a href="#download">Download</a></li>
                <li><a href="#download">Notices</a></li>
                <li><a href="#faq">Faqs</a></li>
                <li><Link to="/login">LogIn</Link></li>
                {/* <li><Link href="#faq">SignUp</Link></li> */}
               

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