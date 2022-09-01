import Carousel from 'react-bootstrap/Carousel';
import Image1 from "./../../assets/im61.jpg";
import Image2 from "./../../assets/im11.jpg";
import Image3 from "./../../assets/im12.jpg";

function IndividualIntervalsExample() {
  return (
    <Carousel>
      <Carousel.Item interval={800}>
        <img
          className="d-block w-100"
          src={Image1}
          alt="First slide"
        //   style={{width: '100%',height: '100vh',backgroundSize:'cover',marginBottom: '0'}}
           
         
        />
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item interval={800}>
        <img
          className="d-block w-100"
          src={Image2}
          alt="Second slide"
        />
        {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item interval={800}>
        <img
          className="d-block w-100"
          
          src={Image3}
          alt="Third slide"
        />
        {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;