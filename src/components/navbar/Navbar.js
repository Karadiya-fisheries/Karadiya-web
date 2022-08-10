import React, { useState} from 'react';
import './Navbar.css';
import { GiFishEscape } from "react-icons/gi";
import { AiOutlineBars } from "react-icons/ai";
import { RiCloseLine } from "react-icons/ri";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  }
  return (
    <nav className=" container navbar">
        <div className="logo">
            <GiFishEscape color="#fff" size={45}/>
            <p className="logo-text"><span>K</span>aradiya</p>
        </div>
        <menu>
            <ul className='nav-links' id={showMenu ? "nav-links-mobile" :
          "nav-links-mobile-hide"}>
                <li><a href="#Home">Home</a></li>
                <li><a href="#features">Features</a></li>
                <li><a href="#download">Download</a></li>
                <li><a href="#faq">FAQS</a></li>
               

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