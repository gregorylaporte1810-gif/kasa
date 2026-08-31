import { NavLink } from "react-router-dom";
import logo from "../../assets/logo-kasa.svg";
import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <img
        className="header__logo"
        src={logo}
        alt="Kasa"
      />

      <nav className="header__nav">
        <NavLink className="header__link" to="/">
          Accueil
        </NavLink>

        <NavLink className="header__link" to="/about">
          À propos
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;