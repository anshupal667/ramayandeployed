import React from "react";

const DotNavigation = ({ sections, activeIndex, onDotClick }) => {
  return (
    <div style={styles.container}>
      {sections.map((_, index) => (
        <div
          key={index}
          style={{
            ...styles.dot,
            backgroundColor: activeIndex === index ? "#ad511ff5" : "white",
          }}
          onClick={() => onDotClick(index)}
        />
      ))}
    </div>
  );
};

const styles = {
  container: {
    position: "fixed",
    right: "20px",
    top: "50%",
    transform: "translateY(-50%)",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  dot: {
    width: "12px",
    height: "12px",
    borderRadius: "50%",
    border: "1px solid #ad511ff5",
    cursor: "pointer",
  },
};

export default DotNavigation;
