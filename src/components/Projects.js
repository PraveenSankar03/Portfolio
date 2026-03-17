import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./style.css";

const Projects = () => {
  return (
    <div className="projects-wrapper">
      <div className="container">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="projects-title"
        >
          Projects
        </motion.h1>

        {/* PROJECT 1 */}
        <div className="project-showcase">
          <div className="project-text">
            <h2>Movie Browser</h2>

            <p>
              A dynamic movie exploration app powered by real-time API data.
              Users can browse, search, and view detailed information about
              movies with a smooth and responsive UI.
            </p>

            <ul>
              <li>TMDB API integration</li>
              <li>Real-time movie data</li>
              <li>Clean UI & responsive design</li>
              <li>Component-based architecture</li>
            </ul>

            <span className="tech">React • JavaScript • HTML5</span>

            <div className="project-buttons">
              <a
                href="https://movie-browser-using-react-js.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <button className="primary-btn">Live Demo</button>
              </a>
              <a
                href="https://github.com/PraveenSankar03/Movie-Browser-using-React.js"
                target="_blank"
                rel="noreferrer"
              >
                <button className="secondary-btn">GitHub</button>
              </a>
            </div>
          </div>

          <div className="project-image">
            <img src="Moviebrowser.jpeg" alt="Movie Browser" />
          </div>
        </div>

        {/* PROJECT 2 (REVERSED) */}
        <div className="project-showcase reverse">
          <div className="project-text">
            <h2>Social MicroBlogging Platform</h2>

            <p>
              A lightweight social platform where users can share thoughts,
              follow others, and interact through a personalized feed.
            </p>

            <ul>
              <li>User authentication with Django</li>
              <li>Follow / unfollow system</li>
              <li>Post creation & deletion</li>
              <li>Profile-based content system</li>
            </ul>

            <span className="tech">Django • Python • JavaScript</span>

            <div className="project-buttons">
              <a
                href="https://github.com/PraveenSankar03/django-social-media"
                target="_blank"
                rel="noreferrer"
              >
                <button className="secondary-btn">GitHub</button>
              </a>
            </div>
          </div>

          <div className="project-image">
            <img src="Opinions.jpeg" alt="Social App" />
          </div>
        </div>

        {/* PROJECT 3 */}
        <div className="project-showcase">
          <div className="project-text">
            <h2>Weather Fetcher</h2>

            <p>
              A smart weather app demonstrating chained API calls using
              geolocation and real-time weather data.
            </p>

            <ul>
              <li>Geocoding → coordinates</li>
              <li>Open-Meteo API integration</li>
              <li>Async data flow handling</li>
              <li>Clean React state management</li>
            </ul>

            <span className="tech">React • JavaScript • CSS3</span>

            <div className="project-buttons">
              <a
                href="https://weather-fetcher-using-react.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <button className="primary-btn">Live Demo</button>
              </a>
              <a
                href="https://github.com/PraveenSankar03/weather-fetcher-using-react"
                target="_blank"
                rel="noreferrer"
              >
                <button className="secondary-btn">GitHub</button>
              </a>
            </div>
          </div>

          <div className="project-image">
            <img src="weather_fetcher.png" alt="Weather App" />
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

export default Projects;
