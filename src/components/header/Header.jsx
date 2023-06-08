import "./header.css";
import "../../index.css";
import CTA from "./CTA";
import ME from "../../assets/me.jpeg";
import HeaderSocials from "./HeaderSocials";
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Brijesh S A</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img
            src="https://images.pexels.com/photos/16950033/pexels-photo-16950033/free-photo-of-alt-tattooed-man-in-london.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
            alt="me"
          />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};
export default Header;
