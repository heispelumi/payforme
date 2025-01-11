import Hero from "./components/Hero";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="md:max-w-[1255px] mx-auto">
      <Nav />
      <div className=""> 
        <Hero />
      </div>
    </div>
  );
}

export default App;
