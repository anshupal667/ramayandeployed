
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import './sponcor.css'
import ScrollButton from "../../test";
const sponsors = {
  platinum: ["./images/adani1.png"],
  gold: [
    "./images/reliance1.png",
    "./images/airtel1.png",
    "./images/hdfc1.png",
  ],
  silver: [
    "./images/birla1.png",
    "./images/daubar1.png",
    "./images/tcs1.png",
    "./images/iimt1.png",
  ],
  media: ["./images/aajtak1.png", "./images/ndtv1.png"],
  logistics: ["./images/iimt1.png"],
  packaging: ["./images/bluedart1.png"],
};

const SponsorSection = ({ scrollToFooterRef }) => {
  const handleScrollToFooter = () => {
    if (scrollToFooterRef?.current) {
      scrollToFooterRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const renderColumn = (categories, addBorder) => (   
    <Col className={addBorder ? "border-column" : ""}>
      {categories.map(([tier, images]) => (
        <div key={tier} className="mb-4">
          <h3 className="text-capitalize " style={{fontSize:"20px"}}>{tier} Sponsors</h3>
          <Row className="g-3">
            {images.map((src, index) => (
              <Col key={index} xs={4}>
                <Card className="border-0" style={{ background: "none" }}>
                  <Card.Img
                    variant="top"
                    src={src}
                    alt={`${tier} sponsor ${index + 1}`}
                    style={{ height: "100px", objectFit: "contain" }}
                  />
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      ))}
    </Col>
  );

  return (
    <div style={{ background: "#FFFFFF"}}>
      <Container className="p-5">
        <h4 className="text-center mb-5" style={{color:"#28171D",fontSize:"25px"}}>Our Strategic Alliances</h4>
        <Row style={{color:"#6A1A17",fontWeight:"700"}}>
          {renderColumn(
            [["platinum", sponsors.platinum], ["gold", sponsors.gold]],
            true
          )}
          {renderColumn(
            [["silver", sponsors.silver], ["media", sponsors.media]],
            true
          )}
          {renderColumn(
            [["logistics", sponsors.logistics], ["packaging", sponsors.packaging]],
            false
          )}
        </Row>
      </Container>
      {/* <div style={{marginLeft:"6rem",marginBottom:"1rem"}}>
      <ScrollButton onClick={handleScrollToFooter}/>
      </div> */}
      {/* <button className="cta-button secondary" onClick={handleScrollToFooter}>{translations.Sponsornew.Scroll_to_Footer}</button> */}

    </div>
  );
};

export default SponsorSection;

