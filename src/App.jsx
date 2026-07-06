import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Gallery from "./Pages/Gallery";
import Contact from "./Pages/Contact"; 
import ProjectDetails from "./Pages/ProjectDetails";

import ScrollToTop from "./Components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>

    <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />   
      </Routes>
    </BrowserRouter>
  );
}

export default App;    

