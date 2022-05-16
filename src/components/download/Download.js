import React,{useEffect} from 'react';
import { HiDocumentReport } from "react-icons/hi";
import { DiGoogleAnalytics } from "react-icons/di";
import { BiHistory } from "react-icons/bi";
import { IconContext } from "react-icons";
import './Download.css';
import AOS from "aos";
import "aos/dist/aos.css";


const Download = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section id="download">
      <div className="container download" data-aos="fade-up">
        <h2>DOWNLOADS</h2>
        <p className="u-text-small u-text-light">
          Lorem ipsum dolor sit amet consectetur,
           adipisicing elit. Impedit expedita, minus
            rerum ducimus autem a qui cum ex explicabo? Provident, dolor repellat? Hic quas recusandae doloremque
           eum possimus? Magni, repellat!
        </p>
        <IconContext.Provider value={{size:"20"}}>
        <div className="download-icons">
          <div className="download-icon">
            <HiDocumentReport /><p>Fishing </p>
          </div>
          <div className="download-icon">
            <DiGoogleAnalytics/><p>Weather </p>
          </div>
          <div className="download-icon">
            <BiHistory/><p>Boat</p>
          </div>
        </div>
        </IconContext.Provider>
        
      </div>
      

    </section >
  )
}

export default Download