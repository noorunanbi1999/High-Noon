import React, { useState } from "react";

const Topic = ({ heading, article }) => {
  const [onCard, setOnCard] = useState(false);
  const handleMouseEnter = () => setOnCard(true);
  const handleMouseLeave = () => setOnCard(false);

  const card = {
    display: "flex",
    flexDirection: "column",
    justifyItems: "left",
    color: "white",
    height: "100px",
    width: "300px",
    background: onCard ? "orange" : "grey",
    padding: "12px",
    borderRadius:"12px"
  };
  return (
    <div
      style={card}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h4>{heading}</h4>
      <p>{article}</p>
    </div>
  );
};

export default Topic;
