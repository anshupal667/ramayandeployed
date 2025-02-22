
import React from "react";
import HeroSection from "./Herosection";
import SponsorsSection from "./SponserSection";
import Footer from "../Footer/Footer";
import CounterSection from "./Countdata";
import AboutSection from "./AboutSection";
import ControlledCarousel from "../mainpage/Carousel";

const Dashboard = () => {
    return (
        <div>
         <HeroSection/>
         <AboutSection/>
         {/* <ControlledCarousel/> */}
         <SponsorsSection/>
         <CounterSection/>
         <Footer/>
        </div>
    );
    }
export default Dashboard;
