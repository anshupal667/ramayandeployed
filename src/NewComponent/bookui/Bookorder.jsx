
import React,{useState} from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./bookui.css";
import CounterBox from "../common/CounterBand";
import Heading from "../common/Headingtext";
import CustomDialog from "../form/FormDialogBox"
import { useTranslation } from "react-i18next";
 

const BookUI = () => {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();
  return (
    <div
      className="book-ui"
      style={{
        backgroundImage: `url('./images/herobg.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height:"100%",
        // minHeight: "80vh",
        // display: "flex",
        alignItems: "center",
        marginBottom:'1.5rem',
        marginTop:"2rem"
      }}
    >
    <div>
        <CounterBox targetNumber={15048}/>
        </div>
      <Container >
        <Row className="d-flex justify-content-center align-items-center align-items-start">
          {/* Left Section */}
          <Col md={6} className="text-white text-center">
           <h1 className="book-title fw-bold">{t("OrderBook.GhrGhr_Ramayan")}</h1>
            <h5 className="book-sub-title fw-bold mb-4">{t("OrderBook.Shprem")}</h5>
            <Heading width="54%" color="white"></Heading>
            <p className="book-subtitle mb-4">{t("OrderBook.Order_BookNow")}<br />{t('OrderBook.Prapt_kare')}</p> 
            {/* <button variant="danger" className="order-now px-4 py-3">Order now</button> */}
            <button onClick={() => setOpen(true)}  className="hero-button">{t('OrderBook.Order_Now')}</button>
          </Col>

          {/* Right Section - Books Image */}
          <Col md={6} className="text-center">
            <img
              src="./images/orderbookimg.png"
              alt="Ramayan_Books"
              className="img-fluid books-image"
            />
          </Col>
        </Row>
      </Container>
      <CustomDialog open={open} onClose={() => setOpen(false)} />
    </div>
  );
};

export default BookUI;

