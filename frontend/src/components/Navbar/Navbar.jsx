import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">

      <div className="logo">
        EarnMate
      </div>

      <nav className="nav-links">
        <a href="#">Home</a>
        <a href="#">Services</a>
        <a href="#">About</a>
        <a href="#">How It Works</a>
      </nav>

      <div className="nav-buttons">
        <button className="login-btn">
          Login
        </button>

        <button className="register-btn">
          Register
        </button>
      </div>

    </header>
  );
}

export default Navbar;