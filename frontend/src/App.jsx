import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import PopularServices from "./components/PopularServices/PopularServices";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <PopularServices />
      <WhyChooseUs />
      <Footer />
      
    </>
  );
}

export default App;