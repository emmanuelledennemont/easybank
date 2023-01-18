import logo from "../../assets/images/logo.svg";
import facebook from "../../assets/images/icon-facebook.svg";
import twitter from "../../assets/images/icon-twitter.svg";
import pinterest from "../../assets/images/icon-pinterest.svg";
import instagram from "../../assets/images/icon-instagram.svg";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="footer__container container">
          <div className="footer__logo">
            <img src={logo} alt="logo compagny name" />
          </div>
          <div className="footer__social">
            <ul className="footer__social-list">
              <li className="footer__social-item">
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={facebook} alt="facebook icon" />
                </a>
              </li>
              <li className="footer__social-item">
                <a
                  href="https://www.twitter.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={twitter} alt="twitter icon" />
                </a>
              </li>
              <li className="footer__social-item">
                <a
                  href="https://www.pinterest.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={pinterest} alt="pinterest icon" />
                </a>
              </li>
              <li className="footer__social-item">
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={instagram} alt="instagram icon" />
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__links">
            <ul className="footer__links-list">
              <li className="footer__links-item">
                About Us
              </li>
              <li className="footer__links-item">
                Contact
              </li>
              <li className="footer__links-item">
                Blog
              </li>
              <li className="footer__links-item">
                Careers
              </li>
              <li className="footer__links-item">
                Support
              </li>
              <li className="footer__links-item">
                Privacy Policy
              </li>
            </ul>
          </div>
          <div className="footer__btn">
            <button className="btn">Request Invite</button>
          </div>

          <div className="footer__attribution">
            Challenge by
            <a
              href="https://www.frontendmentor.io?ref=challenge"
              target="_blank"
              rel="noreferrer"
            >
              Frontend Mentor
            </a>
            . Coded by Manue<a href="">.</a>@{new Date().getFullYear()}
            @Easybank.All Rights Reserved
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
