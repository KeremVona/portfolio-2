import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Project1 from "./pages/Project1";
import Project2 from "./pages/Project2";
import CV from "./pages/CV";

function App() {
  const [count, setCount] = useState(0);

  /*
  
  bg- 19183B
  header- 234C6A
  strong- D2C1B6
  text- E7F2EF
  header2- A1C2BD

  */

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/projects/stajlog" element={<Project1 />} />
          <Route path="/projects/buglist" element={<Project2 />} />
          <Route path="/cv" element={<CV />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
