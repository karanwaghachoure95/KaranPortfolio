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
      link: 'https://jijamatacollegeprojectkaran.onrender.com'
    },

    {
      title: 'AI Voice Assistant',
      desc: 'Smart voice assistant using Python with automation, command handling and AI features.',
      link: 'https://github.com/karanwaghachoure95/voice-assistant'
    },

      {
      title: 'Hardware Management System',
      desc: 'Modern responsive Hardware Management System website using Java ,Mysql ,  React JS, CSS and JavaScript.',
      link: 'https://github.com/karanwaghachoure95/HardwareManagementSystem'
    },
       {
      title: 'Food Order Management System',
      desc: 'Modern responsive Food Order Management System website using php ,Html, CSS and JavaScript ,PostgreSQL Database.',
      link: 'https://github.com/karanwaghachoure95/Food-Order-Management'
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

      <div className="about-content">


  <p>
    I am <span className="highlight">Karan Waghachoure</span>, a passionate and dedicated
    <span className="highlight"> Full Stack Java Developer</span>
    currently pursuing TY BSc Computer Science from Savitribai Phule Pune Institute.
    I enjoy developing modern, scalable, and user-friendly web applications
    along with powerful backend systems.
  </p>

  <p>
    My primary expertise lies in
    <span className="highlight"> Java Full Stack Development</span>,
    where I work with technologies like Core Java, Advanced Java,
    Spring Boot, Hibernate, JDBC, Servlets, JSP, MySQL,
    React JS, HTML, CSS, JavaScript, and REST APIs.
  </p>

  <p>
    I have strong knowledge of Object-Oriented Programming (OOP),
    Collections Framework, Exception Handling, Multithreading,
    Lambda Expressions, Maven, Git & GitHub, and database management.
    I also build responsive and attractive frontend interfaces using
    React JS and modern UI design principles.
  </p>

  <p>
    Apart from Java development, I also have knowledge of
    Python, PHP, C++, AI/ML concepts, Data Analytics,
    and Cloud technologies. I am familiar with AWS deployment,
    backend hosting, API integration, and deploying full-stack
    applications on cloud platforms.
  </p>

  <p>
    I am passionate about problem-solving, software architecture,
    and building real-world projects that provide practical solutions.
    I have worked on projects like College Management System,
    portfolio websites, and various full-stack applications.
  </p>

  <div className="skills-section">

    <h3>Technical Skills</h3>

    <div className="skills-grid">

      <div className="skill-card">
        <h4>Languages</h4>
        <p>Java, Python, C++, JavaScript, PHP, SQL</p>
      </div>

      <div className="skill-card">
        <h4>Frontend</h4>
        <p>HTML, CSS, JavaScript, React JS, Bootstrap</p>
      </div>

      <div className="skill-card">
        <h4>Backend</h4>
        <p>Spring Boot, Hibernate, JDBC, Servlets, JSP</p>
      </div>

      <div className="skill-card">
        <h4>Database</h4>
        <p>MySQL</p>
      </div>

      <div className="skill-card">
        <h4>Tools & Platforms</h4>
        <p>Git, GitHub, Maven, VS Code, Eclipse, IntelliJ IDEA</p>
      </div>

      <div className="skill-card">
        <h4>Cloud & Deployment</h4>
        <p>AWS, Render, Netlify</p>
      </div>

      <div className="skill-card">
        <h4>Other Concepts</h4>
        <p>REST API, OOP, Data Structures, AI/ML Basics</p>
      </div>

    </div>

  </div>

  <p className="career-goal">
    I am currently looking for opportunities where I can apply my
    technical knowledge, contribute to innovative projects,
    and grow as a professional software developer in the IT industry.
  </p>

</div>

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