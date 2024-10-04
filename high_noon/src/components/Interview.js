import React from "react";
import InterviewCarousel from "./InterviewCarousel";



const Interview = () => {
 

  const buttonStyle = {
    color: "orange",
    background: "black",
    border: "solid",
    borderColor: "orange",
    borderRadius: "22px",
    height: "24px",
    width: "100px",
    marginTop: "50px",
  };

  return (
    <div
      style={{
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyItems: "center",
        alignItems: "center",
        backgroundImage:
          "url(https://img.freepik.com/premium-photo/studio-podcast-microphone-dark-background_162008-317.jpg?w=740)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        width: "100%",
        height: "500px",
        overflow: "hidden",
        border:"solid"
      }}
    >
      <h2>Exclusive Interview</h2>
      <p>This section comprises of famous indivisulas we have interviewed</p>
      {/* <button style={buttonStyle}>Watch Here</button> */}
      {InterviewCarousel}
    </div>
  );
};

export default Interview;
