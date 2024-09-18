import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import Interview from "./components/Interview";
import Trending from "./components/Trending";
function App() {
  return (
    <div>
      <div style={{ background: "black" }}>
        <Header />
        <Body />
        <Trending/>
        <Interview/>
      </div>
    </div>
  );
}

export default App;
