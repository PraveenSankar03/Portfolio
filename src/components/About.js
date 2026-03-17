import "./style.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const AboutView = () => {
  return (
    <div className="about-wrapper">
      <div className="container about-container">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="about-title"
        >
          About Me
        </motion.h1>

        <div className="about-grid">
          <div className="about-card">
            <h2>Basic Information</h2>
            <p>
              <strong>Name:</strong> Praveen Kumar S<br />
              <strong>Location:</strong> Chennai, Tamil Nadu
              <br />
              <strong>Degree:</strong> B.Tech Biomedical Engineering
              <br />
              <strong>Role:</strong> Full Stack Developer (React + Django)
            </p>
          </div>

          <div className="about-card">
            <h2>Education</h2>
            <h4 className="education-clg">B.Tech Biomedical Engineering</h4>
            <p>
              Dr. M.G.R. Educational and Research Institute
              <br />
              2021 – 2025 | CGPA: 8.4
            </p>
          </div>

          <div className="about-card full">
            <h2>Summary</h2>
            <p>
              I am a Full Stack Developer with a background in Biomedical
              Engineering, combining analytical problem-solving with practical
              development experience. I have built full-stack applications using
              React and Django, developed REST APIs, implemented authentication
              systems, and focused on writing clean, maintainable code. I aim to
              create responsive, high-performance user interfaces and am seeking
              an entry-level role to grow in modern web technologies.
            </p>
          </div>

          <div className="about-card full">
            <h2>Transition</h2>
            <ul>
              <li>
                Developed a strong interest in programming during biomedical
                studies.
              </li>
              <li>
                Exposure to technical projects led me into software development.
              </li>
              <li>
                Built full-stack apps with React & Django, including APIs and
                auth systems.
              </li>
            </ul>
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

export default AboutView;
