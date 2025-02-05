import { Link, Element } from "react-scroll";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Partnership from "./components/Partnership";
import Users from "./components/Users";
import About from "./components/About";
import About2 from "./components/About2";
import Blog from "./components/Blog";
import Faq from "./components/Faq";
import Partnership2 from "./components/Partnership2";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col bg-gray-100">
      <div className="bg-gray-100">
        <Nav />
      </div>

      {/* Navigation links for smooth scroll */}
  

      {/* Sections to scroll to */}
      <Element name="hero" className="relative z-10">
        <Hero />
      </Element>

      <Element name="partnership" className="relative z-0  mt-[340px] md:mt-[500px]  lg:mt-[900px]">
        <Partnership />
      </Element>

      <Element name="about" className="relative z-0  mt-[10px] md:mt-[10px]  lg:mt-[10px]">
        <Users />
      </Element>

      <Element name="about" className="relative z-0  mt-[10px] md:mt-[10px]  lg:mt-[10px]">
        <About />
      </Element>

      <Element name="about2" className="relative z-0  mt-[10px] md:mt-[10px]  lg:mt-[10px]">
        <About2 />
      </Element>

      <Element name="blog" className="relative z-0  mt-[10px] md:mt-[10px]  lg:mt-[10px]">
        <Blog />
      </Element>

      <Element name="faq" className="relative z-0  mt-[10px] md:mt-[10px]  lg:mt-[10px]">
        <Faq />
      </Element>

      <Element name="partnership2" className="relative z-0  mt-[10px] md:mt-[10px]  lg:mt-[10px]">
        <Partnership2 />
      </Element>

      {/* Footer */}
      <div className="relative z-0  mt-[10px] md:mt-[10px]  lg:mt-[10px]">
        <Footer />
      </div>
    </div>
  );
}

export default App;
