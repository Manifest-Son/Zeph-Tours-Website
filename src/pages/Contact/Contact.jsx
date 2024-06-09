import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaRegEnvelope } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";
// import { FaChevronRight } from "react-icons/fa";
// import { FaChevronDown } from "react-icons/fa6";

import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact-container">
      <h2 className="contact-header">Contact Us</h2>
      <div className="contact-wrapper">
        <div className="contact-socials">
          <h2>Get in touch</h2>
          <p className="contact-desc">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Consectetur voluptate dolorem et corporis a necessitatibus?
          </p>
          <div className="contact-addins">
            <div className="icons"></div>
            <h3>
              <FaLocationDot />
              Head Office
            </h3>
            <p>Lorem ipsum dolor sit.</p>
            <p>Lorem, ipsum dolor.</p>
          </div>
          <div className="contact-addins">
            <div className="icons"></div>
            <h3>
              <FaRegEnvelope />
              Email Us:{" "}
            </h3>
            <p>Lorem ipsum dolor sit.</p>
            <p>Lorem, ipsum dolor.</p>
          </div>
          <div className="contact-addins">
            <div className="icons"></div>
            <h3>
              <FiPhoneCall />
              Call Us
            </h3>
            <p>Lorem ipsum dolor sit.</p>
            <p>Lorem, ipsum dolor.</p>
          </div>
          <hr />
          <div>
            <p className="social-txt">Follow our social media platforms.</p>
            <div className="socials">
              <a href="facebook.com/Zaph-Tours" className="contact-links">
                <FaFacebook />
              </a>
              <a href="" className="contact-links">
                <FaXTwitter />
              </a>
              <a href="" className="contact-links">
                <FaLinkedin />
              </a>
              <a href="" className="contact-links">
                <FaSquareInstagram />
              </a>
            </div>
          </div>
        </div>

        <div>
          <form action="" className="contact-form">
            <label htmlFor="fName">First Name: </label>
            <input
              type="text"
              name="fName"
              placeholder="John"
              className="contact-input"
            />
            <label htmlFor="lName">Last Name: </label>
            <input
              type="text"
              name="lName"
              placeholder="Doe"
              className="contact-input"
            />
            <label htmlFor="subject">Subject </label>
            <input
              type="text"
              name="fName"
              placeholder="subject"
              className="contact-input"
            />
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              name="email"
              placeholder="johndoe@example.com"
              className="contact-input"
            />
            <label htmlFor="message">Message: </label>
            <input
              type="textbox"
              name="message"
              placeholder="Write here your message"
              className="contact-input"
            />
            <button type="submit" className="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className="location">
        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127644.27838379539!2d36.78433052908718!3d-1.2401873034031623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f47a013536429%3A0x18243e7d1e89c538!2sAJ%20Kenya%20Safaris%20Ltd%20-%20Tours%20and%20Travel!5e0!3m2!1sen!2ske!4v1717940354950!5m2!1sen!2ske" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" ></iframe> */}
      </div>
    </section>
  );
};

export default Contact;
