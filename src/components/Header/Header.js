import logo from "../../assets/images/logo.svg";
import burger from "../../assets/images/icon-hamburger.svg";
import close from "../../assets/images/icon-close.svg";
import { useState } from "react";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const btnClass = `btn ${showMenu ? "hidden" : ""}`;
  const iconClass = `menu-icon ${!showMenu ? "open" : "close"}`;

  const [lists] = useState([
    { id: 1, name: "Home" },
    { id: 2, name: "About" },
    { id: 3, name: "Contact" },
    { id: 4, name: "Blog" },
    { id: 5, name: "Careers" },
  ]);

  return (
    <>
      <header className="header">
        <nav className="navBar container">
          <div className="brand">
            <div className="brand__logo">
              <img src={logo} alt="logo compagny name" />
            </div>

            <div className="brand__toggle">
              <img
                className={iconClass}
                onClick={() => setShowMenu(!showMenu)}
                src={showMenu ? close : burger}
                alt="menu icon"
              />
            </div>
          </div>
        </nav>
        <div className={`modal ${showMenu ? "show" : "hidden"}`}>
          <div className="modal-content">
            <ul className="navBar__list">
              {lists.map((list) => (       
                  <li className="navBar__items" key={list.id}>
                    {list.name}
                  </li>
                )
              )}
            </ul>
            <button className={btnClass}>Request Invite</button>
          </div>
          <div
            className="modal-background"
            onClick={() => setShowMenu(false)}
          />
        </div>
      </header>
    </>
  );
};

export default Header;
