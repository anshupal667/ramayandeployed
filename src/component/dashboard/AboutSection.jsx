
import React from "react";
import "./aboutUs.css"; // External CSS file for styling
import ControlledCarousel from "../mainpage/Carousel";
import { FormatQuoteRounded } from "@mui/icons-material";
import ScrollButton from "../../test";
import ImageCarousel from "../NewDashboard/NewCarousel";
import SponsorsSection from "../../NewComponent/sponserSection/Sponsor";
import Heading from "../../NewComponent/common/Headingtext";

const AboutSection = ({ scrollToRef }) => {
  const handleScrollToSponsor = () => {
    if (scrollToRef?.current) {
      scrollToRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }
  return (
    <div>
      <section className="about-us">
        <div className="about-header">
          <div className="video-container" style={{ height: "40vh", background: "#8d492f" }}>
            <div style={{ height: "45vh", marginLeft: "1.8rem", marginTop: "2.9rem" }}>
              <img src="./images/arun1.jpg" controls width="100%" height="100%" ></img>
            </div>
          </div>
          <div className="mission">
            {/* <div> */}
            {/* <FormatQuoteRounded className="quote-icon" style={{ fontSize: "5rem" }} /> */}
            {/* <img src="./images/doublequote.png" class="quote-icon" alt={translations.AboutSection.quote_icon}></img> */}
            {/* </div> */}
            <div className="mission-text" style={{ marginLeft: "18px" }}>
              <Heading text="About us" width="38%" />
              <p><span style={{ fontWeight: "900" }}></span></p>
            </div>
          </div>
        </div>
      </section>
      <section className="sponsorSection">
        <SponsorsSection />
      </section>
      <section className="carouselsection">

        <div className="carousel-content">
          <Heading text="Gallery" width="22%" />
          <div style={{ margin: "2rem" }}>
            <ImageCarousel />
          </div>
        </div>

      </section>
    </div>
  );
};

export default AboutSection;

