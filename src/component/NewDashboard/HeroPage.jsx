
import React, { useState, useRef } from 'react';
import './heroSection.css';
import ControlledCarousel from '../mainpage/Carousel';
import AppointmentForm from '../appointment/appointment-form';
import ScrollButton from '../../test';
import CustomizedDialogs from './FormDialog';

const HeroSection = ({ scrollToRef }) => {
  const [isOrderFormVisible, setIsOrderFormVisible] = useState(false);
  const scrollRef = useRef(null);

  const handleOrderNowClick = () => {
    setIsOrderFormVisible(true); // Show the form when the button is clicked
  };

  const handleCloseForm = () => {
    setIsOrderFormVisible(false); // Close the form
  };

  const handleScrollDown = () => {
    if (scrollToRef?.current) {
      scrollToRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="hero-section">
      {/* Background Image */}
      <div className="background-image"></div>

      {/* Overlay Content */}
      <div className="content-container">
        <div className="content">
          <img src="./images/Group 4.png" style={{ marginTop: '1rem' }} alt="HeroPage.Logo" />
          <h1 className="hero-title">Its Heritage Essence</h1>
          <p className="hero-subtitle">Our vision is to donate 11 Lakh Ramayana books across India in the next 5 years Books can be ordered in multiple languages</p>
          <div className="hero-buttons">
            {/* <button className="cta-button" onClick={handleOrderNowClick}>{translations.HeroPage.Order_your_Ramayana_Today}</button> */}
            <CustomizedDialogs/>
          </div>
          <div style={{marginTop:"1rem"}}>
          <ScrollButton onClick={handleScrollDown}/>
          </div>
            {/* <button className="cta-button secondary" onClick={handleScrollDown}>{translations.HeroPage.Scroll_Down}</button> */}
        </div>

        {/* Image on the left */}
        <div className="image-container">
          <img src="./images/ramayanfront.jpeg" alt="HeroPage.Hero_Visual" style={{ height: '100%', width: '100%' }} />
        </div>
      </div>


      {/* Popup Form */}
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
    </div>
  );
};

export default HeroSection;

