import React from "react";
import { Carousel } from "react-bootstrap";
import Heading from "../../NewComponent/common/Headingtext";
import "./imagecarousel.css"; 

const ImageCarousel = () => {
  const images = [
    "./galleryimages/galleryimg1.jpg",
    "./galleryimages/galleryimg2.jpg",
    "./galleryimages/galleryimg3.jpg",
    "./galleryimages/galleryimg4.jpg",
    "./galleryimages/galleryimg5.jpg",
    "./galleryimages/galleryimg6.jpg",
  ];

  // Create slides containing 3 images each
  const slides = [];
  for (let i = 0; i < images.length; i += 3) {
    slides.push(images.slice(i, i + 3));
  }

  return (
    <div>
      <div style={{ textAlign: "center", marginTop: "1.5em", marginBottom: "1.5em" }}>
        <Heading text="Gallery" width="18%" />
      </div>
      <Carousel interval={5000} controls={false} indicators className="custom-carousel">
        {slides.map((slide, index) => (
          <Carousel.Item key={index}>
            <div className="d-flex justify-content-center align-items-center custom-slide">
              {slide.map((img, i) => (
                <div className="image-container" key={i}>
                  <img src={img} alt={`Gallery Image ${i + 1}`} className="custom-image" />
                </div>
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
