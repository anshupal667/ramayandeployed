import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./HeroSection.css";
import CustomDialog from "../form/FormDialogBox";
import CounterBox from "../common/CounterBand";
import ScrollButton from "../../test";
import { useTranslation } from 'react-i18next'; // For handling translations
import i18next from 'i18next';
import LanguageSwitcher from "../common/Language";
const HeroSection = ({ scrollToRef }) => {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation(); 

  // Function to scroll to the next section
  const handleScrollDown = () => {
    if (scrollToRef?.current) {
      scrollToRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hero-section">
      <div className="header">
        <div className="header-counter">
          <CounterBox start={15000} end={15010} speed={2000} />
        </div>
        <div className="header-logo">
          <img src="./images/logo ramyan 1.png" alt="Logo" />
        </div>
        <div>
          <LanguageSwitcher />
        </div>
      </div>

      <Container>
        <Row className="justify-content-center align-items-center">
          {/* Left Side Content */}
          <Col md={6} className="d-flex flex-column align-items-center text-center">
            <h2 className="hero-title">{t('Herosection.Celebrating')}</h2>
            <h1>
              <span className="highlight">{t('Herosection.Ramayana')}</span>
            </h1>
            <p className="hero-subtitle">{t('Herosection.Sub_Title')}</p>
            <p className="hero-description">
              {t('Herosection.Description')}
            </p>
            <button onClick={() => setOpen(true)} className="hero-button">
              {t('Herosection.Order_Now')}
            </button>

            {/* Scroll Down Button */}
            <ScrollButton onClick={handleScrollDown} />
          </Col>

          {/* Right Side Image */}
          <Col md={6} className="d-flex justify-content-center">
            <div className="hero-image-container">
              <img src="./images/ramayanfront.png" alt="Ramayan Cover" className="hero-image" />
            </div>
          </Col>
        </Row>
      </Container>

      <CustomDialog open={open} onClose={() => setOpen(false)} />
    </div>
  );
};

export default HeroSection;
