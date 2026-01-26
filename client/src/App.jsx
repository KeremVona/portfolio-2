import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";

import Home from "./pages/Home";
import Project1 from "./pages/Project1";
import Project2 from "./pages/Project2";
import CV from "./pages/CV";
import Home2 from "./pages/Home2";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/portfolio-2" element={<Home />} />
          <Route path="/portfolio-2-2" element={<Home2 />} />
          <Route path="/portfolio-2/projects/stajlog" element={<Project1 />} />
          <Route path="/portfolio-2/projects/buglist" element={<Project2 />} />
          <Route path="/portfolio-2/cv" element={<CV />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
