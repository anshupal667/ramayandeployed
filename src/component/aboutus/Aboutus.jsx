
import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import './AboutUs.css'; // You can add custom CSS styles here
import Footer from "../Footer/Footer";
 // Add the path to your image file here

const AboutUs = () => {
  return (
    <>
     
        {/* Heading Section with Image */}
        <Row className="mb-4 about-us-header">
          <Col>
            <div className="about-us-overlay">
              <h1 className="text-center text-light display-4">{translations.Aboutus.Ghar_Ghar_Ramayan}</h1>
              <p className="text-center text-light lead">{translations.Aboutus.Bringing_the_timeless_teachings_of_the_Ramayana_into_every_household}</p>
            </div>
          </Col>
        </Row>
        <Container >
        {/* Mission Section */}
        <Row className="mb-5">
          <Col>
            <p className="text-muted">
              Welcome to Ghar Ghar Ramayan, a transformative initiative aimed at bringing the timeless teachings of the Ramayana into every household. Rooted in the values of truth, righteousness, compassion, and devotion, the Ramayana is not just an epic but a guide for living a virtuous and meaningful life. Through this movement, we aspire to rekindle the spiritual essence of the Ramayana in modern times, ensuring its teachings inspire generations to come.
            </p>
            <p className="text-muted">
              Our mission is to make the sacred text accessible to over 11 lakh households, creating a ripple effect of positivity, wisdom, and cultural pride across the nation. At {translations.Aboutus.Ghar_Ghar_Ramayan}, we believe the values enshrined in the epic can strengthen families, build resilient communities, and provide moral guidance to navigate todayâ€™s challenges.
            </p>
          </Col>
        </Row>

        {/* About Shri Arun Govil and Vision Section */}
        <Row className="my-5">
          <Col md={6}>
            <Card className="shadow-lg border-0">
              <Card.Body>
                <Card.Title className="text-center">About Shri Arun Govil Ji</Card.Title>
                <Row>
                  <Col md={4} style={{ border:"1px solid 1px solid #d1caca" }}>
                    <img 
                      src='./images/arun_avatar1.JPG'
                      alt="Shri_Arun_Govil"
                      className="img-fluid rounded-circle" 
                      style={{ width: '100%', height: 'auto',marginTop:"10px" }} 
                    />
                  </Col>
                  <Col md={8}>
                    <Card.Text>Shri Arun Govil Ji, Member of Parliament from Meerut, is a revered figure in Indian households and a passionate advocate for promoting the values of the Ramayana. Best known for his portrayal of Lord Rama in the iconic television series, Shri Govil Ji has become a symbol of righteousness, humility, and devotion. His dedication to spreading the teachings of the Ramayana goes beyond the screen, as he actively engages in social and cultural initiatives to preserve Indiaâ€™s rich heritage.</Card.Text>
                    <Card.Text>
                      Through Ghar Ghar Ramayan, Shri Arun Govil Ji envisions a future where every household is inspired by the life lessons of the Ramayanaâ€”values of truth, dharma (duty), and selflessness. His mission is not just to share the story but to spark a movement that instills moral character, strengthens family bonds, and fosters a sense of pride in Indiaâ€™s spiritual legacy.
                    </Card.Text>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>

          {/* {translations.Aboutus.Our_Vision} Section */}
          <Col md={6}>
            <Card className="shadow-lg border-0">
              <Card.Body>
                <Card.Title className="text-center">Our Vision</Card.Title>
                <Card.Text>
                  <strong>To introduce the Ramayana as a source of wisdom and guidance in daily life.</strong>
                </Card.Text>
                <Card.Text>
                  <strong>To inspire families to uphold the values of truth, devotion, and righteousness.</strong>
                </Card.Text>
                <Card.Text>
                  <strong>To ensure the teachings of the Ramayana reach every home, especially the younger generation, so they can carry forward Indiaâ€™s timeless cultural and moral values.</strong>
                </Card.Text>
                <Button variant="primary" className="w-100 py-3">{translations.Aboutus.Join_us}</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default AboutUs;

