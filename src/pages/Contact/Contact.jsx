import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
// import { FaLocationDot } from "react-icons/fa6";
// import { FaRegEnvelope } from "react-icons/fa6";
// import { FiPhoneCall } from "react-icons/fi";
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
            <h3>Head Office</h3>
            <p>Lorem ipsum dolor sit.</p>
            <p>Lorem, ipsum dolor.</p>
          </div>
          <div className="contact-addins">
            <div className="icons"></div>
            <h3>Email Us: </h3>
            <p>Lorem ipsum dolor sit.</p>
            <p>Lorem, ipsum dolor.</p>
          </div>
          <div className="contact-addins">
            <div className="icons"></div>
            <h3>Call Us</h3>
            <p>Lorem ipsum dolor sit.</p>
            <p>Lorem, ipsum dolor.</p>
          </div>
          <hr />
          <div>
            <p>Follow our social media platforms.</p>
            <div className="socials">
              <a href="facebook.com/Zaph-Tours">
                <FaFacebook />
              </a>
              <a href="">
                <FaXTwitter />
              </a>
              <a href="">
                <FaLinkedin />
              </a>
              <a href="">
                <FaSquareInstagram />
              </a>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <form action="">
            <label htmlFor="fName">First Name: </label>
            <input type="text" name="fName" placeholder="John" />
            <label htmlFor="lName">Last Name: </label>
            <input type="text" name="lName" placeholder="Doe" />
            <label htmlFor="subject">Subject </label>
            <input type="text" name="fName" placeholder="subject" />
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              name="email"
              placeholder="johndoe@example.com"
            />
            <label htmlFor="message">Message: </label>
            <input
              type="textbox"
              name="message"
              placeholder="Write here your message"
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      <div className="location"></div>
    </section>
  );
};

export default Contact;
