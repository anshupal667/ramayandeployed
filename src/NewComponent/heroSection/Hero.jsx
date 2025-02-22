
import React, { useState } from "react";
import { Carousel, Button } from "react-bootstrap";
import './hero.css'
import AppointmentForm from "../../component/appointment/appointment-form";
import CounterBox from "../common/CounterBand";


const HeroSection = () => {
  const [isOrderFormVisible, setIsOrderFormVisible] = useState(false);

  const handleOrderNowClick = () => {
    setIsOrderFormVisible(true); // Show the form when the button is clicked
  };

  const handleCloseForm = () => {
    setIsOrderFormVisible(false); // Close the form
  };

  const images = [
    "./images/banner1.jpeg",
    "./images/banner2.jpg",
    "./images/banner3.jpg",
  ];

  return (
    <>
      <div className="hero-section">
        {/* <Carousel fade controls={false} indicators={true} interval={3000}>
          {images.map((image, index) => (
            <Carousel.Item key={index}>
              <img className="d-block" style={{ width: "98.5vw" }} src={image} alt={`Slide ${index}`} />
            </Carousel.Item>
          ))}
        </Carousel> */}
        <div className="logosection">
          <CounterBox targetNumber={15048} />
          {/* <div >
            <img src="./images/ramayanlogonew.png" className="logo"></img>
          </div> */}
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
            <Button className="btn" size="lg" onClick={handleOrderNowClick}>Order now</Button>
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
          background:url("./images/herosectionbg.jpg");
          background-repeat:no-repeat;
          background-size:cover
        }
        .hero-section img {
          height: 100vh;
          width: 100vw;
          object-fit: cover;
        }
        .hero-text {
          {/* position: absolute;
          top: 50%;
          left: 5%;
          transform: translateY(-50%); */}
          text-align: center;
          display:flex;
          flex-direction:column;
          justify-content:center;
          align-items:center;
          padding:3rem;
          color: white;
          {/* z-index: 10; */}
          {/* max-width: 50%; */}
        }
        .hero-text h1{ 
          font-size:6rem;
          color:#f03622;
           {/* background: linear-gradient(39deg, #faa202, #fee5b8);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent; */}
        }
         .hero-text h3{
          font-size:3rem;
          font-weight: bold;
         }
         .hero-text p{
         font-size:18px;
         font-family:poppins;
         }
        .highlight {
          {/* color: #ffa500; */}
          {/* font-weight: bold; */}
        }
        .btn{
         background:#c02800;
         border:none;
         border-radius:13px;
         padding:12px;
         width:25vw
        }
         .hero-content {
          position: absolute;
          top: 50%;
          left: 2%;
          right:3%;
          transform: translateY(-50%);
          text-align: center;
           justify-content: space-between;
          color: white;
          z-index: 10;
          {/* max-width: 100%; */}
          {/* border:1px solid red; */}
          display:flex;
          justifyContent:center
          }
           .hero-image {
            margin-top: 2rem;
            width: 80%;
            max-width: 350px;
          }
          .hero-image img {
            width: 100%;
            height: auto;
            display: block;
          }
          .logosection{
          {/* display:flex; */}
         
          
            position: absolute;
            top: 10%;
          {/* left: 2%;
           right:3%; */}
          {/* transform: translateY(-50%); */}
          text-align: center;
           justify-content: space-between;
          color: white;
          z-index: 10;
          }
          .logosection .logo{
            width:12px;
            height:25vh
          }
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

