import React from "react";

const TitleWithRectangle = ({ text = "Today's" }) => {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
      {/* Red Rounded Rectangle */}
      <div
        style={{
          width: "14px",
          height: "28px",
          backgroundColor: "#E74C3C",
          borderRadius: "6px",
        }}
      ></div>

      {/* Dynamic Text */}
      <span style={{ fontWeight: "bold", color: "#E74C3C", fontSize: "18px" }}>
        {text}
      </span>
    </div>
  );
};

export default TitleWithRectangle;
