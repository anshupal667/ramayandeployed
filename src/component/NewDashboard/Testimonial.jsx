import React from "react";
import Slider from "react-slick";
import {
  Container,
  Card,
  CardContent,
  Typography,
  Avatar,
  Box,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Heading from "../../NewComponent/common/Headingtext";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./testimonial.css";
import { useTranslation } from "react-i18next";
import { Padding } from "@mui/icons-material";

const testimonials = [
  {
    name: "Urmila Raman, Jabalpur",
    img: "./clientimages/clientimg1.jpg",
    text: "बहुत अच्छी पहल है इस कारण ही सही हर सनातनी धर्म को मानने वाले अपने धर्म के बारे में पता होगा, जय श्री राम",
  },
  {
    name: "Vijay, Uttar Pradesh ",
    img: "./clientimages/clientimg2.jpg",
    text: "बहुत अच्छी पहल है इस कारण ही सही हर सनातनी धर्म को मानने वाले अपने धर्म के बारे में पता होगा, जय श्री राम",
  },
  {
    name: "Rajesh, Tamil Nadu",
    img: "./clientimages/clientimg3.jpg",
    text: "பஹுத் அச்சி பஹல் ஹை இஸ் காரன் ஹீ சாஹே ஹர் சனாதானி தரம் கோ மான்னே வாலே கோ அப்னே",
  },
  {
    name: "Kamla Devi, Bihar",
    img: "./clientimages/clientimg1.jpg",
    text: "बहुत अच्छी पहल है इस कारण ही सही हर सनातनी धर्म को मानने वाले अपने धर्म के बारे में पता होगा, जय श्री राम",
  },
  {
    name: "Neha, uttarakhand",
    img: "./clientimages/clientimg2.jpg",
    text: "बहुत अच्छी पहल है इस कारण ही सही हर सनातनी धर्म को मानने वाले अपने धर्म के बारे में पता होगा, जय श्री राम",
  },
  {
    name: "Vankatesh, Andhra Pradesh",
    img: "./clientimages/clientimg3.jpg",
    text: "பஹுத் அச்சி பஹல் ஹை இஸ் காரன் ஹீ சாஹே ஹர் சனாதானி தரம் கோ மான்னே வாலே கோ அப்னே",
  },
];

export default function Testimonials() {
  const theme = useTheme();
  const { t } = useTranslation();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 3, // 3 images at a time
      slidesToSlide: 3, // Move 3 slides at once
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
 
  const CustomDot = ({ onMove, index, onClick, active }) => (
    <button
      onClick={() => onClick()}
      className={`testimonialcustom-dot ${active ? "active" : ""}`}
    />
  );

  return (
    <Container sx={{ color: "orange" }} style={{maxWidth: "100%",height:"100%"}}>
      <Box textAlign="center" sx={{ mb: 2, mt: 2 }}>
        <Heading text={t("Testimonial.Testimonial")} width="30%" />
      </Box>
   <Carousel
      responsive={responsive}
      arrows={false}
      swipeable={true}
      draggable={false}
      showDots={true}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={2000}
      keyBoardControl={true}
      transitionDuration={1000}
      removeArrowOnDeviceType={["tablet", "mobile"]}
      style={{border:"1px solid"}} 
      customDot={<CustomDot />}
      className="slider"
    >
        {testimonials.map((testimonial, index) => (
          <Box key={index} px={2} style={{height: "100%"}} >
            <Card
              sx={{
                textAlign: "center",
                background: "#F5EBEC",
                borderRadius: "50px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                
                height:"100%",
                p: 2,
              }}
            >
              <Box sx={{ position: "relative", width: "100%", textAlign: "center",justifyContent:"center" ,display:"flex"}}>
              <img
                  src="./clientimages/outerdesign.png"
                  alt="Decorative Frame"
                  style={{
                    width: isMobile ? "45vw" : "28vw",
                    maxWidth: "250px",
                    minWidth:isMobile ? "200px" :"none"
                  }}
                />
                <Avatar
                  src={testimonial.img}
                  sx={{
                    width: isMobile ? 90 : 120,
                    height: isMobile ? 80 : 120,
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                />
              </Box>
              <CardContent>
                <Typography
                  variant="body2"
                  sx={{ fontWeight: 400, color: "rgb(116 116 116)", fontFamily: "Poppins" }}
                >
                  {testimonial.text}
                </Typography>
                <Typography variant="h6" gutterBottom sx={{ fontFamily: "Unbounded",fontSize:"0.9rem",marginTop:'12px' }}>
                  {testimonial.name}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        ))}
    </Carousel>
    </Container>
  );
}
