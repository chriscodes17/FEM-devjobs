import logoIcon from "../assets/icons/logo.svg";
import moonIcon from "../assets/icons/icon-moon.svg";
import sunIcon from "../assets/icons/icon-sun.svg";
import { Link } from "react-router-dom";

export default function Header({ themeToggle }) {
  return (
    <div className="header-main">
      <div className="header-inner">
        <Link to={"/"}>
          <img src={logoIcon} alt="" />
        </Link>
        <div className="theme-toggle-container">
          <img src={sunIcon} alt="" />
          <label className="switch">
            <input onClick={themeToggle} type="checkbox" />
            <span className="slider round"></span>
          </label>
          <img src={moonIcon} alt="" />
        </div>
      </div>
    </div>
  );
}
