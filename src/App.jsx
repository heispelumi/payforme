import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Partnership from "./components/Partnership";
import Users from "./components/Users";
import About from "./components/About";
import About2 from "./components/About2";
import Blog from "./components/Blog";
import Faq from "./components/Faq";

function App() {
  return (
    <div className="flex  bg-gray-100  flex-col">
      <div className="bg-gray-100">
      <Nav />
      </div>
      <div className="relative z-10">
        <Hero />
      </div>
      <div className="relative z-0  mt-[340px] md:mt-[500px]  lg:mt-[900px]">
        <Partnership />
      </div>
      <div className="relative z-0  mt-[10px] md:mt-[10px]  lg:mt-[10px]">
        <Users />
      </div>
      <div className="relative z-0  mt-[10px] md:mt-[10px]  lg:mt-[10px]">
        <About />
      </div>
      <div className="relative z-0  mt-[10px] md:mt-[10px]  lg:mt-[10px]">
        <About2 />
      </div>
      <div className="relative z-0  mt-[10px] md:mt-[10px]  lg:mt-[10px]">
        <Blog/>
      </div>
      <div className="relative z-0  mt-[10px] md:mt-[10px]  lg:mt-[10px]">
        <Faq/>
      </div>
    </div>
  );
}

export default App;
