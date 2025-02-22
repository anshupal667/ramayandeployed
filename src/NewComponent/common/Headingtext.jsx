
import React from "react";
import Divider from "./Divider";
import './textheading.css';

const Heading = ({text,width,color}) => {
  return (
    <>
  <h2 className="heading-text">{text}
  </h2>
  <Divider width={width} color={color}/>
  </>
  );
};

export default Heading;

