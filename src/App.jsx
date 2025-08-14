import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import PageTitle from "./Components/PageTitle";
import Projects from "./Components/Projects";
import Services from "./Components/Services";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <PageTitle idName="about" title="About Me" />
      <About />
      <PageTitle idName="services" title="My Services" />
      <Services />
      <PageTitle idName="portfolio" title="My Latest Work" />
      <Projects />
      <PageTitle idName="contact" title="Get in Touch" />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
