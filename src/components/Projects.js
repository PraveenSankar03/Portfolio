import { motion} from "framer-motion";

const Projects = () => {
    return (
        <div>
             <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="hero-text"
        class="project-title"
      >
        <div class="project-section">Projects</div>
      </motion.h1>
      <div class="container-project">
        <div class="project-intro">
          Some of the projects I've built to practice and improve my development
          skills.
        </div>
        <div class="card mb-3 pro-card project-cards">
          <h3 class="card-title">Movie Browser using React.js</h3>
          <img src="Moviebrowser.jpeg" class="card-img-top" alt="img"></img>
          <div class="card-body">
            <h5>Description</h5>
            <p class="card-text">
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
              <p>Tech Stack: React, JavaScript, HTML, CSS.</p>
              <a href="https://movie-browser-using-reactjs.netlify.app/">
                <button class="demo"> Live Demo </button>
              </a>
            </p>
          </div>
        </div>
        <div class="card mb-3 pro-card project-cards">
          <h3 class="card-title">
            Opinions - Social Microblogging Platform using Django.
          </h3>
          <img src="Opinions.jpeg" class="card-img-top" alt="img"></img>
          <div class="card-body">
            <h5>Description</h5>
            <p class="card-text">
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
              <p>Tech Stack: Django, Python, JavaScript, HTML.</p>
              <p>
                <small>Live demo not deployed. Source code Available.</small>
              </p>
            </p>
          </div>
        </div>
      </div>
        </div>
    )
}

export default Projects;