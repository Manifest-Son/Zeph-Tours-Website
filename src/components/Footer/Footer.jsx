import "./Footer.css";
import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaRegEnvelope } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer-container">
        <div className="footer-info">
          {/* <img src="" alt="Zaph Travels Logo" /> */}
          <div className="footer-logo"></div>
          <p className="footer-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <br /> Necessitatibus alias culpa fugit.
          </p>
          <div className="footer-socials">
            <a href="facebook.com/Zaph Travels" className="social-links">
              <FaFacebook />
            </a>
            <a href="twitter.com/Zaph Travels" className="social-links">
              <FaXTwitter />
            </a>
            <a href="linkedIn.com/Zaph Travels" className="social-links">
              <FaLinkedin />
            </a>
            <a href="instagram.com/Zaph Travels" className="social-links">
              <FaSquareInstagram />
            </a>
          </div>
        </div>
        <div className="footer-sitemap">
          <h2>Quick Links</h2>
          <a className="footer-links">
            <Link to="/">Home</Link>
          </a>
          <a className="footer-links">
            <Link to="/destination">Destination</Link>
          </a>
          <a className="footer-links">
            <Link to="/trips">Trip</Link>
          </a>
          <a className="footer-links">
            <Link to="/contact">Contact Us</Link>
          </a>
        </div>
        <div className="footer-contact-us">
          <p>
            <FaLocationDot /> Head offices: <br /> Harambee House, Muranga.
          </p>
          <p>
            <FaRegEnvelope /> Email address: <br /> info@zaphtours.co.ke
          </p>
          <p>
            <FiPhoneCall /> Phone Number: <br /> +254756389320{" "}
          </p>
        </div>
      </div>
      <div className="footer-end">
        <h3>@Copyright 2024. Made with Love from Gods Child</h3>
      </div>
    </section>
  );
};

export default Footer;
