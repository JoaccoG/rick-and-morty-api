import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header__container">
      <div className="header-cont__logo">
        <Link to={'./'}>
          <img src="../assets/logo.png" alt="rick and morty logo" />
        </Link>
      </div>
      <input type="checkbox" id="hamb-menu" />
      <label htmlFor="hamb-menu">
        <img src="../assets/hamb-menu.svg" alt="" />
      </label>
      <nav className="header-cont__navbar">
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
    </header>
  );
};

export default Header;
