import Hero from "./Hero";
import "./Home.css";
import About from "./About";
import WhyUs from "./WhyUs";
import Destination from "./Destination";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <>
      <Hero />
      <WhyUs />
      <About />
      <Destination />
      <Testimonial />
    </>
  );
};

export default Home;
