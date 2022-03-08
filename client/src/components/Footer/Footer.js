import React from "react";
import { Link } from "react-router-dom";
import linkedin from "../../images/linkedin.svg";
import github from "../../images/github.svg";
// import facebook from '../../images/facebook.svg';
// import website from '../../images/website.png';

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copyright">
        © {new Date().getFullYear()} Priyanka Kumari | News API
      </p>
      <div className="footer__content-container">
        <ul className="footer__content footer__links">
          <li className="footer__item">
            {/* <a className='footer__link' href='/'>
              Home
            </a> */}
            <Link className="footer__link" to="/">
              Home
            </Link>
          </li>
          <li className="footer__item">
            <a
              className="footer__link"
              href="https://www.condenast.com/"
              target="_blank"
              rel="noreferrer"
            >
              Assignment By Conde Nast
            </a>
          </li>
        </ul>
        <ul className="footer__content footer__icons">
          <li>
            <a
              href="https://github.com/preetipriyanka"
              target="_blank"
              rel="noreferrer"
            >
              <img src={github} alt="github" className="footer__icon" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/preetipriyanka24/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedin} alt="facebook" className="footer__icon" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
export default Footer;
