
import React from "react";
import "./subscription.css"; // Import the CSS file

const SubscriptionSection = () => {
    return (
        <footer className="subscriptionfooter">
            <div className="subscription-container">
                {/* Subscription Section */}
                <div className="subscription-section">
                    <h2 className="subscription-title">Subscribe</h2>
                    <div className="subscription-form">
                        <input
                            type="email"
                            placeholder="enter your email"
                            className="subscription-input"
                            fullWidth
                        />
                        <button className="subscription-button">Sign up</button>
                    </div>
                    <p className="subscription-text">
                        Get 10% off your first purchase when you Sign up for our newsletter!
                    </p>
                </div>

                {/* Footer Left Section */}
               
            </div>
        </footer>
    );
};

export default SubscriptionSection;

