import { motion } from "framer-motion";

const Skills = () => {
  return (
    <>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="hero-text"
        class="skills-title"
      >
        <div class="skill-section">Skills</div>
      </motion.h1>
      <div class="container-skills">
        <div class="skill-pic">
          <img src="html.png"></img>
          <span>HTML</span>
        </div>
        <div class="skill-pic">
          <img src="css.png"></img>
          <span>CSS</span>
        </div>
        <div class="skill-pic">
          <img src="javascript.png"></img>
          <span>JavaScript</span>
        </div>
        <div class="skill-pic">
          <img src="jquery.png"></img>
          <span>jQuery</span>
        </div>
        <div class="skill-pic">
          <img src="react.png"></img>
          <span>React</span>
        </div>
        <div class="skill-pic">
          <img src="python.jpg"></img>
          <span>Python</span>
        </div>
        <div class="skill-pic">
          <img src="github.png"></img>
          <span>GitHub</span>
        </div>
        <div class="skill-pic">
          <img src="git.png"></img>
          <span>Git</span>
        </div>
        <div class="skill-pic">
          <img src="django.png"></img>
          <span>Django</span>
        </div>
      </div>
    </>
  );
};

export default Skills;