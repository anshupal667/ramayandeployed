import React from "react";
import "./Footer.css";
import Footer from "./Footer";

const TermsAndConditionsPage = () => {
    
  return (
    <div className="tandc-page">
      {/* Section 1: Panoramic Image */}
      <div className="panoramicImagetandc heading">
        <h2 style={{ paddingTop: "1%" }}>Terms & Condition</h2>
      </div>
      <div class="info">
        <div class="termsandC">
          <h2>Terms of Service</h2>
          <h4>
            Please read these terms of service carefully before using web. Every time you use this
            App you accept the following conditions. Therefore we urge you to
            read them carefully.
          </h4>
        </div>
      </div>
      <section className="footer-section">
          <Footer />
        </section>
    </div>
  );
};

export default TermsAndConditionsPage;
