import Header from "../components/ui/Header";
import CV from "../components/ui/CV";
import About from "../components/ui/About";
import Skills from "../components/ui/Skills";
import Projects from "../components/ui/Projects";
import Contact from "../components/ui/Contact";

const Home = () => {
  return (
    <div className="mt-4 ml-4">
      <Header text={"me"} />
      <CV />
      <About />

      <Header text={"skills"} />
      <Skills />

      <Header text={"projects"} />
      <Projects />

      <Header text={"contact"} />
      <Contact />
    </div>
  );
};

export default Home;
