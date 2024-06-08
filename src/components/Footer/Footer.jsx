import "./Footer.css";

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
              Facebook
            </a>
            <a href="twitter.com/Zaph Travels" className="social-links">
              Twitter
            </a>
            <a href="linkedIn.com/Zaph Travels" className="social-links">
              LinkedIn
            </a>
            <a href="instagram.com/Zaph Travels" className="social-links">
              Instagram
            </a>
          </div>
        </div>
        <div className="footer-sitemap">
          <h2>Quick Links</h2>
          <a href="">Home</a>
          <a href="">Destination</a>
          <a href="">Trip</a>
          <a href="">Contact Us</a>
        </div>
        <div className="footer-contact-us">
          <p>Head offices</p>
          <p>email address</p>
          <p>Phone Number</p>
        </div>
      </div>
      <div className="footer-end">
        <h3>@Copyright 2024. Made with Love from Gods Child</h3>
      </div>
    </section>
  );
};

export default Footer;
