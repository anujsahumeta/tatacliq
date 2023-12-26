import Carousel from "react-bootstrap/Carousel";
import Img3 from './img/1.png';
import Img4 from './img/2.png';
import Img5 from './img/3.png';


function UncontrolledExample() {
  return (
    <Carousel style={{ display: "relative" }}>
      <Carousel.Item style={{ display: "relative" }}>
        <img
          style={{ display: "relative" }}
          className="d-block w-100"
          src="https://assets.tatacliq.com/medias/sys_master/images/45018547978270.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://assets.tatacliq.com/medias/sys_master/images/45018547912734.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://assets.tatacliq.com/medias/sys_master/images/45018548109342.jpg"
          alt="Third slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Img3}
          style={{height:'395px'}}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://assets.tatacliq.com/medias/sys_master/images/45018548043806.jpg"
          alt="Third slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Img4}
          style={{height:'395px'}}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Img5}
          style={{height:'395px'}}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;
