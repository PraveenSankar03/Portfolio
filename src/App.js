import "./App.css";
import Navbar from "./components/Navbar .js";
import Home from "./components/Home.js";
import Projects from "./components/Projects.js";
import Skills from "./components/Skills.js";
import AboutView from "./components/About.js";
import NotFound from "./components/NotFound.js";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <h1>hello</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/skills' element={<Skills />} />
        <Route path="/about" element={<AboutView />} />
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </div>
  );
}

export default App;
