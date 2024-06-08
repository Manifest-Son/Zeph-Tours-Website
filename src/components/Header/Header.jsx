import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-container">
      <a href="" className="logo">
        Zaph Tours
      </a>
      <div className="nav-container">
        <nav className="header-nav-links">
          <ol className="navigation-links">
            <li className="links">
              <Link to="/">Home</Link>
            </li>
            <li className="links">
              <Link to="/destination">Destination</Link>
            </li>
            <li className="links">
              <Link to="/trips">Trips</Link>
            </li>
            <li className="links">
              <Link to="/contact">Contact</Link>
            </li>
          </ol>
        </nav>
      </div>
      <button className="header-btn">Book Now</button>
    </div>
  );
};

export default Header;
