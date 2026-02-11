import { motion } from "framer-motion";

const Contact = () => {
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
        <div class="contact-section">Contact Me</div>
      </motion.h1>
      <div class="container-contact">
        <div class="contact">
          <i class="bx bxl-gmail icon-contact"></i>
          <h5>praveensankar3333@gmail.com</h5>
        </div>
        <div class="contact">
          <i class="bx bxs-phone icon-contact"></i>
          <h5> +91 73582 57338</h5>
        </div>
      </div>
    </>
  );
};

export default Contact;
