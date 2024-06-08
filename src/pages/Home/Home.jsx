import Hero from "./Hero";
import "./Home.css";
import About from "./About";
import WhyUs from "./WhyUs";
import Destination from "./Destination";
import Testimonial from "./Testimonial";
import Subscribe from "./Signup";

const Home = () => {
  return (
    <>
      <Hero />
      <WhyUs />
      <About />
      <Destination />
      <Testimonial />
      <Subscribe />
    </>
  );
};

export default Home;
