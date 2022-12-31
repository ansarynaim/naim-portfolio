
import Contact from "./components/Contact";
import Experience from "./components/Experiece";
import Footer from "./components/Footer";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <Projects/>
      <Skills/>
      <Experience/>
      <Contact />
      <Footer/>
      <SocialLinks />
    </div>
  );
}

export default App;
