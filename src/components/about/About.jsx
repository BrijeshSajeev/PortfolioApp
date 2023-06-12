import "./about.css";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscProject } from "react-icons/vsc";
const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img
              src="https://images.pexels.com/photos/414523/pexels-photo-414523.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="me"
            />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1+ years Working</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>10+ Worldwide</small>
            </article>

            <article className="about__card">
              <VscProject className="about__icon" />
              <h5>Projects</h5>
              <small>20+ Projects</small>
            </article>
          </div>
          <p>
            I am Brijesh, a dedicated computer science and engineering student
            driven by a deep passion for technology. With a strong work ethic
            and a commitment to excellence, I thrive in problem-solving and have
            a keen interest in software development, hardware design, and
            machine learning.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};
export default About;
