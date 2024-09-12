import React from "react";

const Header = () => {
  return (
    <>
      <div
        style={{
          border: "solid",
          display: "flex",
          justifyContent: "space-between",
          padding: "5px 10px",
          fontSize: "15px",
          alignItems: "center",
        }}
      >
        <p>About</p>
        <p>Home</p>
        <p>About</p>
        <p>Explore</p>
        <button
          style={{
            backgroundColor: "black",
            color: "white",
            border: "none",
            borderRadius: "22px",
            paddingLeft: "2%",
            paddingRight: "2%",
            height: "24px",
            
          }}
        >
          search
        </button>
        <button
          style={{
            backgroundColor: "orange",
            color: "white",
            border: "none",
            borderRadius: "22px",
            paddingLeft: "2%",
            paddingRight: "2%",
            height: "24px",
          }}
        >
          sign-in
        </button>

        <p></p>
      </div>
    </>
  );
};

export default Header;
