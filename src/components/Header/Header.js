import logo from "../../assets/images/logo.svg";
import burger from "../../assets/images/icon-hamburger.svg";
import {useState} from "react";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
        <nav className="navBar container">
          <div className="brand">
            <div className="logo">
              <img src={logo} alt="logo compagny name" />
            </div>
            <div className="menu__toggle">
              <img src={burger} alt="" />
            </div>
          </div>
          <div className="navBar__menu">
            <ul className="navBar__list">
              <li className="navBar__items">Home</li>
              <li className="navBar__items">About</li>
              <li className="navBar__items">Contact</li>
              <li className="navBar__items">Blog</li>
              <li className="navBar__items">Careers</li>
            </ul>
          </div>
        </nav>
    </>
  );
};

export default Header;
