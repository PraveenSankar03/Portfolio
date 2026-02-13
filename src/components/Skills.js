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
        Technologies I work with,
      </motion.h1>
      <div className="skill-container">
        <div className="frontend">
          <h1 className="skill-topic">Frontend</h1>
          <div className="skill-flex">
            <div className='skill-card'>
              <img src='react.png' alt='react.png' className='skill-img'/>
              <h4 className='skill-name'>React</h4>
              <ul>
                <li>Hooks (UseState, UseEffect)</li>
                <li>Functional Components</li>
                <li>Props and State</li>
                <li>API integration</li>
              </ul>
            </div>
            <div className='skill-card'>
              <img src='javascript.png' alt='javascript.png' className='skill-img'/>
              <h4 className='skill-name'>JavaScript</h4>
              <ul>
                <li>ES6+</li>
                <li>DOM manipulation</li>
                <li>Closures</li>
                <li>Ajaxing</li>
              </ul>
            </div>
            <div className='skill-card'>
              <img src='jquery.png' alt='jquery.png' className='skill-img'/>
              <h4 className='skill-name'>jquery</h4>
              <ul>
                <li>DOM Manipulation</li>
                <li>Event Handling</li>
                <li>Animations & Effects</li>
                <li>Form Validation</li>
              </ul>
            </div>
            <div className='skill-card'>
              <img src='html.png' alt='html.png' className='skill-img'/>
              <h4 className='skill-name'>HTML5</h4>
              <ul>
                <li>Forms & Input Types</li>
                <li>Semantic Markup</li>
                <li>Multimedia Integration</li>
              </ul>
            </div>
            <div className='skill-card'>
              <img src='css.png' alt='css.png' className='skill-img-css'/>
              <h4 className='skill-name'>CSS3</h4>
              <ul>
                <li>Responsive Design</li>
                <li>Media Queries</li>
                <li>Flexbox</li>
                <li>Grid</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="backend">
          <h1 className="skill-topic">Backend</h1>
          <div className="skill-flex">
            <div className='skill-card'>
              <img src='django.png' alt='django.png' className='skill-img'/>
              <h4 className='skill-name'>Django</h4>
              <ul>
                <li>MTV Architecture</li>
                <li>Authentication System</li>
                <li>Admin Panel</li>
                <li>URL Routing</li>
              </ul>
            </div>
            <div className='skill-card'>
              <img src='python.jpg' alt='pyhton.jpg' className='skill-img'/>
              <h4 className='skill-name'>Python</h4>
              <ul>
                <li>Object-Oriented Programming</li>
                <li>Data Structures</li>
                <li>File Handling</li>
                <li>Virtual Environments (venv)</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="tools">
          <h1 className="skill-topic">Tools</h1>
          <div className="skill-flex">
            <div className='skill-card'>
              <img src='git.png' alt='git.png' className='skill-img'/>
              <h4 className='skill-name'>Git</h4>
              <ul>
                <li>Version Control</li>
                <li>Branching & Merging</li>
                <li>Pull Requests</li>
              </ul>
            </div>
            <div className='skill-card'>
              <img src='github.png' alt='github.png' className='skill-img'/>
              <h4 className='skill-name'>GitHub</h4>
              <ul>
                <li>Repository Management</li>
                <li>README Documentation</li>
                <li>Issue Tracking</li>
              </ul>
            </div>
            <div className='skill-card'>
              <img src='vscode.jpg' alt='vscode.jpg' className='skill-img'/>
              <h4 className='skill-name'>VS Code</h4>
              <ul>
                <li>Extensions & Debugging</li>
                <li>Git Integration</li>
                <li>Code Formatting</li>
                <li>Integrated Terminal</li>
              </ul>
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
