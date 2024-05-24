// import Test from "./Test";
import "./app.scss";
import Competences from "./components/Competences/Cometences";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Feedback from "./components/feedback/Feedback";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";

const App = () => {
  return (
    <div>
      <Cursor />
      <section id="Home" >
        <Navbar />
        <Hero />
      </section>
      <section id="Compétences">
        <Competences />
      </section>
      <section id ="Services">
        <Services />
      </section>      
      <Portfolio />      
      <section id="Avis">
        <Feedback />
      </section>
      <section id="Contact">
        <Contact />
      </section>
      {/* Framer Motion Crash Course */}
      {/* <Test/>
    <Test/> */}
    </div>
  );
};

export default App;
