import React, {Fragment} from 'react';
import "./Header.css";
import homeImage from "../../assets/home.jpg";
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import {Link} from 'react-router-dom';
//import Button from "./../UI/Button/Button";
import Applanding from '../AppLanding/Applanding1';
import Carosal from './carosal';

const Header = () => {

  // const navigate = useNavigate();

  // const routeChange = () => {
  //   // 👇️ navigate to /contacts
  //   navigate('/applanding');
  // };
  return (
    <Fragment>
      <div style={{width:'100%',}}>
      <Carosal/> 
      {/* <div className="landing" id="#Home"> */}
        
      <div className="header-cta">
      <Link to="/owner">
      <Button variant="primary" size="lg" className='btnStyle'>Owner</Button>{' '}
      </Link>
      <Link to="/applanding">
      <Button variant="secondary" className='btnStyle' style={{marginLeft:'20px'}} >Fisherman</Button>{' '}
      </Link>
        </div>
        
      {/* </div> */}
     
     </div>
    </Fragment>
    
  )
}

export default Header