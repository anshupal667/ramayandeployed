
import React from "react";
import "./footer.css"; // Import the CSS file
import SubscriptionSection from "./Subscription";

const Footer = () => {
    return (
        <div>
        {/* <SubscriptionSection/> */}
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-left">
                   <p className="footer-text">Ghar Ghar Ramayan</p>
                    <p className="footer-text" style={{marginTop:"3rem"}}>Copyright Â© 2025 Ghar Ghar Ramayan - All Rights Reserved.</p>
                </div>
                {/* <div className="footer-right">
                    <ul className="footer-list">
                        <li className="footer-list-item">
                            <a href="/about" className="footer-link">{translations.Footer.About_Us}</a>
                        </li>
                        <li className="footer-list-item">
                            <a href="/{translations.Footer.Contact}" className="footer-link">{translations.Footer.Contact}</a>
                        </li>
                        <li className="footer-list-item">
                            <a href="/privacy" className="footer-link">{translations.Footer.Privacy_Policy}</a>
                        </li>
                    </ul>
                </div> */}
            </div>
        </footer>
        </div>
    );
};

export default Footer;

