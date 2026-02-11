import "./Home.css";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div class='grad-bg'>
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
      <div class="container-bio">
        <p class="bio">
          I am a motivated web developer focused on building responsive,
          user-friendly applications and continuously improving my skills.
        </p>
      </div>
      <div class="container-contact">
        <a href="">
          <button class="aboutme">About Me</button>
        </a>
        <a href="">
          <button class="contactme">Contact Me</button>
        </a>
      </div>
      
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="hero-text"
        class="skills-title"
      >
        <div class="contact-section">Contact Me</div>
      </motion.h1>
      <div class="container-contact">
        <div class='contact'>
          <i class="bx bxl-gmail icon-contact"></i>
          <h5>praveensankar3333@gmail.com</h5>
        </div>
        <div class='contact'>
          <i class="bx bxs-phone icon-contact"></i>
          <h5> +91 73582 57338</h5>
        </div>
      </div>
    </div>
  );
};
export default Home;
