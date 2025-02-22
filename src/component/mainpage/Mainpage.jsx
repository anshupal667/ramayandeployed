
import React, { useState, useRef, useEffect} from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import ControlledCarousel from "./Carousel";
import Footer from "../Footer/Footer";
import Apointment from '../appointment/appointment-form'
const MainPage = ({setHandleOrderNow }) => {
  console.log(setHandleOrderNow)
  const [showForm, setShowForm] = useState(false);
  const formRef = useRef(null); // Create a ref for the form container

  const handleOrderNow = () => {
    setShowForm(!showForm);
    setTimeout(() => {
      if (formRef.current) {
        formRef.current.scrollIntoView({ behavior: "smooth" }); // Scroll to the form
      }
    }, 100); // Ensure form visibility before scrolling
  };

  // Form validation schema using Yup
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    address: Yup.string().required("Address is required"),
  });
  // useEffect(() => {
  //   if (setHandleOrderNow) setHandleOrderNow(() => handleOrderNow);
  // }, [setHandleOrderNow]);
  return (
    <div style={{display:"flex",justifyContent:"center",flexDirection:"column"}} >
      {/* Top Section with Carousel */}
      <div style={{ display: "flex", flex: 1,marginTop:'4rem'}}>
        {/* Left Side Content */}
        <div style={{ flex: 1, padding: "0px", borderRight: "1px solid #ccc" ,height:'80vh'}}>
          <img
            src="/images/PM_Letter 1.png"
            className="d-block"
            style={{ height: "80vh", width: "26vw" }}
            alt={translations.Mainpage.Front_View}
          />
        </div>
        <div style={{ flex: 3, padding: "0px" }}>
        <ControlledCarousel  handleOrderNow={handleOrderNow}/>
        </div>
        {/* Right Side Content */}
        <div style={{ flex: 1, padding: "0px", borderLeft: "1px solid #ccc" }}>
          <img
            src="/images/Right_Static_Img.jpg"
            className="d-block"
            style={{ height: "80vh", width: "25.5vw" }}
            alt={translations.Mainpage.Back_View}
          />
        </div>
      </div>

      {/* Bottom Section with {translations.Mainpage.Order_Now} Button and Form */}
      <div style={{ padding: "0px", borderTop: "1px solid #ccc", background:"#f7dec970" }}>
        {/* <button
          onClick={handleOrderNow}
          style={{
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          {showForm ? "Close Form" : "{translations.Mainpage.Order_Now}"}
        </button> */}
        {/* {showForm && ( */}
          <div style={{ marginTop: "3rem",textAlign:"center",padding:"20px"}}  ref={formRef} >
            <h3>Order Now</h3>
          <Apointment />
          </div>
        {/* )} */}
      </div>
        <Footer/>
    </div>
  );
};

export default MainPage;

