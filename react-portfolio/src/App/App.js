import './App.css';
import { AnimatePresence } from "framer-motion"

// import components
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Route, Routes } from "react-router-dom";

// import pages
import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";

function App() {
  // URL should have YOUR HEROKU URL for your backend (will build later), make sure you include the trailing slash
  const URL = "http://localhost:4000/";

  return (
    <div className="App">
      <AnimatePresence mode="wait">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/projects" element={<Projects URL={URL} />} />
        <Route path="/about" element={<About URL={URL} />} />
      </Routes>
      <Footer />
      </AnimatePresence>
    </div>
  );
}

export default App;
