import { motion } from "framer-motion";
import { Link } from "react-router-dom";
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
        className="hero-text topic"
      >
        Projects
      </motion.h1>
      <div className='project-1'>
        <h1 className='project1-title'>Movie Browser Using React.js</h1>
          <img class ='project-img' src='Moviebrowser.jpeg' alt='Moviebrowser.jpeg'/>
        <p className='content'>
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
        <div className='demo-button'>
        <Link to="https://movie-browser-using-react-js.vercel.app/" target='blank'>
          <button className='button'>Live Demo</button>
        </Link>
        <Link to="https://github.com/PraveenSankar03/Movie-Browser-using-React.js" target='blank'>
          <button className='button'>GitHub</button>
        </Link>
      </div>
        <div className='project-2'>
          <h1 className='project2-title'>Social MicroBlogging Platform using Django.</h1>
          <img class ='project-img' src='Opinions.jpeg' alt='Opinions.jpeg'/>
          <p className='content'>
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
          <div className='demo-button'>
            <Link to="https://github.com/PraveenSankar03/django-social-media" target='blank'>
              <button className='button'>GitHub</button>
            </Link>
          </div>
        </div>
      </div>
      <div className='back-button'>
        <Link to='/'>
            <button className='button'>Back to Overview</button>
        </Link>
      </div>
    </div>
  )
}

export default Projects;