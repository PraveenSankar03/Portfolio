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

        <div className="project-showcase">
          <div className="project-text">
            <h2>Personal AI Assistant using Local LLM</h2>

            <p>
              A full-stack AI system using a local LLM (Ollama Qwen 4B) with
              persistent memory, chat history, and a privacy-focused offline
              architecture.
            </p>

            <ul>
              <li>
                Developed a full-stack offline AI assistant using Ollama (Qwen
                4B), Django, and React.
              </li>
              <li>
                Designed a ChatGPT-like interface with chat history, sidebar
                navigation, and auto-generated chat titles.{" "}
              </li>
              <li>
                Implemented memory persistence and local storage for
                privacy-focused interactions.
              </li>
              <li>
                Delivered a zero-cost, API-free solution enabling fully offline
                AI usage.
              </li>
            </ul>

            <span className="tech">Ollama • Django • React • CSS3</span>

            <div className="project-buttons">
              <a
                href="https://github.com/PraveenSankar03/local-llm-assistant"
                target="_blank"
                rel="noreferrer"
              >
                <button className="secondary-btn">GitHub</button>
              </a>
            </div>
          </div>

          <div className="project-image">
            <img src="Personal_AI.png" alt="Personal AI" />
          </div>
        </div>

        <div className="project-showcase reverse">
          <div className="project-text">
            <h2>Social MicroBlogging Platform</h2>

            <p>
              A lightweight social platform where users can share thoughts,
              follow others, and interact through a personalized feed.
            </p>

            <ul>
              <li>
                Developed a lightweight social media app that allows users to
                post, share.
              </li>
              <li>
                Implemented user authentication with secure login and signup.
              </li>
              <li>Built functionality to create and delete posts.</li>
              <li>
                Implemented backend logic using Django to manage users, posts.
              </li>
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

        <div className="project-showcase">
          <div className="project-text">
            <h2>Movie Browser Application</h2>

            <p>
              A dynamic movie exploration app powered by real-time API data. to
              browse and view detailed information about movies with a smooth
              and UI.
            </p>

            <ul>
              <li>
                Built a movie browser application using React to explore and
                view movies.
              </li>
              <li> Integrated the TMDB API to fetch real-time movie data.</li>
              <li>Designed a simple, clean, and user-friendly interface.</li>
              <li>
                Implemented component-based architecture for better code
                organization.
              </li>
            </ul>

            <span className="tech">React • JavaScript • HTML5 • CSS3</span>

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

        <div className="project-showcase reverse">
          <div className="project-text">
            <h2>AI Code Explainer</h2>

            <p>
              An AI powerd web application designed to help programmers
              understand unfamiliar code quickly.
            </p>

            <ul>
              <li>
                AI-powered system that explains the code with step-by-step
                outputs.
              </li>
              <li>
                Built REST API backend and Django REST Framework for code
                processing.
              </li>
              <li>
                Built React frontend for real-time code input and explanation
                display.
              </li>
              <li>
                Integrated Gemini API securely using environment variables.
              </li>
            </ul>

            <span className="tech">Django • Python • React • JavaScript</span>

            <div className="project-buttons">
              <a
                href="https://github.com/PraveenSankar03/ai-code-explainer"
                target="_blank"
                rel="noreferrer"
              >
                <button className="secondary-btn">GitHub</button>
              </a>
            </div>
          </div>

          <div className="project-image">
            <img src="Ai_code_explainer.png" alt="AI App" />
          </div>
        </div>

        <div className="project-showcase">
          <div className="project-text">
            <h2>Weather Fetcher Application</h2>

            <p>
              A smart weather app demonstrating chained API calls using
              geolocation and real-time weather data.
            </p>

            <ul>
              <li>
                This project taught me to handle API requests, manage states.
              </li>
              <li>
                User enters a city. The app sends a request to a Geocoding API.
              </li>
              <li>
                That API translates the city name into geographic coordinates.
              </li>
              <li>
                the coordinates are returned. then app uses them to make a
                second request.
              </li>
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
