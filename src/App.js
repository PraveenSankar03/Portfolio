import { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";
import "./App.css";

const NAV_ITEMS = ["Home", "About", "Skills", "Projects"];

const PROJECTS = [
  {
    id: 1,
    label: "AI · LOCAL LLM",
    title: "Personal AI Assistant using Local LLM",
    subtitle: "Fully offline. Zero cost. Complete privacy.",
    desc: "Full-stack AI system using Ollama Qwen 4B with persistent memory, chat history, and privacy-first offline architecture.",
    tech: ["Ollama", "Django", "React", "CSS3"],
    github: "https://github.com/PraveenSankar03/local-llm-assistant",
    accent: "#007AFF",
    num: "01",
    img: "Personal_AI.png",
    challenges: [
      "Local LLM latency",
      "Persistent memory without cloud",
      "Clean state across chats",
    ],
    learned: [
      "Local LLM pipelines",
      "Full-stack state management",
      "Privacy-first architecture",
    ],
  },
  {
    id: 2,
    label: "AI · DEVELOPER TOOL",
    title: "AI Code Writer, Explainer, Debugger",
    subtitle: "Write. Explain. Fix. Powered by Gemini.",
    desc: "Three precision-engineered modes — code gen, line-by-line explanation, and bug fixing — with a secure Django backend.",
    tech: ["Django", "Python", "React", "Gemini API"],
    github: "https://github.com/PraveenSankar03/AI-code-explainer-debugger",
    accent: "#34C759",
    num: "02",
    img: "AI_explainer_1.png",
    challenges: [
      "Prompt consistency per mode",
      "Stateless Django with varied inputs",
      "Multi-mode UI clarity",
    ],
    learned: [
      "Prompt engineering",
      "REST API security",
      "External AI API architecture",
    ],
  },
  {
    id: 3,
    label: "REACT · TMDB API",
    title: "Movie Browser Application",
    subtitle: "Real-time data. Clean UI. Instant results.",
    desc: "Dynamic movie exploration with live TMDB API. Component-based architecture with smooth states and minimal interface.",
    tech: ["React", "JavaScript", "TMDB API", "CSS3"],
    github: "https://github.com/PraveenSankar03/Movie-Browser-using-React.js",
    live: "https://movie-browser-using-react-js.vercel.app/",
    accent: "#FF9500",
    num: "03",
    img: "movie_browser_2.png",
    challenges: [
      "Async API calls",
      "Loading & error states",
      "Component structure",
    ],
    learned: [
      "API integration in React",
      "Component reusability",
      "Lifecycle handling",
    ],
  },
  {
    id: 4,
    label: "DJANGO · FULL STACK",
    title: "Social MicroBlogging Application",
    subtitle: "Post. Follow. Connect.",
    desc: "Lightweight social platform with secure auth, post CRUD, and dynamic feed — fully built on Django.",
    tech: ["Django", "Python", "JavaScript", "SQLite"],
    github: "https://github.com/PraveenSankar03/django-social-media",
    accent: "#5856D6",
    num: "04",
    img: "Opinions.jpeg",
    challenges: [
      "Secure user auth",
      "Relational DB models",
      "Dynamic feed updates",
    ],
    learned: ["Django auth system", "CRUD in full-stack", "DB relationships"],
  },
  {
    id: 5,
    label: "REACT · CHAINED APIs",
    title: "Weather Fetcher Application",
    subtitle: "City in. Weather out. Two APIs, one flow.",
    desc: "Smart chained API calls — Geocoding translates city to coords, which feeds a weather API. Error-handled throughout.",
    tech: ["React", "JavaScript", "Open-Meteo", "CSS3"],
    github: "https://github.com/PraveenSankar03/weather-fetcher-using-react",
    live: "https://weather-fetcher-using-react.vercel.app/",
    accent: "#FF2D55",
    num: "05",
    img: "weather_fetcher.png",
    challenges: [
      "Dependent API chains",
      "Invalid city edge cases",
      "Smooth UI updates",
    ],
    learned: [
      "Chaining API requests",
      "Async error handling",
      "Loading UX patterns",
    ],
  },
];

const SKILLS = [
  {
    category: "Frontend",
    items: [
      { name: "React", img: "react.png" },
      { name: "JavaScript", img: "javascript.png" },
      { name: "jQuery", img: "jquery.png" },
      { name: "HTML5", img: "html.png" },
      { name: "CSS3", img: "css.png" },
      { name: "Bootstrap", img: "bootstrap.png" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Django", img: "django.png" },
      { name: "Python", img: "python.jpg" },
      { name: "REST Framework", img: "django-rest.png" },
    ],
  },
  {
    category: "AI & ML",
    items: [
      { name: "Ollama", img: "Ollama.png" },
      { name: "Phi (LLM)", img: "Phi.png" },
    ],
  },
  {
    category: "Database",
    items: [
      { name: "PostgreSQL", img: "Postgres.png" },
      { name: "SQLite", img: "SQLite.png" },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", img: "git.png" },
      { name: "GitHub", img: "github.png" },
      { name: "VS Code", img: "vscode.jpg" },
      { name: "Vercel", img: "vercel.png" },
    ],
  },
];

function Cursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springCfg = { stiffness: 600, damping: 45 };
  const trailCfg = { stiffness: 100, damping: 22 };
  const sx = useSpring(cursorX, springCfg);
  const sy = useSpring(cursorY, springCfg);
  const tx = useSpring(cursorX, trailCfg);
  const ty = useSpring(cursorY, trailCfg);
  const [hov, setHov] = useState(false);

  useEffect(() => {
    const mv = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    const over = (e) =>
      setHov(!!e.target.closest("button,a,.skill-pill,.proj-head"));
    const out = () => setHov(false);
    window.addEventListener("mousemove", mv);
    window.addEventListener("mouseover", over);
    window.addEventListener("mouseout", out);
    return () => {
      window.removeEventListener("mousemove", mv);
      window.removeEventListener("mouseover", over);
      window.removeEventListener("mouseout", out);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      <motion.div className="cursor-trail" style={{ x: tx, y: ty }} />
      <motion.div
        className={`cursor-dot ${hov ? "cursor-dot--big" : ""}`}
        style={{ x: sx, y: sy }}
      />
    </>
  );
}

function Particles() {
  const ref = useRef(null);
  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");
    let W = (canvas.width = window.innerWidth);
    let H = (canvas.height = window.innerHeight);
    let id;
    const pts = Array.from({ length: 55 }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.28,
      vy: (Math.random() - 0.5) * 0.28,
      r: Math.random() * 1.4 + 0.4,
      a: Math.random() * 0.35 + 0.1,
    }));
    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      pts.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = W;
        if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H;
        if (p.y > H) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0,122,255,${p.a})`; 
        ctx.fill();
      });
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x,
            dy = pts[i].y - pts[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 130) {
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.strokeStyle = `rgba(0,122,255,${0.09 * (1 - d / 130)})`; 
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      id = requestAnimationFrame(draw);
    };
    draw();
    const resize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(id);
      window.removeEventListener("resize", resize);
    };
  }, []);
  return <canvas ref={ref} className="particles-canvas" />;
}

function Typewriter({ words }) {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);
  useEffect(() => {
    const word = words[idx];
    let t;
    if (!del && text === word) t = setTimeout(() => setDel(true), 2000);
    else if (del && text === "") {
      setDel(false);
      setIdx((i) => (i + 1) % words.length);
    } else
      t = setTimeout(
        () =>
          setText(
            del
              ? word.slice(0, text.length - 1)
              : word.slice(0, text.length + 1),
          ),
        del ? 38 : 75,
      );
    return () => clearTimeout(t);
  }, [text, del, idx, words]);
  return (
    <span className="typewriter">
      {text}
      <span className="tw-cursor">|</span>
    </span>
  );
}

function MagBtn({ children, className, onClick, href, target }) {
  const ref = useRef(null);
  const x = useMotionValue(0),
    y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 280, damping: 18 });
  const sy = useSpring(y, { stiffness: 280, damping: 18 });
  const move = (e) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * 0.38);
    y.set((e.clientY - (r.top + r.height / 2)) * 0.38);
  };
  const leave = () => {
    x.set(0);
    y.set(0);
  };
  const El = href ? "a" : "button";
  const props = href
    ? { href, target, rel: "noreferrer" }
    : { onClick, type: "button" };
  return (
    <motion.div
      ref={ref}
      style={{ x: sx, y: sy }}
      onMouseMove={move}
      onMouseLeave={leave}
      className="mag-wrap"
    >
      <El className={className} {...props}>
        {children}
      </El>
    </motion.div>
  );
}

function Navbar({ activeSection, scrollTo, darkMode, toggleDark }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const el = document.getElementById("scroll-root");
    const h = () => setScrolled(el?.scrollTop > 50);
    el?.addEventListener("scroll", h);
    return () => el?.removeEventListener("scroll", h);
  }, []);
  return (
    <motion.nav
      className={`navbar ${scrolled ? "nb--scrolled" : ""}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="nb-inner">
        <button className="nb-brand" onClick={() => scrollTo(0)}>
          <span className="nb-brand-dot" />
          PK
        </button>
        <ul className="nb-links">
          {NAV_ITEMS.map((item, i) => (
            <li key={item}>
              <button
                className={`nb-link ${activeSection === i ? "nb-link--on" : ""}`}
                onClick={() => scrollTo(i)}
              >
                {item}
                {activeSection === i && (
                  <motion.span className="nb-underline" layoutId="ul" />
                )}
              </button>
            </li>
          ))}
        </ul>
        <div className="nb-right">
          <button className="nb-theme" onClick={toggleDark}>
            {darkMode ? "☀" : "☾"}
          </button>
          <button className="nb-ham" onClick={() => setOpen((p) => !p)}>
            <span className={open ? "o" : ""} />
            <span className={open ? "o" : ""} />
            <span className={open ? "o" : ""} />
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            className="nb-mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28 }}
          >
            {NAV_ITEMS.map((item, i) => (
              <button
                key={item}
                className="nb-mob-link"
                onClick={() => {
                  scrollTo(i);
                  setOpen(false);
                }}
              >
                <span>0{i + 1}</span>
                {item}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

function Home({ scrollTo }) {
  return (
    <section className="section home-section">
      <Particles />
      <div className="home-inner">
        <motion.div
          className="home-badge"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="badge-pulse" />
          Available for hire
        </motion.div>

        <h1 className="home-title">
          <motion.span
            className="ht-line1"
            initial={{ opacity: 0, y: 60, skewY: 4 }}
            animate={{ opacity: 1, y: 0, skewY: 0 }}
            transition={{ delay: 0.15, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            Praveen Kumar
          </motion.span>
          <motion.span
            className="ht-line2"
            initial={{ opacity: 0, y: 60, skewY: 4 }}
            animate={{ opacity: 1, y: 0, skewY: 0 }}
            transition={{ delay: 0.3, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <Typewriter
              words={[
                "Full Stack Dev.",
                "React Developer.",
                "Django Developer.",
                "AI Engineer.",
              ]}
            />
          </motion.span>
        </h1>

        <motion.p
          className="home-desc"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.8 }}
        >
          I craft scalable, responsive web apps with <strong>React</strong> and{" "}
          <strong>Django</strong> —<br />
          sharp architecture, polished UI and production-ready.
        </motion.p>

        <motion.div
          className="home-actions"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.72, duration: 0.7 }}
        >
          <MagBtn className="btn-primary" onClick={() => scrollTo(3)}>
            View Projects ↓
          </MagBtn>
          <MagBtn className="btn-ghost" href="/My_Resume.pdf" target="_blank">
            Resume ↗
          </MagBtn>
        </motion.div>

        <motion.div
          className="home-socials"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.95 }}
        >
          <a
            href="https://github.com/PraveenSankar03"
            target="_blank"
            rel="noreferrer"
            className="soc-icon"
          >
            <FaGithub />
          </a>
          <a href="mailto:praveensankar3333@gmail.com" className="soc-icon">
            <FaEnvelope />
          </a>
          <a
            href="https://www.linkedin.com/in/praveen-kumar-40109b366/"
            target="_blank"
            rel="noreferrer"
            className="soc-icon"
          >
            <FaLinkedin />
          </a>
        </motion.div>

        <motion.div
          className="home-tags"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
        >
          {[
            "Python",
            "Django",
            "React",
            "JavaScript",
            "REST API",
            "AI/LLM",
            "PostgreSQL",
            "Git",
            "Vercel",
          ].map((t, i) => (
            <span key={i} className="htag">
              {t}
            </span>
          ))}
        </motion.div>
      </div>

      <button className="scroll-cue" onClick={() => scrollTo(1)}>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </motion.div>
      </button>
    </section>
  );
}

function About() {
  const stats = [
    { num: "5+", label: "Projects Built" },
    { num: "8.4", label: "CGPA" },
    { num: "2+", label: "Core Frameworks" },
    { num: "∞", label: "Curiosity" },
  ];
  const rows = [
    ["Name", "Praveen Kumar S"],
    ["Location", "Chennai, Tamil Nadu"],
    ["Education", "B.Tech Biomedical Eng."],
    ["University", "Dr. M.G.R. Educational and Research Institute"],
    ["Year", "2021 - 2025 · CGPA 8.4"],
    ["Role", "Full Stack Developer"],
  ];
  return (
    <section className="section about-section">
      <div className="section-inner">
        <div className="about-layout">
          <motion.div
            className="about-left"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="eyebrow">Who I am</p>
            <h2 className="sec-title">
              About
              <br />
              <em>Me.</em>
            </h2>
            <div className="about-stats">
              {stats.map((s, i) => (
                <motion.div
                  className="astat"
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.08 }}
                >
                  <span className="astat-num">{s.num}</span>
                  <span className="astat-label">{s.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="about-right"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="about-card">
              {rows.map(([l, v], i) => (
                <div className="arow" key={i}>
                  <span className="arow-l">{l}</span>
                  <span
                    className={`arow-v ${l === "Role" ? "arow-v--hl" : ""}`}
                  >
                    {v}
                  </span>
                </div>
              ))}
            </div>
            <div className="about-prose">
              <p>
                I'm a Full Stack Developer from a Biomedical Engineering
                background — an unusual edge that sharpened my analytical and
                structured thinking.
              </p>
              <p>
                I build production apps with <strong>React</strong> and{" "}
                <strong>Django</strong>. REST APIs, auth systems, clean
                architecture — that's my zone. I transitioned into software
                deliberately, shipping real projects and learning by doing.
              </p>
              <p>
                Seeking an entry-level role where I can contribute from day one.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="section skills-section">
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="eyebrow">What I use</p>
          <h2 className="sec-title">
            Tech &<br />
            <em>Tools.</em>
          </h2>
        </motion.div>
        <div className="skills-all">
          {SKILLS.map((g, gi) => (
            <motion.div
              className="skills-group"
              key={g.category}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: gi * 0.07 }}
            >
              <span className="skills-cat">{g.category}</span>
              <div className="skills-row">
                {g.items.map((sk, si) => (
                  <motion.div
                    className="skill-pill"
                    key={sk.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: gi * 0.04 + si * 0.035 }}
                    whileHover={{ y: -7, scale: 1.08 }}
                  >
                    <img src={sk.img} alt={sk.name} />
                    <span>{sk.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const [active, setActive] = useState(null);
  return (
    <section className="section projects-section">
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="eyebrow">What I built</p>
          <h2 className="sec-title">
            Selected
            <br />
            <em>Projects.</em>
          </h2>
        </motion.div>

        <div className="proj-list">
          {PROJECTS.map((p, i) => (
            <motion.div
              className={`proj-row ${active === p.id ? "proj-row--open" : ""}`}
              key={p.id}
              style={{ "--acc": p.accent }}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.055 }}
            >
              <button
                className="proj-head"
                onClick={() => setActive(active === p.id ? null : p.id)}
              >
                <span className="proj-num">{p.num}</span>
                <div className="proj-meta">
                  <span className="proj-label">{p.label}</span>
                  <span className="proj-title">{p.title}</span>
                </div>
                <div className="proj-tech-inline">
                  {p.tech.slice(0, 3).map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
                <span className="proj-toggle">
                  {active === p.id ? "−" : "+"}
                </span>
              </button>

              <AnimatePresence>
                {active === p.id && (
                  <motion.div
                    className="proj-body"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div
                      className={`proj-body-inner ${p.img ? "proj-body-inner--featured" : ""}`}
                    >
                      {p.img && (
                        <div className="proj-screenshot-wrap">
                          <img
                            src={p.img}
                            alt={p.title + " screenshot"}
                            className="proj-screenshot"
                          />
                        </div>
                      )}
                      <div className="proj-desc-col">
                        <p className="proj-subtitle">{p.subtitle}</p>
                        <p className="proj-desc">{p.desc}</p>
                        <div className="proj-tags">
                          {p.tech.map((t) => (
                            <span className="ptag" key={t}>
                              {t}
                            </span>
                          ))}
                        </div>
                        <div className="proj-links">
                          <a
                            href={p.github}
                            target="_blank"
                            rel="noreferrer"
                            className="plink"
                          >
                            <FaGithub /> GitHub
                          </a>
                          {p.live && (
                            <a
                              href={p.live}
                              target="_blank"
                              rel="noreferrer"
                              className="plink plink--live"
                            >
                              Live ↗
                            </a>
                          )}
                        </div>
                      </div>
                      <div className="proj-insight-col">
                        <div className="ibox">
                          <h4>Challenges</h4>
                          <ul>
                            {p.challenges.map((c, j) => (
                              <li key={j}>{c}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="ibox">
                          <h4>Learned</h4>
                          <ul>
                            {p.learned.map((l, j) => (
                              <li key={j}>{l}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="contact-strip"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <h3>Let's build something.</h3>
            <p>Open to entry-level full stack roles. Available immediately.</p>
          </div>
          <div className="contact-actions">
            <MagBtn
              className="btn-primary"
              href="mailto:praveensankar3333@gmail.com"
              target="_blank"
            >
              Get in Touch
            </MagBtn>
            <MagBtn
              className="btn-ghost"
              href="https://github.com/PraveenSankar03"
              target="_blank"
            >
              GitHub ↗
            </MagBtn>
            <MagBtn
              className="btn-ghost"
              href="https://www.linkedin.com/in/praveen-kumar-40109b366/"
              target="_blank"
            >
              LinkedIn ↗
            </MagBtn>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function App() {
  const [active, setActive] = useState(0);
  const [dark, setDark] = useState(
    window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches,
  ); 
  const refs = useRef([]);

  const scrollTo = (i) => {
    if (refs.current[i]) {
      refs.current[i].scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      dark ? "dark" : "light",
    );
  }, [dark]);

  useEffect(() => {
    const currentRefs = refs.current;
    const obs = new IntersectionObserver(
      (entries) => {
        let currentActive = -1;
        let maxRatio = 0;
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio;
            currentActive = currentRefs.indexOf(entry.target);
          }
        });
        if (currentActive !== -1) {
          setActive(currentActive);
        }
      },
      { threshold: [0.2, 0.4, 0.6, 0.8] },
    );
    currentRefs.forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div className={`app ${dark ? "dark" : "light"}`}>
      <Cursor />
      <Navbar
        activeSection={active}
        scrollTo={scrollTo}
        darkMode={dark}
        toggleDark={() => setDark((p) => !p)}
      />

      <div className="side-dots">
        {NAV_ITEMS.map((lbl, i) => (
          <button
            key={lbl}
            className={`sdot ${active === i ? "sdot--on" : ""}`}
            onClick={() => scrollTo(i)}
            title={lbl}
          />
        ))}
      </div>

      <main id="scroll-root" className="scroll-root">
        <div ref={(el) => (refs.current[0] = el)}>
          <Home scrollTo={scrollTo} />
        </div>
        <div ref={(el) => (refs.current[1] = el)}>
          <About />
        </div>
        <div ref={(el) => (refs.current[2] = el)}>
          <Skills />
        </div>
        <div ref={(el) => (refs.current[3] = el)}>
          <Projects />
        </div>
      </main>
    </div>
  );
}
