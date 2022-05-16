import React from 'react';
import './Footer.css';
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaFax,
  FaEnvelope,
  FaGlobe,
} from "react-icons/fa";
import { GiFishEscape } from "react-icons/gi";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container footer">
        <div className="footer-box">
          <h4>Useful Links</h4>
          <div className="footer-links">
            <a href="#">&bull;Support</a>
            <a href="#">&bull;About</a>
            <a href="#">&bull;Learn</a>
            <a href="#">&bull;Home</a>
            <a href="#">&bull;Messenger</a>
          </div>
        </div>
        <div className="footer-box">
        <h4>Support</h4>
          <div className="footer-links">
            <a href="#">&bull;Support</a>
            <a href="#">&bull;About</a>
            <a href="#">&bull;Learn</a>
            <a href="#">&bull;Home</a>
            <a href="#">&bull;Messenger</a>
          </div>
        </div>
        <div className="footer-box">
        <h4>Contact Us</h4>
        <div className="footer-contact">
        <p>
              <FaMapMarkerAlt /> &nbsp; Address: United States.
            </p>
            <p>
              <FaPhoneAlt /> &nbsp; Phone: +1230 123 1231.
            </p>
            <p>
              <FaFax /> &nbsp; Fax: +12342762178
            </p>
            <p>
              <FaEnvelope /> &nbsp; Email: info@socialx.com
            </p>
            <p>
              <FaGlobe /> &nbsp; Website: www.karadiya.com
            </p>
        </div>
        </div>
        <div className="footer-box">
        <GiFishEscape color="#fff" size={45}/>
            <p className="logo-text"><span>K</span>aradiya</p>
          <p className="u-text-small">&copy; Copyright 2021. karadiya.com</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;