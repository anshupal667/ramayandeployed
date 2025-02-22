import React, { useState } from "react";
import { Button } from "react-bootstrap";
import AppointmentForm from "../../component/appointment/appointment-form";
import CounterBox from "../common/CounterBand";
import "./hero.css"; // Optional: if you want to add extra global styles

const HeroSection = () => {
  const [isOrderFormVisible, setIsOrderFormVisible] = useState(false);

  const handleOrderNowClick = () => {
    setIsOrderFormVisible(true);
  };

  const handleCloseForm = () => {
    setIsOrderFormVisible(false);
  };

  // Example images array (if you want to use a Carousel, uncomment and adjust below)
  const images = [
    "./images/banner1.jpeg",
    "./images/banner2.jpg",
    "./images/banner3.jpg",
  ];

  return (
    <>
      <div className="hero-section">
        {/* If you wish to use a Carousel, uncomment the code below */}
        {/*
        <Carousel fade controls={false} indicators={true} interval={3000}>
          {images.map((image, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block"
                style={{ width: "100%" }}
                src={image}
                alt={`Slide ${index}`}
              />
            </Carousel.Item>
          ))}
        </Carousel>
        */}
        <div className="logosection">
          <CounterBox targetNumber={15048} />
          {/* Optionally, you can also add a logo image here */}
          {/* <img src="./images/ramayanlogonew.png" alt="Logo" className="logo" /> */}
        </div>
        <div className="hero-content">
          <div className="hero-text">
            <h2>Celebrating</h2>
            <h1>
              <span className="highlight">Ramayan</span>
            </h1>
            <h3>Its Heritage Essence</h3>
            <p>
              Our vision is to donate 11 lakh Ramayan copies in multiple languages
              across India in the next 5 years.
            </p>
            <Button className="btn" size="lg" onClick={handleOrderNowClick}>
              Order now
            </Button>
          </div>
          <div className="hero-image">
            <img src="./images/ramayanfront.png" alt="Ramayan" />
          </div>
        </div>

        {isOrderFormVisible && (
          <div className="popup-overlay">
            <div className="popup-form-container">
              <button className="close-button" onClick={handleCloseForm}>
                X
              </button>
              <AppointmentForm onClose={handleCloseForm} />
            </div>
          </div>
        )}

        <style jsx>{`
          .hero-section {
            position: relative;
            width: 100%;
            height: 100vh;
            background: url("./images/herosectionbg.jpg") no-repeat center center;
            background-size: cover;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            overflow: hidden;
          }
          .hero-section img {
            max-width: 100%;
            height: auto;
            object-fit: cover;
          }
          .logosection {
            position: absolute;
            top: 5%;
            left: 50%;
            transform: translateX(-50%);
            text-align: center;
            z-index: 20;
          }
          .hero-content {
            position: relative;
            z-index: 10;
            width: 90%;
            max-width: 1200px;
            margin: 0 auto;
            padding: 1rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }
          .hero-text {
            text-align: center;
            color: #fff;
            padding: 2rem;
          }
          .hero-text h2 {
            font-size: 2rem;
            margin: 0.5rem 0;
          }
          .hero-text h1 {
            font-size: 3.5rem;
            color: #f03622;
            margin: 0.5rem 0;
          }
          .hero-text h3 {
            font-size: 2rem;
            font-weight: bold;
            margin: 0.5rem 0;
          }
          .hero-text p {
            font-size: 1rem;
            margin: 1rem 0;
            max-width: 600px;
          }
          .highlight {
            color: #ffa500;
            font-weight: bold;
          }
          .btn {
            background: #c02800;
            border: none;
            border-radius: 13px;
            padding: 12px 24px;
            font-size: 1rem;
            margin-top: 1rem;
          }
          .hero-image {
            margin-top: 2rem;
            width: 80%;
            max-width: 400px;
          }
          .hero-image img {
            width: 100%;
            height: auto;
            display: block;
          }
          /* Pop-up Overlay */
          .popup-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
          }
          /* Pop-up Form Container */
          .popup-form-container {
            background-color: #f06f1b;
            padding: 20px;
            border-radius: 8px;
            max-width: 90%;
            width: 850px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
            position: relative;
          }
          .close-button {
            background: none;
            color: #000;
            border: none;
            padding: 8px 12px;
            font-size: 1.1rem;
            cursor: pointer;
            border-radius: 4px;
            position: absolute;
            top: 10px;
            right: 10px;
          }
          .close-button:hover {
            background-color: #d32f2f;
          }
          /* Responsive Styles */
          @media (min-width: 768px) {
            .hero-content {
              flex-direction: row;
              justify-content: space-between;
              align-items: center;
            }
            .hero-text {
              text-align: left;
              padding: 2rem;
            }
            .hero-text h2 {
              font-size: 2.5rem;
            }
            .hero-text h1 {
              font-size: 4.5rem;
            }
            .hero-text h3 {
              font-size: 2.25rem;
            }
            .hero-text p {
              font-size: 1.125rem;
            }
            .hero-image {
              width: 45%;
              max-width: 500px;
            }
          }
          @media (min-width: 1024px) {
            .hero-section {
              height: 100vh;
            }
            .hero-text h1 {
              font-size: 6rem;
            }
            .hero-text h3 {
              font-size: 3rem;
            }
            .hero-text p {
              font-size: 1.25rem;
            }
          }
        `}</style>
      </div>
    </>
  );
};

export default HeroSection;
