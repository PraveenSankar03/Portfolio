import "./Home.css";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div class="grad-bg">
      <header className="p-4 hero-container">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-text"
          class="topic"
        >
          Hi, I'm Praveen Kumar.
        </motion.h1>
        <div class='sub-hero'>
          Frontend Developer / Backend Developer
        </div>
      </header>
      <div class="container-bio">
        <p class="bio">
          A Fullstack Developer specializing in React and Django. I
          build responsive, scalable web applications with clean UI. Focused on
          building user-friendly applications and continuously
          improving my skills.
        </p>
      </div>
      <div class="container-contact">
        <a href="/projects">
          <button class="aboutme">View Projects</button>
        </a>
        <a href="/PRAVEEN_RESUME.pdf"
            target='blank'>
          <button class="contactme">View Resume</button>
        </a>
      </div>
    </div>
  );
};
export default Home;
