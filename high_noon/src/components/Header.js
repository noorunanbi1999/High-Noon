import React, { useState } from "react";

const Header = () => {
  const [isHoverd, setIsHovered] = useState(false);
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const [isZoomed, setIsZoomed] = useState(false);
  const handleMouseEnterSearch = () => setIsZoomed(true);
  const handleMouseLeaveSearch = () => setIsZoomed(false);

  const buttonStyleSearch = {
    backgroundColor: "black",
    color: "white",
    border: "none",
    borderRadius: "22px",
    paddingLeft: "2%",
    paddingRight: "2%",
    height: "24px",
    width:"100px",
    border: "solid",
    borderBlockColor: "white",
    
  };

  const buttonStyleSignIn = {
    backgroundColor: isHoverd ? "red" : "orange",
    color: "white",
    border: "none",
    borderRadius: "22px",
    height: "24px",
    width: "100px",
  };

  return (
    <div>
      <div
        style={{
          border: "solid",
          display: "flex",
          justifyContent: "space-between",
          padding: "5px 10px",
          fontSize: "15px",
          alignItems: "center",
          backgroundColor: "black",
          color: "white",
          paddingLeft: "40px",
          paddingRight: "40px",
        }}
      >
        <div>
          <p>High Noon Site For Development</p>
        </div>

        <div
          style={{
            display: "flex",
            // justifyContent: "space-between",
            gap: "30px",
            alignItems: "center",
          }}
        >
          <p>About</p>
          <p>Home</p>
          <p>Explore</p>
          <button style={buttonStyleSearch}>search</button>
          <button
            style={buttonStyleSignIn}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            sign-in
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
