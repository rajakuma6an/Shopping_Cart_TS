import Carousel from "react-bootstrap/Carousel";
import banner3 from "../../../assets/banner3.jpg";
import banner5 from "../../../assets/banner5.webp";
import banner6 from "../../../assets/banner6.webp";

const Slider = () => {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img className="d-block w-100" src={banner6} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img className="d-block w-100" src={banner3} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img className="d-block w-100" src={banner5} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
