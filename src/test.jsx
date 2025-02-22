
import React from 'react';
import './ScrollButton.css';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

const ScrollButton = ({ onClick }) => {
  return (
    <>
    <button className="scroll-button" onClick={onClick}>
      {/* Central bouncing dot */}
      <div className="inner-dot"></div>
      
      {/* Animated chevrons */}
      <div className="chevrons">
        <span className="chevron"><KeyboardDoubleArrowDownIcon/></span>
        <span className="chevron"><KeyboardDoubleArrowDownIcon/></span>
      </div>
    </button>
    </>
  );
};

export default ScrollButton;

