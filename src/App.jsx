
// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./component/Footer/Footer";
import AboutUs from "./component/Aboutus/Aboutus";
import NavigationBar from "./component/header/Navbar";
import BookingData from "./component/BookingData/Bookingdata";
import Dashboard from "./component/dashboard/Dashboard";
import AboutSection from "./component/dashboard/AboutSection";
import PrivacyPolicyPage from "./NewComponent/footer/PrivacyPolicy";
import MainPage from "./component/NewDashboard/MainPage";
import TermsAndConditionsPage from "./NewComponent/footer/TermsndConditions";
// import OrderBook from "./component/OrderBook"; // Create OrderBook component


const App = () => {
  return (
    <Router>
      <div>
        
        <Routes>
        <Route path="/ramayandeployed" element={<MainPage/>} />
        <Route path="/ramayan/privacypolicy" element={<PrivacyPolicyPage/>} />
        <Route path="/ramayan/terms&condition" element={<TermsAndConditionsPage/>} />
          {/* <Route path="/" element={<MainPage/>} />
          <Route path="/about" element={<AboutSection />} />
           <Route path="/order" element={<MainPage/>} />
           <Route path="/bookingdata" element={<BookingData/>} />
          <Route path="/contact" element={<AboutUs/>} />  */}
        </Routes>
        
      </div>
    </Router>
  );
};

export default App;

