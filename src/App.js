// import logo from './logo.svg';
import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Project from './Components/Project';
import Resume from './Components/Resume';


function App() {
  return (
    <div className="font-bold">
      <Header/>
      <Hero/>
      <About/>
      <Project/>
      <Resume/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
