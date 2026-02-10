import './App.css';
import Navbar from "./components/Navbar .js";
import AboutView from './components/About.js';
import {Routes, Route} from "react-router-dom"

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
      <Route path="/about" element={<AboutView />} />
      </Routes>
    </div>
  );
}

export default App;
