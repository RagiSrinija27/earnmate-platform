import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import PopularServices from "./components/PopularServices/PopularServices";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <PopularServices />
      <WhyChooseUs />
    </>
  );
}

export default App;