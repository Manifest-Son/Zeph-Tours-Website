import "./Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <a href="" className="logo">
        Zaph Tours
      </a>
      <div className="nav-container">
        <nav className="header-nav-links">
          <ol className="navigation-links">
            <li>
              <a href="" className="links">
                Home
              </a>
            </li>
            <li>
              <a href="" className="links">
                Destination
              </a>
            </li>
            <li>
              <a href="" className="links">
                Trips
              </a>
            </li>
            <li>
              <a href="" className="links">
                Contacts
              </a>
            </li>
          </ol>
        </nav>
      </div>
      <button className="header-btn">Book Now</button>
    </div>
  );
};

export default Header;
