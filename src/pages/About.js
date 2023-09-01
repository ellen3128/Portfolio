import { useState, useEffect } from "react";
import "./About.css";
import transition from "../transition";
import linkedinIcon from "../assets/icons/linkedin.png";
import githubIcon from "../assets/icons/github.png";
import Skills from "./Skills"

function About(props) {
  const [about, setAbout] = useState(null);

  // create function to make api call
  const getAboutData = async () => {
    // make api call and get response
    const response = await fetch("./about.json");

    // turn response into javascript object
    const data = await response.json();

    // set the about state to the data
    setAbout(data);
  };

  // make an initial call for the data inside a useEffect, so it only happens once on component load
  useEffect(() => {
    getAboutData();

    // window.scrollTo({
    //   top: elementRef.current.offsetTop,
    //   behavior: 'smooth'
    // });

    return () => {};
  }, []);

  // define a function that will return the JSX needed once we get the data
  const loaded = () => (
    <div className="parent-container">
      <div className="content-wrapper">
        <img className="headshot" src={about.headshot} alt="" />
        <div className="about-container">
          <h2 className="name">{about.name}</h2>
          <h3 className="email">{about.email}</h3>
          <p className="bio">{about.bio}</p>
        </div>
      </div>
      <br></br><br></br>
      <div class="text-center"><Skills /></div>
      <br></br><br></br><br></br>
      <section className="contact">
        <a href="https://www.linkedin.com/in/hyunellenpark1/">
          <img
            style={{ width: "60px", height: "60px", margin: "10px" }}
            src={linkedinIcon}
            alt="LinkedIn Icon"
          />
        </a>
        <a href="https://github.com/ellen3128">
          <img
            style={{ width: "55px", height: "55px", margin: "10px" }}
            src={githubIcon}
            alt="Github Icon"
          />
        </a>
      </section>
    </div>
  );

  // if data arrives return the result of loaded, if not, an h1 that says loading
  return about ? loaded() : <h1>Loading...</h1>;
}

// export default About;
export default transition(About);
