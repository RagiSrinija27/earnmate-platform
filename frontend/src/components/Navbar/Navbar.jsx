import "./Navbar.css";
import logo from "../../assets/logo.png";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        <img src={logo} alt="EarnMate Logo" />
      </div>

      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">How It Works</a></li>
      </ul>

      <div className="nav-buttons">
        <button className="login-btn">Login</button>
        <button className="register-btn">Register</button>
      </div>

    </nav>
  );
}

export default Navbar;