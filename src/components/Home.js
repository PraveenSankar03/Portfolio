import "./Home.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaGithub, FaEnvelope } from "react-icons/fa";

const Home = () => {
  return (
    <div className="grad-bg">
      <header className="p-4 hero-container">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-text name-topic"
        >
          Hi, I'm Praveen Kumar.
        </motion.h1>
        <div className="sub-hero">Fullstack Developer</div>
      </header>
      <div className="container-bio">
        <p className="bio">
          A Fullstack Developer specializing in React and Django. I build
          responsive, scalable web applications with clean UI.
        </p>
      </div>
      <div className="techstack">
        <p>React • JavaScript • Django • Python • Git • GitHub</p>
      </div>
      <div className="container-overview">
        <Link to="/projects">
          <button className="project-view">View Projects</button>
        </Link>
        <Link to="/PRAVEEN_RESUME.pdf" target="blank">
          <button className="resume-view">View Resume</button>
        </Link>
      </div>
      <div className="social-icons">
          <Link to="https://github.com/PraveenSankar03"
          target='blank'>
            <FaGithub />
          </Link>
          <Link to="mailto:praveensankar3333@gmail.com">
            <FaEnvelope />
          </Link>
        </div>
    </div>
  );
};
export default Home;
