import React, {Fragment} from 'react';
import "./Header.css";
import homeImage from "../../assets/home.jpg";
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import {Link} from 'react-router-dom';
//import Button from "./../UI/Button/Button";
import Applanding from '../AppLanding/Applanding1';

const Header = () => {

  // const navigate = useNavigate();

  // const routeChange = () => {
  //   // 👇️ navigate to /contacts
  //   navigate('/applanding');
  // };
  return (
    <Fragment>
      <div className="landing" id="#Home">
      <div className="header-cta">
      <Button variant="primary" size="lg" className='btnStyle'>Owner</Button>{' '}
      <Link to="/applanding">
      <Button variant="secondary" className='btnStyle' style={{marginLeft:'20px'}} >Fisherman</Button>{' '}
      </Link>
        </div>
        
      </div>
     
    </Fragment>
    
  )
}

export default Header