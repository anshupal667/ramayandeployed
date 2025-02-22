import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import '../../component/NewDashboard/imagecarousel.css'
import Heading from "../common/Headingtext";
import { useTranslation } from "react-i18next";
import "./imagecarousel.css";

const Gallery = () => {
  const { t } = useTranslation();
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 3, // 3 images at a time
      slidesToSlide: 3, // Move 3 slides at once
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  const images = [
    "./galleryimages/galleryimg1.jpg",
    "./galleryimages/galleryimg2.jpg",
    "./galleryimages/galleryimg3.jpg",
    "./galleryimages/galleryimg4.jpg",
    "./galleryimages/galleryimg5.jpg",
    "./galleryimages/galleryimg6.jpg",
  ];
  const CustomRightArrow = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType }
    } = rest;
    // onMove means if dragging or swiping in progress.
    return <button onClick={() => onClick()} style={{border:"1px solid red"}} />;
  };


  const CustomDot = ({ onMove, index, onClick, active }) => (
    <button
      onClick={() => onClick()}
      className={`custom-dot ${active ? "active" : ""}`}
    />
  );

  return (
    <div style={{margin:"0px 10px"}}>
         <div style={{ textAlign: "center", marginTop: "1.5em", marginBottom: "1.5em" }}>
        <Heading text={t('Gallery.Gallery')} width="18%" />
      </div>
   
    <Carousel
      responsive={responsive}
      arrows={true}
      swipeable={true}
      draggable={false}
      showDots={true}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={2000}
      keyBoardControl={true}
      containerClass="carousel-container"
      transitionDuration={1000}
      removeArrowOnDeviceType={["tablet", "mobile"]}
      customDot={<CustomDot />}
      customRightArrow={<CustomRightArrow />}
      customLeftArrow={<CustomRightArrow />}
      customButtonGroup={<CustomRightArrow/>}
    >
      {images.map((src, index) => (
        <div key={index} style={{ padding: "10px" }}>
          <img src={src} alt={`Slide ${index + 1}`} className="custom-image"  />
        </div>
      ))}
    </Carousel>
    </div>
  );
};

export default Gallery;
