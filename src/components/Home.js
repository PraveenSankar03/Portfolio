import "./Home.css";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Home = () => {
  return (
    <div class="grad-bg">
      <header className="p-4 hero-container">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-text"
          class="name-topic"
        >
          Hi, I'm Praveen Kumar.
        </motion.h1>
        <div class="sub-hero">Fullstack Developer</div>
      </header>
      <div class="container-bio">
        <p class="bio">
          A Fullstack Developer specializing in React and Django. I build
          responsive, scalable web applications with clean UI.
        </p>
      </div>
      <div class="techstack">
        <p>React • JavaScript • Django • Python • Git • GitHub</p>
      </div>
      <div class="container-overview">
        <a href="/projects">
          <button class="project-view">View Projects</button>
        </a>
        <a href="/PRAVEEN_RESUME.pdf" target="blank">
          <button class="resume-view">View Resume</button>
        </a>
      </div>
      <div class="social-icons">
          <a href="https://github.com/PraveenSankar03"
          target='blank'>
            <FaGithub />
          </a>
          <a href="mailto:praveensankar3333@gmail.com">
            <FaEnvelope />
          </a>
        </div>
    </div>
  );
};
export default Home;
