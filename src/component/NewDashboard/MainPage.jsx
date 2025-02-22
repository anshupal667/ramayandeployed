import React, { useRef, useState, useEffect } from "react";
import DotNavigation from "../../NewComponent/common/DotNavigation";
import Sandesh from "../../NewComponent/sandesh/Sandesh";
import Gallery from "../../NewComponent/Gallery/Gallery";
import SponsorsSection from "../../NewComponent/sponserSection/Sponsor";
import OrderSteps from "../../NewComponent/orderStep/SteptoOrder";
import Testimonials from "./Testimonial";
import BookUI from "../../NewComponent/bookui/Bookorder";
import Footer from "../../NewComponent/Footer/Footer";
import HeroSection from "../../NewComponent/heroSection/HeroSection";

const MainPage = () => {
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)
  const sections = [
    useRef(null), useRef(null), useRef(null),
    useRef(null), useRef(null), useRef(null),
    useRef(null), useRef(null)
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const isScrolling = useRef(false);

  // Function to smoothly scroll to a section
  const scrollToSection = (index) => {
    if (index >= 0 && index < sections.length && sections[index].current) {
      isScrolling.current = true;
      sections[index].current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      setTimeout(() => {
        isScrolling.current = false;
      }, 1000); // Ensures smooth transition

      setActiveIndex(index);
    }
  };

  // Handle scroll wheel event
  useEffect(() => {
    let timeout;
    
    const handleWheel = (event) => {
      event.preventDefault();
      if (isScrolling.current) return;

      clearTimeout(timeout); // Reset debounce
      timeout = setTimeout(() => {
        if (event.deltaY > 0 && activeIndex < sections.length - 1) {
          scrollToSection(activeIndex + 1);
        } else if (event.deltaY < 0 && activeIndex > 0) {
          scrollToSection(activeIndex - 1);
        }
      }, 100); // Short debounce for smooth step-by-step scrolling
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [activeIndex]);

  // Handle keyboard navigation (ArrowUp & ArrowDown)
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (isScrolling.current) return;

      if (event.key === "ArrowDown" && activeIndex < sections.length - 1) {
        scrollToSection(activeIndex + 1);
      } else if (event.key === "ArrowUp" && activeIndex > 0) {
        scrollToSection(activeIndex - 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex]);

  return (
    <div ref={containerRef} className="main-container">
      <div ref={sections[0]} className="section">
        <HeroSection scrollToRef={sections[1]} />
      </div>
      <div ref={sections[1]} className="section"><Sandesh /></div>
      <div ref={sections[2]} className="section"><Gallery /></div>
      <div ref={sections[3]} className="section"><SponsorsSection /></div>
      <div ref={sections[4]} className="section"><OrderSteps /></div>
      <div ref={sections[5]} className="section"><Testimonials /></div>
      <div ref={sections[6]} className="section"><BookUI /></div>
      <div ref={sections[7]} className="section"><Footer /></div>

      {/* Dot Navigation */}
      {!isMobile && <DotNavigation sections={sections} activeIndex={activeIndex} onDotClick={scrollToSection} />}

      {/* <DotNavigation sections={sections} activeIndex={activeIndex} onDotClick={scrollToSection} /> */}
    </div>
  );
};

export default MainPage;
