import React from "react";
// import vid from "/src/vid.mp4";
import Photo1 from "./pics.jpg";
import vid from "./vid.mp4";
import { useRef, useEffect } from "react";

const Body = () => {
  const imgURL = "./src/vid.mp4";

  const buttonStyleSignIn = {
    backgroundColor: "orange",
    color: "white",
    border: "none",
    borderRadius: "22px",
    height: "24px",
    width: "100px",
  };
  return (
    <div //main body div
      style={{
        display: "flex",
        marginLeft: "100px",
        alignItems: "center",
        // border: "solid",
        justifyContent: "space-evenly",
        background: "black",
        color: "white",
      }}
    >
      <div>
        <h1 style={{ color: "darkcyan" }}>High Noon</h1>
        <h4>One-Stop destination for all your cyber security resourses</h4>
        <button style={buttonStyleSignIn}>sign-in</button>
      </div>

      <video
        src={vid}
        autoPlay={true}
        loop={true}
        height={400}
        width={600}
        muted
      ></video>
    </div>
  );
};

export default Body;
