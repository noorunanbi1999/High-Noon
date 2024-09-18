import React from "react";
import Topic from "./Topic";

const Trending = () => {
  const objArr = [
    { id: 1, heading: "Killed", article: "Many were killed" },
    { id: 2, heading: "Accident", article: "Oh no" },
    { id: 3, heading: "When", article: "Shit" },
    { id: 4, heading: "Why", article: "Shit" },
    { id: 5, heading: "Where", article: "Shit" },
    { id: 3, heading: "What", article: "Shit" },
    { id: 3, heading: "What", article: "Shit" },
    { id: 3, heading: "What", article: "Shit" },
    
  ];
  return (
    <div>
      <h2 style={{color:"white" ,margin:"30px"}}>Trending Topics</h2>
      <div
        style={{
          display:"flex",
          flexWrap:"wrap",
          boxSizing:"border-box",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "13px",
          padding: "20px",
          margin: "20px",
          borderRadius: "18px",
          borderBottom:"solid",
          borderRight:"solid",
          borderBlockColor:"grey",
          background: "#333333",
        }}
      >

        {objArr.map((obj) => (
          <Topic heading={obj.heading} article={obj.article} />
        ))}
      </div>
    </div>
  );
};

export default Trending;
