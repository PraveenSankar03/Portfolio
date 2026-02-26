import './About.css';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

const AboutView = () => {
  return(
    <div>
      <motion.h1
       initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="hero-text topic"
      >
        About Me
      </motion.h1>
      <div className='basic'>
        <h1 className='basic-topic'>Basic Information</h1>
        <p className='content'>
          Name: Praveen Kumar S<br></br>
          Location: Chennai, Tamil Nadu.<br></br>
          Degree: B.Tech Biomedical Engineering.<br></br>
          Role: Full Stack Developer (React + Django).
        </p>
      </div>

      <div className="summary">
        <h1 className="basic-topic">Summary</h1>
        <p className="content">
          I am a Full Stack Developer with a B.Tech in Biomedical Engineering,
          combining strong analytical problem-solving skills with practical
          software development experience.
          I have hands-on experience building full-stack applications using React and Django,
          developing RESTful APIs, implementing authentication systems. I focus on
          writing clean, maintainable code and building responsive user
          interfaces that deliver smooth user experiences. I am actively seeking
          an entry-level developer role where I can contribute to real-world
          projects, collaborate with experienced teams, and continue
          strengthening my technical expertise in modern web technologies.
        </p>
      </div>
      
      <div className='education'>
        <h1 className='basic-topic'>Education</h1>
        <h4 className='education-clg'>B.Tech Biomedical Engineering.</h4>
        <div className='content'>
          <p>Dr. M.G.R. Educational and Research Institute. Chennai, Tamil Nadu.</p>
          <p>2021-2025 | CGPA: 8.4</p>
        </div>
      </div>

      <div className='transition'>
        <h1 className='basic-topic'>Transition ?</h1>
        <p className='content'>
          <ul>
            <li>
              During my undergraduate studies in Biomedical Engineering, I developed a strong interest in programming and system design.
            </li>
            <li>
              Working on technical projects exposed me to software development, which led me to pursue full-stack development more seriously.
            </li>
            <li>
               Built full-stack applications using React and Django. Developed REST APIs, implemented authentication systems, and worked with databases.
            </li>
          </ul>
            
        </p>
      </div>

      <div className='back-button'>
        <Link to='/'>
            <button className='button'>Back to Overview</button>
        </Link>
      </div>
    </div>
  )
}

export default AboutView;