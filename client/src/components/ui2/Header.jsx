import { useState } from "react";
import CV from "../ui/CV";
import About from "../ui/About";
import Skills from "../ui/Skills";
import Projects from "../ui/Projects";
import Contact from "../ui/Contact";
import Help from "./Help";

const Header = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState(null);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let result = null;

    switch (input.toLowerCase().trim()) {
      case "me -list":
        result = (
          <>
            <CV />
            <About />
          </>
        );
        break;
      case "skills -list":
        result = (
          <>
            <Skills />
          </>
        );
        break;
      case "projects -list":
        result = (
          <>
            <Projects />
          </>
        );
        break;
      case "contact -list":
        result = (
          <>
            <Contact />
          </>
        );
        break;
      case "help":
        result = (
          <>
            <Help />
          </>
        );

      default:
        break;
    }

    setOutput(result);
    setInput("");
  };
  return (
    <>
      <div className="flex mb-4">
        <p className="text-[#91b8d5] text-xl dm-mono-medium">
          KeremVona@Vona50
        </p>
        <p className="text-[#E7F2EF] text-xl dm-mono-medium ml-2">
          ~ <span className="text-[#D2C1B6]">$</span>
        </p>
        <form onSubmit={handleSubmit}>
          <input
            className="text-[#E7F2EF] text-xl dm-mono-medium ml-2 border-0 focus:outline-none"
            type="text"
            placeholder="Try help"
            onChange={handleChange}
          />
        </form>
      </div>
      <div className="output-area text-lg">{output}</div>
    </>
  );
};

export default Header;
