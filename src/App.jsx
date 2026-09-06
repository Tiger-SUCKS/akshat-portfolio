import React, { useEffect, useState } from "react";

const skills = {
  Languages: [
    "Java",
    "JavaScript",
    "HTML",
    "CSS"
  ],

  Frontend: [
    "React.js",
    "Context API",
    "Tailwind CSS",
    "Bootstrap",
    "Responsive Design"
  ],

  Backend: [
    "Java",
    "Spring Boot",
    "Node.js",
    "Express.js",
    "REST APIs"
  ],

  Databases: [
    "PostgreSQL",
    "MySQL",
    "MongoDB"
  ],

  Security: [
    "JWT Authentication",
    "Authentication",
    "Authorization"
  ],

  ORM: [
    "Hibernate",
    "Spring Data JPA",
    "Mongoose",
    "Prisma"
  ],

  Tools: [
    "Git",
    "GitHub",
    "Postman",
    "Docker",
    "VS Code"
  ],

  Concepts: [
    "DSA",
    "MVC Architecture",
    "CRUD Operations",
    "API Integration"
  ]
};

const projects = [
  {
    number: "01",
    title: "PayPilot",
    label: "Full Stack Project",
    description:
      "A full-stack payment and financial workflow application built with a modern React frontend, Spring Boot backend, REST APIs, secure authentication, and PostgreSQL database integration.",
    stack: [
      "React",
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "REST API",
      "JWT",
    ],
    featured: true,
    features: [
      "Full-stack architecture",
      "JWT authentication",
      "RESTful APIs",
      "PostgreSQL database",
    ],
    github: "https://github.com/Tiger-SUCKS/Pay-Pilot",
  },

  {
    number: "02",
    title: "Cold Storage Management",
    label: "Full Stack Web Application",
    description:
      "A web application designed to manage cold-storage inventory, clients, and billing with database-backed records to improve data organization and reduce manual record-keeping.",
    stack: [
      "HTML",
      "CSS",
      "JavaScript",
      "SQL",
    ],
    featured: false,
    features: [
      "Inventory management",
      "Client management",
      "Billing management",
      "Database-backed records",
    ],
    github: "https://github.com/Tiger-SUCKS/fmiproject",
  },
];

const experiences = [
  {
    role: "Data Annotator",
    company: "AI Data Training",
    date: "4 Months",
    description:
      "Working on data annotation and quality-focused tasks that support the training and improvement of AI models."
  },

  {
    role: "HCM Intern",
    company: "UPPCL, Lucknow",
    date: "45 Days",
    description:
      "Worked with employee data management and HR process workflows using SAP HCM, gaining practical exposure to enterprise HR systems and data management."
  },

  {
    role: "Web Developer Intern",
    company: "Soft Pro India, Lucknow",
    date: "45 Days",
    description:
      "Developed responsive web pages using HTML, CSS and JavaScript while working on frontend functionality and improving user interface experiences."
  }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowTop(window.scrollY > 500);
      const sections = ["home", "about", "skills", "experience", "projects", "services", "contact"];
      const current = sections.find((id) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 140 && rect.bottom >= 140;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site">
      <div className="noise" />

      <header className="navbar">
        <div className="container nav-inner">
          <a className="brand" href="#home" onClick={closeMenu}>
            <span className="brand-mark">&lt;/&gt;</span>
            <span>Akshat<span className="brand-dot">.</span></span>
          </a>

          <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
            {["home", "about", "skills", "experience", "projects", "services", "contact"].map((item) => (
              <a
                key={item}
                className={activeSection === item ? "active" : ""}
                href={`#${item}`}
                onClick={closeMenu}
              >
                {item}
              </a>
            ))}
          </nav>

          <a className="nav-cta" href="#contact">Let's Talk <span>↗</span></a>

          <button
            className="menu-toggle"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="hero-grid" />
          <div className="container hero-layout">
            <div className="hero-copy reveal">
              <div className="availability">
                <span className="pulse" />
                Open to opportunities
              </div>
              <p className="eyebrow">HELLO, I'M AKSHAT</p>
              <h1>
                I build digital
                <span> experiences.</span>
              </h1>
              <p className="hero-lead">
                Full Stack Developer focused on building responsive web applications,
                backend APIs and database-driven systems — while continuously learning
                modern technologies and AI workflows.
              </p>
              <div className="hero-actions">
                <a
                  className="btn btn-primary"
                  href="#projects"
                >
                  View Projects <span>→</span>
                </a>

                <a
                  className="btn btn-ghost"
                  href="#contact"
                >
                  Contact Me
                </a>

                <a
                  className="btn btn-ghost resume-btn"
                  href="/resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  Download Resume ↗
                </a>
              </div>

              <div className="social-row">
                <a href="mailto:akshatvishalsinha05@gmail.com">
                  ✉ Email
                </a>

                <span>·</span>

                <a
                  href="https://www.linkedin.com/in/akshat-vishal-sinha"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn profile"
                >
                  LinkedIn ↗
                </a>

                <span>·</span>

                <a
                  href="https://github.com/Tiger-SUCKS"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub profile"
                >
                  GitHub ↗
                </a>
              </div>
            </div>

            <div className="hero-visual reveal">
              <div className="orb orb-a" />
              <div className="orb orb-b" />

              <div className="profile-frame">
                <div className="profile-placeholder">
                  <img
                    src="/profile.jpg"
                    alt="Akshat Vishal Sinha"
                    className="profile-image"
                  />
                </div>
              </div>

              <div className="floating-tag tag-one">Java</div>
              <div className="floating-tag tag-two">React</div>
              <div className="floating-tag tag-three">PostgreSQL</div>
            </div>
          </div>

          <a href="#about" className="scroll-cue">
            <span>SCROLL</span>
            <div />
          </a>
        </section>

        <section id="about" className="section section-dark">
          <div className="container">
            <div className="section-heading">
              <span className="section-number">01 / ABOUT</span>
              <h2>Building with curiosity,<br /><em>engineering with purpose.</em></h2>
            </div>

            <div className="about-grid">
              <div className="about-copy">
                <p className="large-copy">
                  I'm <strong>Akshat Vishal Sinha</strong>, a Full Stack Developer
                  currently pursuing a B.Tech in Computer Science Engineering.
                </p>
                <p>
                  I have a Diploma in Information Technology and practical experience
                  across Web and Backend development, enterprise HR systems and data annotation
                  for AI model training. I enjoy turning ideas into clean, useful
                  and responsive software.
                </p>
                <p>
                  My technical foundation spans frontend development, backend APIs,
                  databases, authentication, deployment and core software engineering
                  concepts.
                </p>
              </div>

              <div className="info-panel">
                <div className="info-row"><span>Role</span><b>Full Stack Developer</b></div>
                <div className="info-row"><span>Education</span><b>B.Tech CSE · Pursuing</b></div>
                <div className="info-row"><span>Diploma</span><b>Information Technology</b></div>
                <div className="info-row"><span>Focus</span><b>Web · Backend · APIs · Databases</b></div>
                <div className="info-row"><span>Currently</span><b>Data Annotation / AI</b></div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="container">
            <div className="section-heading compact">
              <span className="section-number">02 / SKILLS</span>
              <h2>My technical <em>toolbox.</em></h2>
            </div>

            <div className="skills-grid">
              {Object.entries(skills).map(([category, items]) => (
                <article className="skill-card" key={category}>
                  <span className="skill-icon">&lt;/&gt;</span>
                  <h3>{category}</h3>
                  <div className="chips">
                    {items.map((item) => <span key={item}>{item}</span>)}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="section section-dark">
          <div className="container">
            <div className="section-heading compact">
              <span className="section-number">03 / EXPERIENCE</span>
              <h2>Where I've <em>worked.</em></h2>
            </div>

            <div className="timeline">
              {experiences.map((item, index) => (
                <article className="timeline-item" key={item.role}>
                  <div className="timeline-marker">{String(index + 1).padStart(2, "0")}</div>
                  <div className="timeline-content">
                    <div className="timeline-meta">{item.date}</div>
                    <h3>{item.role}</h3>
                    <h4>{item.company}</h4>
                    <p>{item.description}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="education-strip">

              <div className="education-item">
                <span className="section-number">EDUCATION</span>
                <h3>B.Tech in Computer Science Engineering</h3>
                <p>
                  Dr. Shakuntala Misra National Rehabilitation University · Pursuing
                </p>
              </div>

              <div className="education-item">
                <span className="section-number">DIPLOMA</span>
                <h3>Diploma in Information Technology</h3>
                <p>
                  Government Polytechnic Mirzapur · 2021-2024 · CGPA 7/10
                </p>
              </div>

            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="container">
            <div className="section-heading">
              <span className="section-number">04 / PROJECTS</span>
              <h2>Selected <em>work.</em></h2>
            </div>

            <div className="projects-list">
              {projects.map((project) => (
                <article
                  className={`project-card ${project.featured ? "featured" : ""}`}
                  key={project.title}
                >
                  <div className="project-number">
                    {project.number}
                  </div>

                  <div className="project-main">
                    <div className="project-kicker">
                      {project.label}
                    </div>

                    <h3>{project.title}</h3>

                    <p>{project.description}</p>

                    {/* Technologies */}
                    <div className="project-stack">
                      {project.stack.map((tech) => (
                        <span key={tech}>{tech}</span>
                      ))}
                    </div>

                    {/* Features */}
                    <div className="project-features">
                      {project.features.map((feature) => (
                        <div key={feature} className="project-feature">
                          <span className="feature-check">✓</span>
                          {feature}
                        </div>
                      ))}
                    </div>

                    {/* Buttons */}
                    <div className="project-actions">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="project-btn"
                      >
                        GitHub <span>↗</span>
                      </a>

                    </div>
                  </div>

                  <div className="project-arrow">↗</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="section section-dark">
          <div className="container">
            <div className="section-heading compact">
              <span className="section-number">05 / SERVICES</span>
              <h2>What I can <em>build.</em></h2>
            </div>

            <div className="services-grid">
              <article className="service-card">
                <span>01</span>
                <h3>Full Stack Development</h3>
                <p>
                  End-to-end web applications combining responsive interfaces,
                  backend services, APIs, databases and authentication.
                </p>
                <div className="service-line">Frontend + Backend + Database</div>
              </article>
              <article className="service-card">
                <span>02</span>
                <h3>Backend & APIs</h3>
                <p>
                  RESTful APIs, CRUD workflows, authentication and database-driven
                  application logic.
                </p>
                <div className="service-line">Node.js · Express · Java</div>
              </article>
              <article className="service-card">
                <span>03</span>
                <h3>Database Solutions</h3>
                <p>
                  Structured data management using PostgreSQL, MySQL and MongoDB
                  for practical application workflows.
                </p>
                <div className="service-line">SQL + NoSQL</div>
              </article>
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="container">
            <div className="contact-card">

              <div className="contact-intro">
                <span className="section-number">06 / CONTACT</span>

                <h2>
                  Let's build something <em>useful together.</em>
                </h2>

                <p>
                  Have an opportunity, project or idea?
                  Reach out and let's start a conversation.
                </p>
              </div>

              <div className="contact-details">

                <a href="mailto:akshatvishalsinha05@gmail.com">
                  <span>Email</span>
                  akshatvishalsinha05@gmail.com
                </a>

                <a href="tel:+918858973130">
                  <span>Phone</span>
                  +91 88589 73130
                </a>

                <div className="contact-socials">

                  <a
                    href="https://www.linkedin.com/in/akshat-vishal-sinha"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn ↗
                  </a>

                  <a
                    href="https://github.com/Tiger-SUCKS"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub ↗
                  </a>

                </div>

              </div>

            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">

          <div className="footer-brand">
            <strong>Akshat.</strong>
            <span>Full Stack Developer</span>
          </div>

          <div className="footer-copy">
            <span>
              © {new Date().getFullYear()} Akshat Vishal Sinha
            </span>

            <span>
              Built with React & Java
            </span>
          </div>

          <a href="#home" className="back-to-top">
            Back to top ↑
          </a>

        </div>
      </footer>

      {showTop && <a className="back-top" href="#home" aria-label="Back to top">↑</a>}
    </div>
  );
}

export default App;