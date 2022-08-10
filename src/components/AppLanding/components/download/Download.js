import React, { useEffect } from "react";
import "./Download.css";
import { FaApple, FaWindows } from "react-icons/fa";
import { GrAndroid } from "react-icons/gr";
import { IconContext } from "react-icons";
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
        <h2>Karadiya Mobile download</h2>
        <p className="u-text-small">
          Our apps are available for download on all stores.
        </p>
        <IconContext.Provider value={{ size: "15" }}>
          <div className="download-icons">
            <div className="row">
            <div className="download-icon col-sm-12">
              <FaApple /> <p style={{marginTop:"12px",paddingLeft:"5px"}}>ios</p>
            </div>
            <div className="download-icon col-sm-12">
              <GrAndroid /> <p style={{marginTop:"12px",paddingLeft:"5px"}}>Android</p>
            </div>
            <div className="download-icon col-sm-12">
              <FaWindows /> <p style={{marginTop:"12px",paddingLeft:"5px"}}>Windows</p>
            </div>
          </div>
          </div>
        </IconContext.Provider>
      </div>
    </section>
  );
};

export default Download;
