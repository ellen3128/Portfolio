import { Link } from "react-router-dom";
import "./Header.css";

export default function Header(props) {
  return (
    <header>
      <div className="nav">
        <div className="logo">
          <div className="nav-item">
            <Link className="nav-link" to="/">
              <div>HOME</div>
            </Link>
          </div>

          <div className="nav-item">
            <Link className="nav-link" to="/about">
              <div>ABOUT</div>
            </Link>
          </div>

          <div className="nav-item">
            <Link className="nav-link" to="/projects">
              <div>PROJECTS</div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
