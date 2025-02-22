
import React from "react";
import Slider from "react-slick"; // Import react-slick for the carousel
import "./sponsorsection.css"; // Optional: Use for external styling if needed
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const SponsorsSection = () => {
  const sponsors = {
    platinum: ["./images/adani.jpg"],
    gold: [
      "./images/reliance.png",
      "./images/airtel.png",
      "./images/hdfc.png",
    ],
    silver: [
      "./images/birla.png",
      "./images/daubar.png",
      "./images/tcs.png",
      "./images/iimt.png",
    ],
    media: ["./images/aajtak.png", "./images/ndtv.png"],
    logistics: ["./images/bluedart.png", "./images/ndtv.png"],
    packaging: ["./images/iimt.png"],
  };

  const getSliderSettings = (images) => ({
    dots: false, // Hide dot indicators
    infinite: images.length > 1, // Enable infinite scrolling only if there are multiple images
    speed: 500,
    arrows: false, // Disable next and previous arrows
    slidesToShow: images.length < 4 ? images.length : 4, // Show only the number of images available, up to 4
    slidesToScroll: 1,
    autoplay: images.length > 1, // Enable autoplay only if there are multiple images
    autoplaySpeed: 2000,
    centerMode: images.length === 1, // Center mode for single image
    centerPadding: "0px", // Remove additional padding in center mode
    responsive: [
      {
        breakpoint: 1024, // For medium devices like laptops
        settings: {
          slidesToShow: images.length < 3 ? images.length : 3,
        },
      },
      {
        breakpoint: 768, // For tablets
        settings: {
          slidesToShow: images.length < 2 ? images.length : 2,
        },
      },
      {
        breakpoint: 480, // For mobile devices
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  return (
    <div>
     <h4 className="text-center  text-muted mb-4 mt-5 sponserheading">{translations.SponserSection.Our_Sponsors}</h4>
    <section className="sponsors-section py-5">
      <div className="container">
       

        {/* Sponsors Carousels */}
        {Object.keys(sponsors).map((category) => (
          <div className="mb-5" key={category} style={{marginBottom:'5rem',}}>
            <h4 className="title" >
              {category.charAt(0).toUpperCase() + category.slice(1)} Sponsors
            </h4>
            <div style={{background:"white"}}>
            <Slider {...getSliderSettings(sponsors[category])}>
              {sponsors[category].map((logo, index) => (
                <div className="sponsor-logo text-center" key={index}>
                  <img
                    src={logo}
                    alt={`${category} Sponsor ${index + 1}`}
                    className="sponsor-image"
                  />
                </div>
              ))}
            </Slider>
            </div>
          </div>
        ))}
      </div>
    </section>
    </div>
  );
};

export default SponsorsSection;

