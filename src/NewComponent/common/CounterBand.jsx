import React, { useEffect, useState } from "react";
import "./CounterBox.css";
import { useTranslation } from "react-i18next";

const CounterBox = ({ start = 14999, end = 15010 }) => {
  const [currentNumber, setCurrentNumber] = useState(start.toString());
  const { t } = useTranslation();

  useEffect(() => {
    let current = start;
    const interval = setInterval(() => {
      if (current >= end) {
        clearInterval(interval);
        return;
      }
      current += 1;
      setCurrentNumber(current.toString());
    }, 3000); // Adjust speed if needed

    return () => clearInterval(interval);
  }, [start, end]);

  return (
    <div className="counter-box">
      <div className="scroll-numbers">
        {currentNumber.split("").map((digit, index) => (
          <div key={index} className="digit-container">
            <div className="digit-scroll">
              <span className="previous">{parseInt(digit, 10) - 1 < 0 ? 9 : parseInt(digit, 10) - 1}</span>
              <span className="current">{digit}</span>
              <span className="next">{(parseInt(digit, 10) + 1) % 10}</span>
            </div>
          </div>
        ))}
      </div>
      <p className="counter-label">{t("Counter.Book_Delevired")}</p>
    </div>
  );
};

export default CounterBox;
