import './App.css';
import About from './Components/About';
import Hero from './Components/Hero';
import HeroTop from './Components/HeroTop';
import Nav from './Components/Nav';
import Target from './Components/Target';

function App() {
  return (
    <>
      <div className='text-bg-warning' style={{ paddingBottom: "2rem", marginTop:0 }}>
        
        <Nav />
        <HeroTop/>
        <div className="container my-3 mb-5">
          <Hero />
        </div>
        <About />
        <Target />
      </div>
    </>
  );
}

export default App;
