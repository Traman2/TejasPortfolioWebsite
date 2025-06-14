import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Project from "./pages/Projects";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="" element={<Home/>} />
          <Route path="Project" element={<Project/>} />
          <Route path="Contact" element={<Contact/>} />
        </Routes>
      </Router>
    </>
  );
}
