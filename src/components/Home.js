import "./Home.css";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div>
      <header className="p-4 hero-container">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-text"
          class="topic"
        >
          Hi, I'm Praveen Kumar
        </motion.h1>
      </header>
      <div class="container">
        <p class="bio">
          I am a motivated web developer focused on building responsive,
          user-friendly applications and continuously improving my skills.
        </p>
      </div>
      <div class="container2">
        <div class='project'>
          Projects
        </div>
        <div class='skills'>
          Contact Me
        </div>
      </div>
    </div>
  );
};
export default Home;