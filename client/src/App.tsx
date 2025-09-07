import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import ContactMe from "./pages/ContactMe";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="" element={<Home/>} />
        <Route path="projects" element={<Projects/>} /> 
        <Route path="projects/:projectName" element={<Projects />} />
        <Route path="about" element={<About/>} />   
        <Route path="contact" element={<ContactMe/>} />
        <Route path="*" element={<NotFound />} />         
      </Routes>
    </Router>
  )
}

export default App
