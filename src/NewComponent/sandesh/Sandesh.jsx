import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./sandesh.css";
import { useTranslation } from "react-i18next";
import Heading from "../common/Headingtext";

const Sandesh = () => {
  const { t } = useTranslation();
  return (
    <div className="sandesh-container">
      <div className="sandesh-subcontainer">
        <Heading text={t('Sandesh.Sandesh')} width="38%" />

        <Row className="mt-4 justify-content-center">
          {/* Left Section - Ramayan Backdrop */}
          <Col md={4} className="text-center">
            <div className="sandesh-card">
              <img
                src="./images/ramayanback.jpeg"
                alt="Ramayan Backdrop"
                className="sandesh-image"
              />
            </div>
          </Col>

          {/* Middle Section - Feather and Ink */}
          <Col md={4} className="text-end d-flex align-items-end justify-content-center px-3">
            <img
              src="./images/featherink.png"
              alt="Feather and Ink"
              className="feather-ink"
            />
          </Col>

          {/* Right Section - PM's Letter */}
          <Col md={4} className="text-center">
            <div className="sandesh-card">
              <img
               style={{border:"1px solid grey"}}
                src="./images/PM_Letter 1.png"
                alt="PM's Letter"
                className="sandesh-image"
              />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Sandesh;
