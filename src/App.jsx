// import Test from "./Test";
import "./app.scss";
import Competences from "./components/Competences/Cometences";
import Contact from "./components/contact/Contact";
// import Cursor from "./components/cursor/Cursor";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Reviews from "./components/reviews/Reviews";
import Services from "./components/services/Services";

const App = () => {
  return (
    <div>
      {/* <Cursor /> */}
      <section id="Home">
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
        <Reviews  />
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
