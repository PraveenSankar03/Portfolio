import "./App.css";
import Navbar from "./components/Navbar .js";
import Home from "./components/Home.js";
import Projects from "./components/Projects.js";
import Skills from "./components/Skills.js";
import Contact from "./components/ContactMe.js";
import AboutView from "./components/About.js";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/contact' element={<Contact />} />
        <Route path="/about" element={<AboutView />} />
      </Routes>
    </div>
  );
}

export default App;
