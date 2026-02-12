import { motion } from "framer-motion";
import skills from "../data/skills.jsx";
import "./Skills.css";

const Skills = () => {
  return (
    <div>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="hero-text"
        class="topic"
      >
        Skills
      </motion.h1>
      <div class="skill-container">
        <div>
          <h1 class="skill-topic">Frontend</h1>
          <div class="skill-flex">
            <div class='skill-card'>
              <img src='react.png' class='skill-img'></img>
              <h4 class='skill-name'>React</h4>
            </div>
            <div class='skill-card'>
              <img src='javascript.png' class='skill-img'></img>
              <h4 class='skill-name'>JavaScript</h4>
            </div>
            <div class='skill-card'>
              <img src='html.png' class='skill-img'></img>
              <h4 class='skill-name'>HTML5</h4>
            </div>
            <div class='skill-card'>
              <img src='css.png' class='skill-img-css'></img>
              <h4 class='skill-name'>CSS3</h4>
            </div>
          </div>
        </div>
        <div class="backend">
          <h1 class="skill-topic">Backend</h1>
          <div class="skill-flex">
            <div class='skill-card'>
              <img src='django.png' class='skill-img'></img>
              <h4 class='skill-name'>Django</h4>
            </div>
            <div class='skill-card'>
              <img src='python.jpg' class='skill-img'></img>
              <h4 class='skill-name'>Python</h4>
            </div>
          </div>
        </div>
        <div class="tools">
          <h1 class="skill-topic">Tools</h1>
          <div class="skill-flex">
            <div class='skill-card'>
              <img src='git.png' class='skill-img'></img>
              <h4 class='skill-name'>Git</h4>
            </div>
            <div class='skill-card'>
              <img src='github.png' class='skill-img'></img>
              <h4 class='skill-name'>GitHub</h4>
            </div>
            <div class='skill-card'>
              <img src='vscode.jpg' class='skill-img'></img>
              <h4 class='skill-name'>VS Code</h4>
            </div>
          </div>
        </div>
      </div>
      <div class='back-button'>
        <a href='/'>
            <button class='button'>Back to Overview</button>
        </a>
      </div>
    </div>
  );
};

export default Skills;
