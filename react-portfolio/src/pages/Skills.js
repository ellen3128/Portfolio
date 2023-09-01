import "./About.css";
import htmlIcon from "../assets/icons/html.png";
import cssIcon from "../assets/icons/css.png";
import jsIcon from "../assets/icons/js.png";
import reactIcon from "../assets/icons/react.png";
import nodeIcon from "../assets/icons/nodejs.png";
import expressIcon from "../assets/icons/express.png"; 
import mongoIcon from "../assets/icons/mongo.png";
import pythonIcon from "../assets/icons/python.png";
import postgreIcon from "../assets/icons/postgre.png";
import djangoIcon from "../assets/icons/django.png";

export default function Skills() {
  return (
    <div className="grid-container">
    <div className="grid-item">
        <img src={htmlIcon} alt="HTML" />
        <span className="grid-text">HTML</span>
    </div>

    <div className="grid-item">
        <img src={cssIcon} alt="CSS" />
        <span className="grid-text">CSS</span>
      </div>

      <div className="grid-item">
        <img src={jsIcon} alt="JS" />
        <span className="grid-text">JavaScript</span>
      </div>

      <div className="grid-item">
        <img src={reactIcon} alt="React" />
        <span className="grid-text">React</span>
      </div>

      <div className="grid-item">
        <img src={expressIcon} alt="Express" />
        <span className="grid-text">Express</span>
      </div>

      <div className="grid-item">
        <img src={nodeIcon} alt="Node" />
        <span className="grid-text">NodeJS</span>
      </div>

      <div className="grid-item">
        <img src={mongoIcon} alt="Mongo" />
        <span className="grid-text">Mongo</span>
      </div>

      <div className="grid-item">
        <img src={pythonIcon} alt="Python" />
        <span className="grid-text">Python</span>
      </div>

      <div className="grid-item">
        <img src={postgreIcon} alt="Postgre" />
        <span className="grid-text">Postgre</span>
      </div>

      <div className="grid-item">
        <img src={djangoIcon} alt="Django" />
        <span className="grid-text">Django</span>
      </div>

    </div>
  )
}
