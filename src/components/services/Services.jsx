import "./services.css";
import { BsCheckLg } from "react-icons/bs";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsCheckLg className="service__list-icon" />
              <p> UX/UI design and code implementation.</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Offering services in wireframing.</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Offering services in prototyping.</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Offering services in visual design,.</p>
            </li>
            {/* End of UX/UI */}
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Responsive website design.</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Custom web application development.</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Website optimization and performance enhancement .</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Content management system (CMS) implementation.</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Search engine optimization.</p>
            </li>
            {/* End of web */}
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Compelling blog and article writing.</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Creative copywriting for websites and marketing materials.</p>
            </li>
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>Engaging social media content creation and management..</p>
            </li>

            {/* End of CC */}
          </ul>
        </article>
      </div>
    </section>
  );
};
export default Services;
