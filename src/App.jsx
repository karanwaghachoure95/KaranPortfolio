import { useEffect } from 'react';
import './App.css';

function App() {

  const skills = [
    'Java',
    'Spring Boot',
    'Hibernate',
    'MySQL',
    'React JS',
    'JavaScript',
    'HTML5',
    'CSS3',
    'REST API',
    'Git & GitHub',
    'AWS',
    'Python',
    'C++',
    'PHP'
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

    {
      title: 'Portfolio Website',
      desc: 'Modern responsive portfolio website using React JS, CSS and JavaScript.',
      link: 'https://github.com/karanwaghachoure95/KaranPortfolio'
    }
  ];

  const certificates = [
    'Java Full Stack Development',
    'AI - Machine Learning',
    'Python',
    'C++'
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

        <h1 className="logo">
          Karan Waghachoure
        </h1>

        <div className="nav-links">

          <a href="#home">Home</a>

          <a href="#about">About</a>

          <a href="#education">Education</a>

          <a href="#skills">Skills</a>

          <a href="#projects">Projects</a>

          <a href="#certificate">Certificates</a>

          <a href="#contact">Contact</a>

        </div>

      </nav>

      {/* Hero Section */}

      <section className="hero-section" id="home">

        <div className="hero-content reveal">

          <img
            src="/karan.jpeg"
            alt="Karan"
            className="profile-image"
          />

          <h2>
            Full Stack <span>Java Developer</span>
          </h2>

          <p>
            BSc Computer Science Student passionate about building
            modern web applications using Java, Spring Boot,
            React JS and MySQL.
          </p>

          <div className="hero-buttons">

            <button
              onClick={() =>
                window.open(
                  'https://github.com/karanwaghachoure95',
                  '_blank'
                )
              }
            >
              GitHub
            </button>

            <button
              className="linkedin-btn"
              onClick={() =>
                window.open(
                  'https://www.linkedin.com/in/karanwaghachoure95',
                  '_blank'
                )
              }
            >
              LinkedIn
            </button>

            <button
              className="resume-btn"
              onClick={() =>
                window.open(
                  '/KaranResume.pdf',
                  '_blank'
                )
              }
            >
              Resume
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
          I work with Java, Spring Boot, Hibernate, MySQL,
          React JS and Cloud technologies.
          I also know AI/ML, Python, C++, PHP and AWS Deployment.
        </p>

      </section>

     {/* Education */}

<section className="education-section reveal" id="education">

  <h2>Education</h2>

  <div className="education-grid">

    {/* TY BSc */}

    <div
      className="education-card"
     
    >

      

      <h3>TY BSc Computer Science</h3>

      <h4>2023 - 2026</h4>

      <p>
        Savitribai Phule Pune University
      </p>

      <span>Current Student</span>

      <div className="gallery-buttons">

        <button
          onClick={(e) => {
            e.stopPropagation();
            window.open('/FY.pdf', '_blank');
          }}
        >
          FY
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            window.open('/SY.jpeg', '_blank');
          }}
        >
          SY
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            window.open('/TY.jpeg', '_blank');
          }}
        >
          TY
        </button>

      </div>

    </div>

    {/* HSC */}

    <div
      className="education-card"
      onClick={() =>
        window.open('/10th.jpeg', '_blank')
      }
    >

     
      <h3>Higher Secondary</h3>

      <h4>2021 - 2023</h4>

      <p>
        Maharashtra State Board
      </p>

      <span>Science Stream</span>

      <div className="gallery-buttons">

        <button
          onClick={(e) => {
            e.stopPropagation();
            window.open('/10th.jpeg', '_blank');
          }}
        >
          10th
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            window.open('/12th.jpeg', '_blank');
          }}
        >
          12th
        </button>

      </div>

    </div>

  </div>

</section>

      {/* Skills */}

      <section className="skills-section reveal" id="skills">

        <h2>Skills</h2>

        <div className="skills-grid">

          {
            skills.map((skill, index) => (

              <div className="skill-card" key={index}>

                {skill}

              </div>

            ))
          }

        </div>

      </section>

      {/* Projects */}

      <section className="projects-section reveal" id="projects">

        <h2>Projects</h2>

        <div className="projects-grid">

          {
            projects.map((project, index) => (

              <div className="project-card" key={index}>

                <h3>
                  {project.title}
                </h3>

                <p>
                  {project.desc}
                </p>

                <button
                  onClick={() =>
                    window.open(project.link, '_blank')
                  }
                >
                  View Project
                </button>

              </div>

            ))
          }

        </div>

      </section>

     {/* Certificates */}

<section
  className="certificate-section reveal"
  id="certificate"
>

  <h2>Certificates</h2>

  {/* Course Certificates */}

  <div className="certificate-type">

    <h3 className="certificate-heading">
      Course Certificates
    </h3>

    <div className="certificate-grid">

      {/* Python */}

      <div className="certificate-card">

       

        <h4>Python & C++ Certificate</h4>

        <div className="certificate-buttons">

          

          <button
            onClick={() =>
              window.open('/python.pdf', '_blank')
            }
          >
            python
          </button>

          <button
            onClick={() =>
              window.open('/C++.pdf', '_blank')
            }
          >
            C++
          </button>

        </div>

      </div>

      {/* Java */}

      <div className="certificate-card">

        <h4>Java Full Stack Certificate</h4>

        <div className="certificate-buttons">

          <button
            onClick={() =>
              window.open('/JavaCertificate.pdf', '_blank')
            }
          >
            click
          </button>

        </div>

      </div>

    </div>

  </div>

  {/* Internship Certificates */}

  <div className="certificate-type">

    <h3 className="certificate-heading">
      Internship Certificates
    </h3>

    <div className="certificate-grid">

      {/* Internship */}

      <div className="certificate-card">

        

        <h4>Java Full Stack Developer Internship</h4>

        <div className="certificate-buttons">

          <button
            onClick={() =>
              window.open('/JavaIntership.pdf', '_blank')
            }
          >
            Click
          </button>

        </div>


         <h4>AI - Machine Learning</h4>

        <div className="certificate-buttons">

          <button
            onClick={() =>
              window.open('/AI-MachineLearning.jpeg', '_blank')
            }
          >
            Click
          </button>

        </div>


      </div>

    </div>

  </div>

</section>

      {/* Contact */}

      <section className="contact-section reveal" id="contact">

        <h2>Contact Me</h2>

        <form className="contact-form">

          <input
            type="text"
            placeholder="Enter Name"
          />

          <input
            type="email"
            placeholder="Enter Email"
          />

          <textarea
            rows="6"
            placeholder="Enter Message"
          ></textarea>

          <button type="submit">
            Send Message
          </button>

        </form>

      </section>

      {/* Footer */}

      <footer>

        <p>
          © 2026 Karan Waghachoure |
          Full Stack Java Developer
        </p>

      </footer>

    </div>

  );

}

export default App;