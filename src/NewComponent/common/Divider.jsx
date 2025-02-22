
import React from "react";
import "./Divider.css"; // Import the CSS file

const Divider = (props) => {
  return (
    <div className="dividerSection" >
    <div className="divider" style={{width:props.width,color:props.color}}>
      <span className="circle" style={{backgroundColor:props.color}}></span>
      <span className="circledot" style={{backgroundColor:props.color}}></span>
      <span className="circle" style={{backgroundColor:props.color}}></span>
      <div className="line" style={{backgroundColor:props.color}}></div>
      <span className="circle" style={{backgroundColor:props.color}}></span>
      <span className="circledot" style={{backgroundColor:props.color}}></span>
      <span className="circle" style={{backgroundColor:props.color}}></span>
      </div>
    </div>
  );
};

export default Divider;

