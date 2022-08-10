import React, { useEffect } from "react";
import "./Header.css";
import Button from "../UI/Button/Button";
import "../UI/Button/Button.css";
import phoneHeader from "../../assets/new6.png";
import { BsMouse } from "react-icons/bs";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate} from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

const Header = () => {
  let navigate = useNavigate();
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section id="header">
      <div className="container header">
        <div>

        <BiArrowBack color="white" size={25} onClick={() => navigate(-1)}/>
        </div>
        <div className="header-left" >
          <h1>
            <span>Karadiya Owner Features</span>
            <span>Mobile Application for the Fishing Industry</span>
            {/* <span>messaging system</span> */}
          </h1>
          <p className="u-text-small">
          Karadiya is the best application for the fishing industry Which provide lot of 
          functionalities and unique features for doing fishing work successfully.
           
          </p>
          <div className="header-cta" data-aos="fade-right">
            
            <Button text={"Download"} btnClass={"btn-light"} href={"#"} />
          </div>
        </div>
        <div className="header-right" data-aos="fade-left">
          <img src={phoneHeader} alt="phone" />
        </div>
      </div>
      <div className="floating-icon">
        <a href="#features">
          <BsMouse color="#fff" size={25} className="mouse" />
        </a>
      </div>
    </section>
  );
};

export default Header;
