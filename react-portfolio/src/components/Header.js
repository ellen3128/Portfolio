import { Link } from "react-router-dom";
import './Header.css';

export default function Header (props) {

return (
  <header>
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