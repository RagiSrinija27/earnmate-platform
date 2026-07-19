import "./Hero.css";
import heroImage from "../../assets/images/hero.png";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">

        <div className="hero-badge">
          🛡 Trusted by Students & Communities
        </div>

        <h1>
          Helping <span>Students</span> Grow.
          <br />
          Helping <span>Communities</span> Thrive.
        </h1>

        <p>
          EarnMate connects trusted student assistants with local
          communities, making everyday tasks easier while helping
          students earn flexible income with dignity.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">
            Find Assistance
          </button>

          <button className="secondary-btn">
            Become a Student Assistant
          </button>
        </div>

        <div className="hero-features">
          <div>✔ Safe & Verified</div>
          <div>💰 Affordable</div>
          <div>🤝 Reliable Support</div>
        </div>

      </div>

      <div className="hero-image">
        <img src={heroImage} alt="EarnMate Hero" />
      </div>
    </section>
  );
}

export default Hero;