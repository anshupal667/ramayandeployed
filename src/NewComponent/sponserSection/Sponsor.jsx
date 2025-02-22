
import React, { useEffect, useState } from "react";
import { Row, Col, Card } from "react-bootstrap";
import "./sponsor.css"; // Custom styles
import sponsordata from './sponsor.json';
import Heading from "../common/Headingtext";
import { useTranslation } from "react-i18next";

const SponsorsSection = () => {
  const { t } = useTranslation();
  return (
    <div className="text-center sponsors-section">
      {/* Title */}
      <Heading text={t("Partners.Partners")} width="22%"/>  
      {/* Generate sponsor tiers dynamically */}
      <Row className="justify-content-center mt-3">
        {sponsordata.map((category, index) => (
          <Col md={4} key={index}>
            <Card className={`sponsor-card ${category.color}`}>
              <Card.Header className="tier-title">{category.tier}</Card.Header>
              <Card.Body className="sponsor-logos">
                {/* For Silver & Bronze tiers: Show logos in 2 columns */}
                {category.tier === "Silver" || category.tier === "Bronze" ? (
                  <Row>
                    {category.sponsors.map((sponsor, i) => (
                      <Col xs={6} key={i} className="d-flex justify-content-center align-items-center text-center" >
                        <img
                          src={sponsor.logo}
                          alt={sponsor.name}
                          className="sponsor-logo"
                        />
                      </Col>
                    ))}
                  </Row>
                ) : (
                  // For Gold tier: Show logos in a single row
                  category.sponsors.map((sponsor, i) => (
                    <img
                      key={i}
                      src={sponsor.logo}
                      alt={sponsor.name}
                      className="sponsor-gold-logo"
                    />
                  ))
                )}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default SponsorsSection;

