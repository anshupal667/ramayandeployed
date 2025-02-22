import { Container, Row, Col } from "react-bootstrap";
import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
import { useTranslation } from "react-i18next";
import './footer.css';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="footer bg-orange-600 text-white">
      <Container fluid>
        <Row className="align-items-center" style={{ padding: "0px 25px" }}>
          {/* Left Section - Social Links */}
          <Col xs={12} md={3} className="text-center text-md-start footercol">
            <p className="fw-normal">{t('footer.socialLinks.followUs')}</p>
            <div className="d-flex justify-content-md-start justify-content-center gap-3 mt-3">
              <a href="https://www.instagram.com/siyaramkijai/?hl=en" target="_blank" rel="noopener noreferrer" className="text-white mediaicons">
                <FaInstagram size={24} />
              </a>
              <a href="https://x.com/arungovil12?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor&mx=2" target="_blank" rel="noopener noreferrer" className="text-white mediaicons">
                <FaTwitter size={24} />
              </a>
              <a href="https://www.facebook.com/govilarun52/" target="_blank" rel="noopener noreferrer" className="text-white mediaicons">
                <FaFacebookF size={24} />
              </a>
              <a href="https://www.youtube.com/@ArunGovilOfficial" target="_blank" rel="noopener noreferrer" className="text-white mediaicons">
                <FaYoutube size={24} />
              </a>
            </div>
          </Col>

          {/* Middle Section - Contact Info */}
          <Col xs={12} md={6} className="text-start d-flex flex-column justify-content-center align-items-center footercol">
            <div>
              {/* Clickable Email */}
              <p className="mb-1 fw-light">
                <MdEmail size={28} className="me-2 mediaicons" />
                <a href="mailto:ghargharramayan@gmail.com" className="text-white text-decoration-none">
                  {t('footer.contactInfo.email')}: ghargharramayan@gmail.com
                </a>
              </p>

              {/* Clickable Phone Number */}
              <p className="mt-2 fw-light">
                <MdPhone size={28} className="me-2 mediaicons" />
                <a href="tel:+919999999999" className="text-white text-decoration-none">
                  {t('footer.contactInfo.phone')}: 9999999999
                </a>
              </p>
            </div>
          </Col>


          {/* Right Section - Links */}
          <Col xs={12} md={3} className="text-center text-md-center" x>
            <div className="d-flex flex-column align-items-md-end align-items-center">
              <p className="mb-1 fw-light">
                <a href="/ramayan/privacypolicy" className="text-white text-decoration-none">{t('footer.links.privacyPolicyText')}</a>
              </p>
              <p className="mb-1 fw-light">
                <a href="/ramayan/terms&condition" className="text-white text-decoration-none"> {t('footer.links.termsAndConditionsText')}</a>
              </p>
              <p className="mb-0 fw-light">
                <a href="/contact-us" className="text-white text-decoration-none"> {t('footer.links.contactUsText')}</a>
              </p>
            </div>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col className="text-center">
            <p className="mb-0 fw-light" >{t('footer.copyright')}</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
