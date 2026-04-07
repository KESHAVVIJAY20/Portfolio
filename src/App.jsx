import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import ScrollToTop from "./components/ScrolltoTop";

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
