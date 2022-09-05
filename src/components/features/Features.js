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
            Sri Lanka, surrounded with warm and nutrient-filled waters and
            filled with many rivers and lakes, enjoys a wealth of fisheries
            opportunities. Having extensive coast-line as well as numerous
            reservoirs and lakes throughout the country, provide opportunities
            for both inland and deep-sea fishing.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
