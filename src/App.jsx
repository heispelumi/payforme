import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Partnership from "./components/Partnership";
import Users from "./components/Users";

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
      <div className="relative z-0  mt-[50px] md:mt-[70px]  lg:mt-[10px]">
        <Users />
      </div>
    </div>
  );
}

export default App;
