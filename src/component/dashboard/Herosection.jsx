
import React, { useState } from "react";
import "./HeroSection.css"; // External styling
import AppointmentForm from "../appointment/appointment-form"; // Import the AppointmentForm component

const HeroSection = () => {
  const [isOrderFormVisible, setIsOrderFormVisible] = useState(false);

  const handleOrderNowClick = () => {
    setIsOrderFormVisible(true); // Show the form when the button is clicked
  };

  const handleCloseForm = () => {
    setIsOrderFormVisible(false); // Close the form
  };

  return (
    <div style={{background:"#6e2222",padding:"15px"}}>
    <div>
    <img src='./images/logoghrghrramayan.webp' style={{margin:"10px 0px 0px 89px"}}></img>
    </div>
    <section className="hero-section">
      
      <div className="hero-content">
        {/* Text on the Left */}
        <div className="hero-text">
          <h1 className="hero-title">{translations.Herosection.Celebrating_Ramayana__Its_Heritage__Essence}</h1>
          <p className="hero-description">{translations.Herosection.Our_vision_is_to_donate_11_Lakh_Ramayana_books_across_India_in_next_5_years_Books_can_be_ordered_in_multiple_languages}</p>
          <button className="cta-button" onClick={handleOrderNowClick}>{translations.Herosection.Order_your_Ramayana_Today}</button>
        </div>

        {/* Image on the Right */}
        <div className="hero-image">
          <img
            src="/images/ramayanfront.jpeg" // Update this to the correct path or URL of your uploaded image
            alt={translations.Herosection.Ramayana_Book}
            className="hero-image-img"
          />
        </div>
      </div>

      {/* Show the AppointmentForm component in a pop-up when the button is clicked */}
      {isOrderFormVisible && (
        <div className="popup-overlay">
          <div className="popup-form-container">
            <button className="close-button" onClick={handleCloseForm}>
              X
            </button>
            <AppointmentForm onClose={handleCloseForm}  />
          </div>
        </div>
      )}
    </section>
    </div>
  );
};

export default HeroSection;

