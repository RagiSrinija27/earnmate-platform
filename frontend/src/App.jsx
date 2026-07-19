import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import PopularServices from "./components/PopularServices/PopularServices";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import Stats from "./components/Stats/Stats";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <PopularServices />
      <WhyChooseUs />
      <Stats />
    </>
  );
}

export default App;