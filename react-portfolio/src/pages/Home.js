import "./Home.css";
import transition from "../transition";
// import { useRef } from "react";

function Home(props) {
  return (
    <div>
      <h1 className="title">
        {" "}
        Ellen <br /> Park <br />{" "}
        <span className="sub-title" aria-label="Hi! I'm a developer">
        &nbsp;Hi! I'm a &nbsp;<span className="typewriter">&nbsp;</span>
        </span>
      </h1>
    </div>
  );
}

export default transition(Home);
