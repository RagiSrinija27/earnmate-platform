import "./Hero.css";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-content">

        <h1>
          Helping Students Grow.
          <br />
          Helping Communities Thrive.
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

      </div>

      <div className="hero-image">

        <div className="image-placeholder">
          Illustration Coming Soon
        </div>

      </div>

    </section>
  );
}

export default Hero;