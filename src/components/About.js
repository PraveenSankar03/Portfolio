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
              I’m a Full Stack Developer with a background in Biomedical
              Engineering, bringing a strong foundation in analytical thinking
              and problem-solving into software development. I build scalable
              web applications using React and Django, with hands-on experience
              in REST API development, authentication systems, and clean
              architecture.
            </p>
            <p>
              {" "}
              I focus on creating responsive, high-performance user interfaces
              and writing maintainable, production-ready code. Currently, I’m
              seeking an entry-level opportunity where I can contribute to
              real-world projects while continuing to grow in modern web
              technologies.
            </p>
          </div>

          <div className="about-card full">
            <h2>Transition</h2>
            <p>
              My journey into software development began during my studies in
              Biomedical Engineering, where I was first introduced to
              programming while working on analytical and technical projects.
              What started as a supporting skill quickly became a core interest
              as I realized the power of software in solving complex, real-world
              problems.
            </p>

            <p>
              I began exploring development beyond academics, dedicating time to
              building projects and understanding how modern web applications
              are designed and scaled. This led me to work extensively with
              technologies like React and Django, where I developed full-stack
              applications, designed REST APIs, and implemented secure
              authentication systems.
            </p>

            <p>
              Transitioning into software development was a deliberate and
              focused decision. I approached it with the same engineering
              mindset—breaking down problems, building structured solutions, and
              continuously improving through hands-on experience. Today, I bring
              both my analytical background and development skills together to
              build efficient, scalable, and user-focused applications.
            </p>
            <p>
              This transition wasn’t accidental—it was intentional. I committed
              to mastering full-stack development by consistently building
              real-world projects and refining my skills. By combining my
              engineering background with modern web technologies, I’ve
              developed a problem-solving approach that prioritizes performance,
              scalability, and clean architecture.
            </p>
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
