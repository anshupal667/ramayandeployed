
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./counterlayout.css"; // Custom CSS for styling
import Divider from "../common/Divider";




const CounterSection = () => {
  return (
    <Container className="text-center counter-section mb-5 ">
      {/* Header */}
      <Row>
        <Col>
          <h6 className="metric-title">Metrics From Around India</h6>
          <Divider width="25%"/>
          {/* <hr className="title-divider" /> */}
        </Col>
      </Row>

      {/* Main Content */}
      <Row className="position-relative">
        {/* Background Words (Randomly Positioned) */}
        <Col className="word-cloud">
          <span className="word faded">Countries<span style={{marginTop:"12px",fontSize:"1.5rem"}}>With</span></span>
          <span className="word faded">Book<span style={{fontSize:"1.5rem",marginLeft:"12px"}}> 9 </span></span>
          <span className="word faded">Reached</span>
          <span className="word faded">Communities</span>
          <span className="word faded">Worldwide</span>
          <span className="word faded">With</span>
          <span className="word faded">Ordered</span>
          <span className="word faded">With</span>
          <span className="word faded">Reached</span>
          <span className="word faded">12</span>
          <span className="word faded">Countries</span>
          {/* <span className="word faded">Countries</span> */}
          <span className="word faded">11</span>
          <span className="word faded">12</span>
          <span className="word faded">04</span>
          <span className="word faded">With</span>
          <span className="word faded">Countries</span>
          <span className="word faded">Reached</span>
          <span className="word faded">Deliver</span>
          <span className="word faded">Worldwide</span>
          <span className="word faded">Reached</span> 
        </Col>

        {/* Main Counter */}
        <Col className="counter-content">
          <h4 className="counter-title">
            <span className="text-highlight" style={{marginRight:"8rem",fontSize:"5rem"}}>Total</span>
            <br />
            <span className="text-highlight" style={{marginLeft:"10rem",fontSize:"8rem"}}>Books</span>
            <br/>
            <span className="text-highlight" style={{marginLeft:"20rem",fontSize:"5rem"}}>Ordered</span>
          </h4>
          <h1 className="counter-number">15045</h1>
        </Col>
      </Row>
    </Container>
  );
};

export default CounterSection;

