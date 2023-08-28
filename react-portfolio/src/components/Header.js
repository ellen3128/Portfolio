import { Link } from "react-router-dom";
import './Header.css';

export default function Header (props) {
    // const navStyle = {
    //     display: "flex",
    //     justifyContent: "space-around",
    //     border: "3px solid black",
    //     padding: "8px",
    //     width: "90%",
    //     margin: "auto"
    // };
    return (
        <header>
        {/* <nav style={navStyle}> */}
         <div className="navbar">
          <Link to="/">
            <div>HOME</div>
          </Link>
          <Link to="/about">
            <div>ABOUT</div>
          </Link>
          <Link to="/projects">
            <div>PROJECTS</div>
          </Link>
        </div>
      </header>
    );
  }