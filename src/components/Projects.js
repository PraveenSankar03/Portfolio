import { motion } from "framer-motion";
import "./Projects.css";

const Projects = () => {
  return (
    <div>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="hero-text"
        class="topic"
      >
        Projects
      </motion.h1>
      <div class='project-1'>
        <h1 class='project1-title'>Movie Browser Using React.js</h1>
          <img class ='project-img' src='Moviebrowser.jpeg'></img>
        <p class='content'>
          <ul>
                <li>
                  Built a movie browser application using React to explore and
                  view movies.
                </li>
                <li>
                  Integrated the TMDB API to fetch real-time movie data and
                  detailed information.
                </li>
                <li>
                  Displayed movie details such as title, poster, overview,
                  ratings, and release date.
                </li>
                <li>
                  Designed a simple, clean, and user-friendly interface for
                  smooth navigation.
                </li>
                <li>
                  Implemented component-based architecture for better code
                  organization and reusability.
                </li>
                <li>
                  Ensured responsive layout for an optimal viewing experience
                  across devices.
                </li>
              </ul>
              <h5>Tech Stack: React, JavaScript, HTML5.</h5>
        </p>
        <div class='demo-button'>
        <a href="https://movie-browser-using-reactjs.netlify.app/" target='blank'>
          <button class='button'>Live Demo</button>
        </a>
        <a href="https://github.com/PraveenSankar03/Movie-Browser-using-React.js" target='blank'>
          <button class='button'>GitHub</button>
        </a>
      </div>
        <div class='project-2'>
          <h1 class='project2-title'>Social MicroBlogging Platform using Django.</h1>
          <img class ='project-img' src='Opinions.jpeg'></img>
          <p class='content'>
            <ul>
                <li>
                  Developed a lightweight social media application that allows
                  users to post and share text-based thoughts.
                </li>
                <li>
                  Implemented user authentication with secure login and signup
                  using Django Allauth.
                </li>
                <li>
                  Enabled users to follow and unfollow other users to
                  personalize their feed.
                </li>
                <li>
                  Built functionality to create and delete posts, giving users
                  control over their content.
                </li>
                <li>
                  Designed user profile pages to view user information and their
                  posts.
                </li>
                <li>
                  Implemented backend logic using Django to manage users, posts,
                  and relationships.
                </li>
                <li>
                  Focused on a simple and intuitive UI for a smooth user
                  experience.
                </li>
              </ul>
              <h5>Tech Stack: Django, Python, JavaScript.</h5>
          </p>
          <div class='demo-button'>
            <a href="https://github.com/PraveenSankar03/django-social-media" target='blank'>
              <button class='button'>GitHub</button>
            </a>
          </div>
        </div>
      </div>
      <div class='back-button'>
        <a href='/'>
            <button class='button'>Back to Overview</button>
        </a>
      </div>
    </div>
  )
}

export default Projects;