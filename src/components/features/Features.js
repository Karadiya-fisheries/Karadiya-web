import React, { useEffect } from "react";
import { BsFillBookmarkStarFill } from "react-icons/bs";
import fishImage from "../../assets/fish6.jpg";
import fishImage1 from "../../assets/fish4.jpg";
import './Features.css';
import Feature from './Feature';
import { featureList } from "./data";
import AOS from "aos";
import "aos/dist/aos.css";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


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
                <BsFillBookmarkStarFill color="" size={30}/>
                <h2>Fishing Industry in Sri Lanka</h2>
                <p className="u-text-small u-text-dark" >
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Eos molestias distinctio officia libero, id in dolor nobis tenetur 
                    ipsa aspernatur omnis voluptate, minus ex dicta quidem 
                    temporibus necessitatibus dolorum aut!
                </p>
            </div>
            {/* <div className="features-content">
               <div className="features-left" data-aos="fade-right">
                   <img src={fishImage} alt="" className="fishimg" />
                </div> 
               <div className="features-right" data-aos="fade-left">
                   {
                       featureList.map((feature) => (
                        <Feature key={feature.id} icon={feature.icon} heading={feature.heading} text={feature.text} />
                       ))
                   }
                  <p style={{paddingBottom:"20px"}}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos delectus quisquam optio enim deserunt, unde reprehenderit itaque eligendi non a id nostrum adipisci quasi. Vel ex corrupti atque adipisci corporis?
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi repellendus sed distinctio architecto sequi sit ad eveniet maxime suscipit obcaecati quaerat at dolorem natus itaque, reiciendis magnam maiores assumenda ab.</p> 
                   <div>
                   <Card border="primary" style={{ width: '18rem' }}>
        <Card.Header>Header</Card.Header>
        <Card.Body>
          <Card.Title>Primary Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
                   </div>
               </div>
               <div>

               </div>
            </div> */}

                <div class="row">
                <div class="col-6">
                <img src={fishImage} alt="" className="fishimg" />
                </div>
                <div class="col-6">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore magnam cum asperiores laudantium ad beatae dolor libero cumque sapiente ducimus dignissimos praesentium a, aliquam iure ullam dolorem illum exercitationem delectus? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius nisi aliquid, rem accusantium voluptates quaerat eveniet repellat nostrum dicta, quidem tempore quae quos laboriosam cum alias, in inventore impedit. Placeat.</p>
                    <br/>
                <Row xs={1} md={2} className="g-4">
                    

      {Array.from({ length: 2 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top" src={fishImage1}/>
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
                </div>
                </div>
        </div>
    </section>
  )
}

export default Features;