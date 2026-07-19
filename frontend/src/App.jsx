import "./App.css";

function App() {
  return (
    <>
      <header>
        <h2>EarnMate</h2>

        <nav>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Become Assistant</a>
          <a href="#">Login</a>
          <a href="#">Register</a>
        </nav>
      </header>

      <main>
        <h1>EarnMate</h1>

        <p className="tagline">
          Helping Students Grow.
          <br />
          Helping Communities Thrive.
        </p>

        <p className="description">
          Find trusted student assistants for everyday tasks while empowering
          students to earn flexible income with dignity and respect.
        </p>

        <div className="buttons">
          <button className="primary-btn">
            Find Assistance
          </button>

          <button className="secondary-btn">
            Become a Student Assistant
          </button>
        </div>
      </main>
    </>
  );
}

export default App;