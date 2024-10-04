import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Body from "./Body";
import Trending from "./Trending";
import Interview from "./Interview";
import SignIn from "./SignIn";

const Home = () => {
  return (
    
        <div>
          <div style={{ background: "black" }}>
           
            <Body></Body>
            <Trending />
            <Interview />
          </div>

          
        </div>
  );
};

export default Home;
