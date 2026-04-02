import "./style.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";

const Home = () => {
  return (
    <div className="home-wrapper">
      <div className="hero container text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="hero-title"
        >
          Hi, I'm <span className="name">Praveen Kumar</span>
        </motion.h1>

        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Full Stack Developer
        </motion.p>

        <motion.p
          className="hero-description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          I build responsive, scalable web applications using
          <strong> React</strong> and <strong> Django</strong> with clean,
          modern UI and performance in mind.
        </motion.p>

        <motion.p
          className="tech-stack"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          Python • Django • JavaScript • React • AI • LLM • Git • GitHub
        </motion.p>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <Link to="/projects">
            <button className="primary-btn">View Projects</button>
          </Link>

          <a href="/Praveen's_Resume.pdf" target="_blank" rel="noreferrer">
            <button className="secondary-btn">View Resume</button>
          </a>
        </motion.div>

        <motion.div
          className="social-links"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
        >
          <a
            href="https://github.com/PraveenSankar03"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a href="mailto:praveensankar3333@gmail.com">
            <FaEnvelope />
          </a>

          <a
            href="https://www.linkedin.com/in/praveen-kumar-40109b366/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
