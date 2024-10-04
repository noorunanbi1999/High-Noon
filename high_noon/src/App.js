import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

// import "./App.css";
// import Body from "./components/Body";
// import Header from "./components/Header";
// import Interview from "./components/Interview";
// import InterviewCarousel from "./components/InterviewCarousel";
// import SignIn from "./components/SignIn";
// import Trending from "./components/Trending";
// import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
// function App() {
//   return (
//     <Router>
//       <div>
//         <div style={{ background: "black" }}>
//           <Header />
//           <Body />
//           <Trending />
//           <Interview />
//         </div>

//         <Routes>
//           <Route path="/signin" element={<SignIn />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;
