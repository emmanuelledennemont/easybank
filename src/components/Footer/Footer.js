import logo from "../../assets/images/logo-w.svg";
import facebook from "../../assets/images/icon-facebook.svg";
import youtube from "../../assets/images/icon-youtube.svg";
import twitter from "../../assets/images/icon-twitter.svg";
import pinterest from "../../assets/images/icon-pinterest.svg";
import instagram from "../../assets/images/icon-instagram.svg";
import { useState } from "react";

const Footer = () => {

    const [listsFooter] = useState([
        { id: 1, name: "About Us" },
        { id: 2, name: "Contact" },
        { id: 3, name: "Blog" },
        { id: 4, name: "Careers" },
        { id: 5, name: "Support" },
        { id: 6, name: "Privacy Policy" }
      ]);
      const [listIcons] = useState([ 
        { id: 1, image: facebook, link: "https://www.facebook.com/" },
        { id: 2, image: youtube, link: "https://www.youtube.com/" },
        { id: 3, image: twitter, link: "https://www.twitter.com/" },
        { id: 4, image: pinterest, link: "https://www.pinterest.com/" },
        { id: 5, image: instagram, link: "https://www.instagram.com/" }
        ]);

  return (
    <>
      <footer className="footer">
        <div className="footer__container container">
          <div className="footer__logo">
            <img src={logo} alt="logo compagny name" />
          </div>
          <div className="footer__social">
            <ul className="footer__social-list">
            
            {listIcons.map((icon) => (
                <li className="footer__social-item" key={icon.id}>
                <a href={icon.link}
                target="_blank"
                rel="noreferrer"
                >
                <img src={icon.image
                } alt="logo compagny name" />
                </a>
                </li>
            ))}
            </ul>
          </div>
          <div className="footer__links">
            <ul className="footer__links-list">
                {listsFooter.map((list) => (
                    <li className="footer__links-item" key={list.id}>
                    {list.name}
                    </li>
                ))}
            </ul>
          </div>

          <div className="footer__btn">
            <button className="btn">Request Invite</button>
          </div>

          <div className="footer__attribution">
            Coded by Manue <div>@{new Date().getFullYear()} Easybank. All Rights Reserved</div>           
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
