import "./Footer.css";
import logo from "../../assets/images/logo.png";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-top">

        <div className="footer-brand">

          <img src={logo} alt="EarnMate Logo" />

          <h2>EarnMate</h2>

          <p>
            Helping Students Grow.
            <br />
            Helping Communities Thrive.
          </p>

        </div>

        <div className="footer-links">

          <h3>Quick Links</h3>

          <a href="#">Home</a>
          <a href="#">Services</a>
          <a href="#">How It Works</a>
          <a href="#">About Us</a>
          <a href="#">Contact</a>

        </div>

        <div className="footer-links">

          <h3>For Students</h3>

          <a href="#">Become an Assistant</a>
          <a href="#">How It Works</a>
          <a href="#">Student Login</a>

        </div>

        <div className="footer-links">

          <h3>For Communities</h3>

          <a href="#">Find Assistance</a>
          <a href="#">How It Works</a>
          <a href="#">Community Login</a>

        </div>

        <div className="footer-links">

          <h3>Stay Connected</h3>

          <p>Get the latest updates and offers.</p>

          <div className="social-icons">

            <a href="#">📘</a>
            <a href="#">📷</a>
            <a href="#">🐦</a>
            <a href="#">💼</a>

          </div>

        </div>

      </div>

      <hr />

      <div className="footer-bottom">

        <p>© 2026 EarnMate. All rights reserved.</p>

        <div>

          <a href="#">Privacy Policy</a>

          <span>|</span>

          <a href="#">Terms & Conditions</a>

        </div>

      </div>

    </footer>
  );
}

export default Footer;