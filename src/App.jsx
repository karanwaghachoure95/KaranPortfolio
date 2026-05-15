import { useEffect } from 'react';
import './App.css';

function App() {
  const skills = [
    'Java',
    'JSP Servelet',
    'Spring Boot',
    'JDBC',
    'Hibernate',
    'MySQL',
    'React JS',
    'JavaScript',
    'HTML5',
    'CSS3',
    'REST API',
    'Git & GitHub'
  ];

  const projects = [
    {
      title: 'College Management System',
      desc: 'Full Stack Java project using Java, JDBC, Servlet, JSP and MySQL with authentication and admin panel.',
      link: 'https://github.com/karanwaghachoure95/jijamatacollegeprojectkaran'
    },
    {
      title: 'AI Voice Assistant',
      desc: 'Smart voice assistant using Python with automation, command handling and AI features.',
      link: 'https://github.com/karanwaghachoure95/voice-assistant'
    },
   
  ];

  useEffect(() => {
    const reveal = () => {
      const reveals = document.querySelectorAll('.reveal');

      reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 100;

        if (elementTop < windowHeight - elementVisible) {
          element.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', reveal);
    reveal();

    return () => window.removeEventListener('scroll', reveal);
  }, []);

  return (
    <div className="portfolio">
      {/* Navbar */}
      <nav className="navbar">
        <h1 className="logo">Karan Waghachoure</h1>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section" id="home">
        <div className="hero-content reveal">
          <h2>
           <span>  Full Stack Java Developer</span>
          </h2>

          <p>
             BSc Computer Science Student passionate about building modern
            web applications using Java, Spring Boot, React and MySQL.
          </p>

          <div className="hero-buttons">
            <button
              onClick={() =>
                window.open('https://github.com/karanwaghachoure95/', '_blank')
              }
            >
              GitHub
            </button>

            <button
              className="linkedin-btn"
              onClick={() =>
                window.open('https://www.linkedin.com/in/karanwaghachoure95', '_blank')
              }
            >
              LinkedIn
            </button>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="about reveal" id="about">
        <h2>About Me</h2>

        <p>
          I am Karan Waghachoure, a passionate Full Stack Java Developer.
          I love building professional web applications and backend systems.
          I work with Java, Spring Boot, Hibernate, MySQL, React JS and modern web technologies.
          I also know the AIML , python , C , C++ , php , Cloud(Vercel ,Render , Railway , AWS)
        </p>

        <div className="education-boxes">
          <div className="edu-card">
            <h3>9.27</h3>
            <p>FY Pointer</p>
          </div>

          <div className="edu-card">
            <h3>8.82</h3>
            <p>SY Pointer</p>
          </div>

          <div className="edu-card">
            <h3>2026</h3>
            <p>Graduation</p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="skills-section reveal" id="skills">
        <h2>Skills</h2>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="projects-section reveal" id="projects">
        <h2>Projects</h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
             <button
               className="project"
               onClick={() => window.open(project.link, '_blank')}
            >
            View Project
          </button>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="contact-section reveal" id="contact">
        <h2>Contact Me</h2>

        <form className="contact-form">
          <input type="text" placeholder="Enter Name" />
          <input type="email" placeholder="Enter Email" />
          <textarea rows="6" placeholder="Enter Message"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2026 Karan Waghachoure | Full Stack Java Developer</p>
      </footer>
    </div>
  );
}

export default App;
