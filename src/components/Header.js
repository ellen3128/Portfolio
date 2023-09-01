import { Link } from "react-router-dom";
import "./Header.css";

export default function Header(props) {
  return (
    <header>
      <div className="nav">
        <div className="logo">
          <div className="nav-item">
            <Link className="nav-link" to="/">
              <div><span>HOME</span></div>
            </Link>
          </div>

          <div className="nav-item">
            <Link className="nav-link" to="/about">
              <div><span>ABOUT</span></div>
            </Link>
          </div>

          <div className="nav-item">
            <Link className="nav-link" to="/projects">
              <div><span>PROJECTS</span></div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
