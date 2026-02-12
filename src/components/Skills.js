import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./Skills.css";

const Skills = () => {
  return (
    <div>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="hero-text topic"
      >
        Skills
      </motion.h1>
      <div className="skill-container">
        <div>
          <h1 className="skill-topic">Frontend</h1>
          <div className="skill-flex">
            <div className='skill-card'>
              <img src='react.png' alt='react.png' className='skill-img'></img>
              <h4 className='skill-name'>React</h4>
            </div>
            <div className='skill-card'>
              <img src='javascript.png' alt='javascript.png' className='skill-img'></img>
              <h4 className='skill-name'>JavaScript</h4>
            </div>
            <div className='skill-card'>
              <img src='html.png' alt='html.png' className='skill-img'></img>
              <h4 className='skill-name'>HTML5</h4>
            </div>
            <div className='skill-card'>
              <img src='css.png' alt='css.png' className='skill-img-css'></img>
              <h4 className='skill-name'>CSS3</h4>
            </div>
          </div>
        </div>
        <div className="backend">
          <h1 className="skill-topic">Backend</h1>
          <div className="skill-flex">
            <div className='skill-card'>
              <img src='django.png' alt='django.png' className='skill-img'></img>
              <h4 className='skill-name'>Django</h4>
            </div>
            <div className='skill-card'>
              <img src='python.jpg' alt='pyhton.jpg' className='skill-img'></img>
              <h4 className='skill-name'>Python</h4>
            </div>
          </div>
        </div>
        <div className="tools">
          <h1 className="skill-topic">Tools</h1>
          <div className="skill-flex">
            <div className='skill-card'>
              <img src='git.png' alt='git.png' className='skill-img'></img>
              <h4 className='skill-name'>Git</h4>
            </div>
            <div className='skill-card'>
              <img src='github.png' alt='github.png' className='skill-img'></img>
              <h4 className='skill-name'>GitHub</h4>
            </div>
            <div className='skill-card'>
              <img src='vscode.jpg' alt='vscode.jpg' className='skill-img'></img>
              <h4 className='skill-name'>VS Code</h4>
            </div>
          </div>
        </div>
      </div>
      <div className='back-button'>
        <Link to='/'>
            <button className='button'>Back to Overview</button>
        </Link>
      </div>
    </div>
  );
};

export default Skills;
