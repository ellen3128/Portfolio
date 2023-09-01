import "./Home.css";
import transition from "../transition";
// import { useRef } from "react";

function Home(props) {
  return (
    <div>
      <h1 className="title">
        {" "}
        Ellen <br /> Park <br />{" "}
        <span className="title-description">xxxxx</span><br></br>
        {/* <div className="greetings">
        <span className="system">system</span>.
        <span className="out">out</span>.
        <span className="printIn">printIn</span>("
        <div className="text-animation">
        <span className="greeting en">Hello World!</span>
        <span className="greeting es">¡Hola Mundo!</span>
        <span className="greeting it">Ciao Mondo!</span>
        <span className="greeting kr">안녕하세요!</span>
        </div>
        <span className="closure">");</span> */}
        {/* </div> */}
        
      </h1>
    </div>
  );
}

export default transition(Home);
