import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./style.css";

const Skills = () => {
  return (
    <div className="skills-wrapper">
      <div className="container">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="skills-title"
        >
          Technologies I Work With
        </motion.h1>

        {/* FRONTEND */}
        <div className="skills-section">
          <h2>Frontend</h2>
          <div className="skills-grid">
            <div className="skill-item">
              <img src="react.png" alt="React" />
              <span>React</span>
            </div>

            <div className="skill-item">
              <img src="javascript.png" alt="JavaScript" />
              <span>JavaScript</span>
            </div>

            <div className="skill-item">
              <img src="jquery.png" alt="jQuery" />
              <span>jQuery</span>
            </div>

            <div className="skill-item">
              <img src="html.png" alt="HTML5" />
              <span>HTML5</span>
            </div>

            <div className="skill-item">
              <img src="css.png" alt="CSS3" />
              <span>CSS3</span>
            </div>

            <div className="skill-item">
              <img src="bootstrap.png" alt="Bootstrap" />
              <span>Bootstrap</span>
            </div>
          </div>
        </div>

        {/* BACKEND */}
        <div className="skills-section">
          <h2>Backend</h2>
          <div className="skills-grid">
            <div className="skill-item">
              <img src="django.png" alt="Django" />
              <span>Django</span>
            </div>

            <div className="skill-item">
              <img src="python.jpg" alt="Python" />
              <span>Python</span>
            </div>
          </div>
        </div>

        {/* CMS */}
        <div className="skills-section">
          <h2>CMS</h2>
          <div className="skills-grid">
            <div className="skill-item">
              <img src="wagtail.png" alt="Wagtail" />
              <span>Wagtail</span>
            </div>
          </div>
        </div>

        {/* TOOLS */}
        <div className="skills-section">
          <h2>Tools</h2>
          <div className="skills-grid">
            <div className="skill-item">
              <img src="git.png" alt="Git" />
              <span>Git</span>
            </div>

            <div className="skill-item">
              <img src="github.png" alt="GitHub" />
              <span>GitHub</span>
            </div>

            <div className="skill-item">
              <img src="vscode.jpg" alt="VS Code" />
              <span>VS Code</span>
            </div>
          </div>
        </div>

        <div className="back-button">
          <Link to="/">
            <button className="primary-btn">Back to Overview</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Skills;
