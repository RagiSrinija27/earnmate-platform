import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import PopularServices from "./components/PopularServices/PopularServices";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <PopularServices />
    </>
  );
}

export default App;