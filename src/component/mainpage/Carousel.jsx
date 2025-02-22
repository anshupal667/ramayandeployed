
import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

function ControlledCarousel({ handleOrderNow }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    { src: "/images/Left_Static_Img.jpg", alt: "First slide" },
    { src: "/images/PM_Letter 1.png", alt: "First slide" },
    { src: "/images/Main_Carasouel_1.jpg", alt: "Second slide" },
    { src: "/images/Main_Carasouel_2.jpg", alt: "Third slide" },
  ];

  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };

  return (
    <div>
      {/* Main Carousel */}
      <Carousel
        activeIndex={activeIndex}
        onSelect={handleSelect}
        controls={false}
        indicators={false}
        interval={3000}
        style={{ height: "90%", width: "100%" }}
      >
        {images.map((image, index) => (
          <Carousel.Item key={index}>
            <div style={{ display: "flex", flex: 1, justifyContent: "center" , padding: "0px"}}>
              <img
                className="d-block"
                src={image.src}
                alt={image.alt}
                style={{ height: "90vh", width: "100%" }}
                // style={{ height: "100vh", objectFit: "contain", width: "55vw" }}
              />
            </div>
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Thumbnails */}
      <div
        style={{
          display: "flex",
          justifyContent: "start",
          // marginTop: "15px",
          padding: "10px 0",
          backgroundColor: "#91521b",
          // borderRadius: "0 0 10px 10px",
        }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            onClick={() => handleSelect(index)}
            style={{
              width: "80px",
              height: "60px",
              objectFit: "cover",
              margin: "0 5px",
              cursor: "pointer",
              border: activeIndex === index ? "2px solid #007bff" : "1px solid #ddd",
              borderRadius: "5px",
              transition: "border 0.3s ease",
              background:'#d5dde7'
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default ControlledCarousel;

