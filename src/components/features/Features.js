import React, { useEffect } from "react";
import { BsFillBookmarkStarFill } from "react-icons/bs";
import fishImage from "../../assets/fish6.jpg";
import fishImage1 from "../../assets/fish4.jpg";
import "./Features.css";
import Feature from "./Feature";
import { featureList } from "./data";
import AOS from "aos";
import "aos/dist/aos.css";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Grid from "@mui/material/Grid";

const Features = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section id="features">
      <div className="container features">
        <div className="u-title" data-aos="fade-up">
          <BsFillBookmarkStarFill color="" size={30} />
          <h2>Fishing Industry in Sri Lanka</h2>
          <p className="u-text-small u-text-dark">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos
            molestias distinctio officia libero, id in dolor nobis tenetur ipsa
            aspernatur omnis voluptate, minus ex dicta quidem temporibus
            necessitatibus dolorum aut!
          </p>
        </div>
      </div>
      
    </section>
  );
};

export default Features;
