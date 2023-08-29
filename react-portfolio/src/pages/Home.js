import "./Home.css";
import transition from "../transition";
// import { useRef } from "react";

function Home(props) {
  return (
    <div>
      <h1 className="title">
        {" "}
        Ellen <br /> Park <br />{" "}
        <span className="title-description">xxxxx</span>
      </h1>
    </div>
  );
}

export default transition(Home);
