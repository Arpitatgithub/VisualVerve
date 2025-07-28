import { Link } from "react-router-dom";
import '../css/Header.css';

function Header() {
  return (
    <header className="site-header">
      <div className="logo">Visualverve.studios</div>

      <nav className="main-nav">
        
        
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        
        {/* <a href="#">Directory</a>
        <a href="#">Academy <span className="badge">New</span></a>
        <a href="#">Jobs</a>
        <a href="#">Market</a> */}
      </nav>

      <div className="search-bar">
        <input type="text" placeholder="Search by Inspiration" />
      </div>

      <div className="auth-links">
        <a href="#">Log in</a>
        <a href="#">Sign Up</a>
      </div>

      <div className="action-buttons">
        <button className="pro-btn">Be Pro</button>
        <button className="submit-btn">Submit Website</button>
      </div>
    </header>
  );
}

export default Header;
