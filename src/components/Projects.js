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
          Projects I Built
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
                navigation, and auto-generated chat titles.
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

            <div className="project-insights">
              <div>
                <h3>Challenges:</h3>
                <ul>
                  <li>Managing local LLM performance and response latency</li>
                  <li>Designing persistent memory without cloud storage</li>
                  <li>Handling state across chats cleanly</li>
                </ul>
              </div>
              <div>
                <h3>What I Learned:</h3>
                <ul>
                  <li>How local LLM pipelines work (Ollama)</li>
                  <li>State management in full-stack apps</li>
                  <li>Designing privacy-first architectures</li>
                </ul>
              </div>
            </div>

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
            <img src="Personal_AI_2.png" alt="Personal AI" />
            <img src="Personal_AI.png" alt="Personal AI extra" />
          </div>
        </div>

        <div className="project-showcase reverse">
          <div className="project-text">
            <h2>AI Code Explainer and Debugger</h2>
            <p>
              An AI code analyser designed to help programmers
              understand and debug unfamiliar code quickly.
            </p>
            <ul>
              <li>
                AI-powered system that both explains and debugs the code with step-by-step
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

            <div className="project-insights">
              <div>
                <h3>Challenges:</h3>
                <ul>
                  <li>Handling code inputs efficiently</li>
                  <li>Designing meaningful AI prompts</li>
                  <li>Securing API keys and requests</li>
                </ul>
              </div>
              <div>
                <h3>What I Learned:</h3>
                <ul>
                  <li>Prompt engineering</li>
                  <li>Building REST APIs with Django</li>
                  <li>Frontend-backend communication</li>
                </ul>
              </div>
            </div>

            <span className="tech">Django • Python • React • JavaScript</span>

            <div className="project-buttons">
              <a
                href="https://github.com/PraveenSankar03/AI-code-explainer-debugger"
                target="_blank"
                rel="noreferrer"
              >
                <button className="secondary-btn">GitHub</button>
              </a>
            </div>
          </div>

          <div className="project-image">
            <img src="AI_explainer_1.png" alt="AI App" />
            <img src="AI_explainer_2.png" alt="AI extra" />
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
              <li>Integrated the TMDB API to fetch real-time movie data.</li>
              <li>Designed a simple, clean, and user-friendly interface.</li>
              <li>
                Implemented component-based architecture for better code
                organization.
              </li>
            </ul>

            <div className="project-insights">
              <div>
                <h3>Challenges:</h3>
                <ul>
                  <li>Handling asynchronous API calls</li>
                  <li>Managing loading and error states</li>
                  <li>Structuring reusable components</li>
                </ul>
              </div>
              <div>
                <h3>What I Learned:</h3>
                <ul>
                  <li>API integration in React</li>
                  <li>Component reusability and structure</li>
                  <li>State and lifecycle handling</li>
                </ul>
              </div>
            </div>

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
            <img src="movie_browser_2.png" alt="Movie extra" />
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

            <div className="project-insights">
              <div>
                <h3>Challenges:</h3>
                <ul>
                  <li>Managing user authentication securely</li>
                  <li>Designing relational database models</li>
                  <li>Handling dynamic feed updates</li>
                </ul>
              </div>
              <div>
                <h3>What I Learned:</h3>
                <ul>
                  <li>Django authentication system</li>
                  <li>CRUD operations in full-stack apps</li>
                  <li>Database relationships and models</li>
                </ul>
              </div>
            </div>

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
            <img src="Opinions_2.png" alt="Social App extra" />
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

            <div className="project-insights">
              <div>
                <h3>Challenges:</h3>
                <ul>
                  <li>Managing multiple dependent API calls</li>
                  <li>Handling edge cases like invalid cities</li>
                  <li>Ensuring smooth UI updates</li>
                </ul>
              </div>
              <div>
                <h3>What I Learned:</h3>
                <ul>
                  <li>Chaining API requests</li>
                  <li>Error handling in async operations</li>
                  <li>Improving user experience with loading states</li>
                </ul>
              </div>
            </div>

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
            <img src="weather_2.png" alt="Weather extra" />
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