import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer__cont">
      <img
        className="footer-cont__logo"
        src="../assets/logo.svg"
        alt="rick-and-morty-logo"
      />
      <nav className="footer-cont__navbar">
        <ul>
          <li>
            <Link to={'./'}>Home</Link>
          </li>
          <li>
            <Link to={'characters'}>Characters</Link>
          </li>
          <li>
            <Link to={'planets'}>Planets</Link>
          </li>
          <li>
            <Link to={'favorites'}>Favorites</Link>
          </li>
          <li>
            <Link to={'contact'}>Contact</Link>
          </li>
        </ul>
      </nav>

      <div className="social__container">
        <p role="paragraph" className="social-container__title">
          Developers Github
        </p>
        <ul className="social-container">
          <li>
            <a
              href="https://github.com/JoaccoG"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="social-container__logo"
                src="../assets/github-logo.png"
                alt="github-logo"
              />
            </a>
          </li>
          <li>
            <a href="https://github.com/Huck8" target="_blank" rel="noreferrer">
              <img
                className="social-container__logo"
                src="../assets/github-logo.png"
                alt="github-logo"
              />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Fleyvad/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="social-container__logo"
                src="../assets/github-logo.png"
                alt="github-logo"
              />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
