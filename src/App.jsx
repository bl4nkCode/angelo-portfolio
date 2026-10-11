const projects = [

  {

    number: "01",

    title: "Personal Finance Tracker",

    category: "Full-Stack Web Application",

    name: "Personal Finance Tracker",

    type: "FINANCE DASHBOARD",

    color: "project-art--finance",

    mark: "₱",

    image: "/images/finance-tracker.png",

    description:

      "A personal finance application for managing income, expenses, categories, and transactions with monthly summaries and interactive charts.",

    stack: ["Laravel", "React", "MySQL", "Sanctum", "Recharts"],

    links: [

      {

        label: "View Repository",

        url: "https\://github.com/bl4nkCode/personal-finance-tracker",

      },

    ],

  },

  {

    number: "02",

    title: "Job Application Tracker",

    category: "Full-Stack Web Application",

    name: "Job Application Tracker",

    type: "CAREER ORGANIZER",

    color: "project-art--jobs",

    mark: "↗",

    image: "/images/job-tracker.png",

    description:

      "A job tracking application for organizing companies and applications and keeping track of application progress.",

    stack: ["Laravel", "React", "MySQL", "Sanctum"],

    links: [

      {

        label: "View Repository",

        url: "https\://github.com/bl4nkCode/job-tracker",

      },

    ],

  },

  {

    number: "03",

    title: "Project Management App",

    category: "Full-Stack Web Application",

    name: "Project Management App",

    type: "TASK MANAGEMENT",

    color: "project-art--management",

    mark: "▦",

    image: "/images/project-management.png",

    description:

      "A project and task management application with a React frontend connected to a Laravel REST API backend.",

    stack: ["React", "Laravel", "REST API", "Axios"],

    links: [

      {

        label: "Frontend",

        url: "https\://github.com/bl4nkCode/Project-management-frontend",

      },

      {

        label: "Backend",

        url: "https\://github.com/bl4nkCode/Project-management-backend",

      },

    ],

  },

  {

    number: "04",

    title: "RFID Tabulation App",

    category: "Desktop Application",

    name: "RFID Tabulation App",

    type: "RFID ATTENDANCE",

    color: "project-art--rfid",

    mark: "▥",

    image: "/images/rfid-tabulation.png",

    description:

      "A C# desktop application that reads RFID tags and tabulates attendance in real time.",

    stack: ["C#", "Desktop Development", "RFID"],

    links: [

      {

        label: "View Repository",

        url: "https\://github.com/bl4nkCode/RFID-Tabulation-app",

      },

    ],

  },

  {

    number: "05",

    title: "Theater Ticketing System",

    category: "Application Development",

    name: "Theater Ticketing System",

    type: "TICKETING SYSTEM",

    color: "project-art--theater",

    mark: "▣",

    description:

      "A theater ticketing application demonstrating ticket management and database-driven application workflows.",

    stack: ["Application Development", "CRUD", "Database"],

    links: [

      {

        label: "View Repository",

        url: "https\://github.com/bl4nkCode/Theater-ticketing-system",

      },

    ],

  },

];



const skills = [

  "React",

  "JavaScript",

  "Tailwind CSS",

  "HTML & CSS",

  "Laravel 12",

  "PHP",

  "REST APIs",

  "Sanctum",

  "C# / .NET",

  "DevExpress",

  "MySQL",

  "SQL Server",

  "Git & GitHub",

  "Postman",

  "Axios",

  "Recharts",

];



const experience = [

  {

    date: "2026",

    role: "Website Developer Intern",

    company: "Philippine Ports Authority — Port of Dapitan",

    description:

      "Contributed to web-based system development, troubleshooting, database management, documentation, and technical support for office operations.",

  },

];



function PixelAvatar() {

  const rows = [

    "..OO........OO..",

    ".OIIO......OIIO.",

    ".OIIOOOOOOOOIIO.",

    "OWWWWGWWWWGWWWWO",

    "OWWWWWGWWGWWWWWO",

    "OWWWWWWWWWWWWWWO",

    "OWWEEWWWWWWEEWWO",

    "OWWEEWWWWWWEEWWO",

    "OWWWWWWPPWWWWWWO",

    "OWWWGWWWWWWGWWWO",

    "..OWWWWWWWWWWO..",

    "...OWWWWWWWWO...",

    "....OOOOOOOO....",

    "..OBBLLLLLLBBO..",

    ".OBBBBBBBBBBBBO.",

    "OBBBBLBBBBLBBBBO",

    "OBBBBBBBBBBBBBBO",

    "OOOOOOOOOOOOOOOO",

  ];



  const colors = {

    W: "fur",

    G: "fur-gray",

    O: "outline",

    I: "ear-inner",

    E: "eye",

    P: "nose",

    B: "shirt",

    L: "shirt-light",

  };



  return (

    <div

      className="pixel-avatar"

      role="img"

      aria-label="Retro 8-bit cat avatar"

    >

      {rows

        .join("")

        .split("")

        .map((pixel, index) => (

          <span key={index} className={`pixel pixel--${colors[pixel]}`} />

        ))}

    </div>

  );

}



function SectionHeading({ number, eyebrow, title, description }) {

  return (

    <div className="section-heading">

      <p className="eyebrow">

        {number} / {eyebrow}

      </p>

      <h2>{title}</h2>

      {description && <p className="section-description">{description}</p>}

    </div>

  );

}



function App() {

  return (

    <div className="portfolio">

      <header className="site-header">

        <nav className="nav container">

          <a className="brand" href="#home">

            angelo<span>.</span>

          </a>



          <div className="nav-links">

            <a href="#about">About</a>

            <a href="#projects">Projects</a>

            <a href="#experience">Experience</a>

            <a href="#stack">Stack</a>

          </div>



          <a className="nav-contact" href="#contact">

            Let's talk <span>↗</span>

          </a>

        </nav>

      </header>



      <main>

        <section id="home" className="hero container">

          <div className="hero-copy">

            <div className="availability">

              <span className="status-dot" />

              JUNIOR SOFTWARE DEVELOPER

            </div>



            <h1>

              Hi, I'm Angelo.

              <br />

              I build things for

              <br />

              <span className="accent">the web.</span>

            </h1>



            <p className="hero-description">

              I'm an IT graduate and junior full-stack developer who enjoys

              turning ideas into practical web and desktop applications. I work

              with React, Laravel, C#, and SQL.

            </p>



            <div className="hero-actions">

              <a className="button button-primary" href="#projects">

                Explore my work <span>↘</span>

              </a>

              <a

                className="button button-secondary"

                href="https\://github.com/bl4nkCode"

                target="_blank"

                rel="noreferrer"

              >

                GitHub <span>↗</span>

              </a>

            </div>



            <div className="social-links">

              <a

                href="https\://github.com/bl4nkCode"

                target="_blank"

                rel="noreferrer"

              >

                GitHub ↗

              </a>

              <a

                href="https\://www.linkedin.com/in/bryan-angelo-canizar-06835a352"

                target="_blank"

                rel="noreferrer"

              >

                LinkedIn ↗

              </a>

              <a href="mailto:canizarbryanangelo@gmail.com">Email ↗</a>

            </div>

          </div>



          <div className="hero-visual">

            <div className="avatar-card">

              <div className="avatar-topline">

                <span>PLAYER PROFILE</span>

                <span>001</span>

              </div>



              <div className="avatar-stage">

                <div className="avatar-decoration decoration-one" />

                <div className="avatar-decoration decoration-two" />

                <PixelAvatar />

              </div>



              <div className="avatar-caption">

                <div>

                  <p className="avatar-name">Angelo</p>

                  <p className="avatar-role">Full-stack developer</p>

                </div>

                <span className="pixel-badge">8-BIT</span>

              </div>

            </div>



            <p className="visual-note">

              <span>✳</span> Building, learning, and improving.

            </p>

          </div>

        </section>



        <div className="ticker" aria-label="Technology highlights">

          <div className="ticker-inner">

            <span>REACT</span>

            <b>✳</b>

            <span>LARAVEL</span>

            <b>✳</b>

            <span>C# / .NET</span>

            <b>✳</b>

            <span>MYSQL</span>

            <b>✳</b>

            <span>REST APIS</span>

            <b>✳</b>

            <span>REACT</span>

            <b>✳</b>

            <span>LARAVEL</span>

            <b>✳</b>

          </div>

        </div>



        <section id="about" className="section container">

          <SectionHeading

            number="01"

            eyebrow="A LITTLE ABOUT ME"

            title="Developer by practice."

            description="A little about my background, how I work, and what I'm working toward."

          />



          <div className="about-grid">

            <div className="about-copy">

              <p>

                I'm an Information Technology graduate from Dipolog Medical

                Center College Foundation. I enjoy building applications that

                solve practical problems, from database-backed web systems to

                desktop tools.

              </p>

              <p>

                My experience includes developing with Laravel and React,

                working with C# desktop applications, integrating REST APIs, and

                managing relational databases. During my internship at the

                Philippine Ports Authority, I also gained experience with

                troubleshooting, documentation, and technical support.

              </p>

              <p>

                I'm looking for opportunities to contribute to a development

                team, strengthen my engineering skills, and build software that

                people find useful.

              </p>

            </div>



            <div className="about-facts">

              <div className="fact">

                <span>01</span>

                <div>

                  <h3>Full-stack development</h3>

                  <p>Building frontend experiences and backend APIs.</p>

                </div>

              </div>

              <div className="fact">

                <span>02</span>

                <div>

                  <h3>Database-driven systems</h3>

                  <p>Working with MySQL and Microsoft SQL Server.</p>

                </div>

              </div>

              <div className="fact">

                <span>03</span>

                <div>

                  <h3>Always learning</h3>

                  <p>Improving through projects, practice, and feedback.</p>

                </div>

              </div>

            </div>

          </div>

        </section>



        <section id="projects" className="section section-muted">

          <div className="container">

            <SectionHeading

              number="02"

              eyebrow="SELECTED WORK"

              title="Things I've built."

              description="A selection of web and desktop applications I've developed and practiced with."

            />



            <div className="project-grid">

              {projects.map((project) => (

                <article className="project-card" key={project.number}>

                  <div className={`project-art ${project.color}`}>

                    {project.image ? (

                      <img

                        className="project-preview-image"

                        src={project.image}

                        alt={`${project.title} screenshot`}

                        loading="lazy"

                      />

                    ) : (

                      <>

                        <span className="project-number">{project.number}</span>

                        <span className="project-mark">{project.mark}</span>

                        <span className="project-art-label">

                          {project.type}

                        </span>

                      </>

                    )}

                  </div>

                  <div className="project-content">

                    <h3>{project.title}</h3>

                    <p>{project.description}</p>



                    <div className="tag-list">

                      {project.stack.map((technology) => (

                        <span className="tag" key={technology}>

                          {technology}

                        </span>

                      ))}

                    </div>



                    <div className="project-links">

                      {project.links.map((link) => (

                        <a

                          className="project-link"

                          key={link.url}

                          href={link.url}

                          target="_blank"

                          rel="noopener noreferrer"

                        >

                          {link.label} <span>↗</span>

                        </a>

                      ))}

                    </div>

                  </div>

                </article>

              ))}

            </div>

          </div>

        </section>



        <section id="experience" className="section container">

          <SectionHeading

            number="03"

            eyebrow="MY JOURNEY"

            title="Experience & education."

            description="My first steps in software development and the foundation I'm building on."

          />



          <div className="timeline">

            {experience.map((item) => (

              <article className="timeline-item" key={item.role}>

                <div className="timeline-date">{item.date}</div>

                <div className="timeline-marker" />

                <div className="timeline-content">

                  <p className="timeline-type">INTERNSHIP</p>

                  <h3>{item.role}</h3>

                  <p className="timeline-company">{item.company}</p>

                  <p>{item.description}</p>

                </div>

              </article>

            ))}



            <article className="timeline-item">

              <div className="timeline-date">2026</div>

              <div className="timeline-marker" />

              <div className="timeline-content">

                <p className="timeline-type">EDUCATION</p>

                <h3>Bachelor's Degree in Information Technology</h3>

                <p className="timeline-company">

                  Dipolog Medical Center College Foundation

                </p>

                <p>Graduated June 2026 · Dipolog City, Philippines</p>

              </div>

            </article>

          </div>

        </section>



        <section id="stack" className="section section-muted">

          <div className="container stack-layout">

            <div>

              <SectionHeading

                number="04"

                eyebrow="TOOLS OF THE TRADE"

                title="My tech stack."

                description="Technologies and tools I've used while building web and desktop applications."

              />

            </div>



            <div className="skills-grid">

              {skills.map((skill) => (

                <span className="skill-item" key={skill}>

                  <span className="skill-indicator" />

                  {skill}

                </span>

              ))}

            </div>

          </div>

        </section>



        <section id="contact" className="contact-section">

          <div className="container contact-inner">

            <p className="eyebrow">05 / GET IN TOUCH</p>

            <h2>

              Have a project

              <br />

              <span className="accent">in mind?</span>

            </h2>

            <p>

              I'm open to junior software development opportunities,

              collaboration, and freelance work. Let's connect.

            </p>



            <a

              className="button button-light"

              href="mailto:canizarbryanangelo@gmail.com"

            >

              Say hello <span>↗</span>

            </a>



            <div className="contact-details">

              <a href="mailto:canizarbryanangelo@gmail.com">

                canizarbryanangelo@gmail.com

              </a>

              <span>Dipolog City, Philippines</span>

            </div>

          </div>

        </section>

      </main>



      <footer className="site-footer">

        <div className="container footer-inner">

          <a className="brand" href="#home">

            angelo<span>.</span>

          </a>

          <p>Designed and built with React.</p>

          <a href="#home">Back to top ↑</a>

        </div>

      </footer>

    </div>

  );

}



export default App;
