import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react';

import DesktopHome from "./pages/Desktop/Home";
import DesktopProject from "./pages/Desktop/Projects";
import DesktopContact from "./pages/Desktop/Contact";

import MobileHome from "./pages/Mobile/MobileHome";
import MobileProject from "./pages/Mobile/MobileProjects";
import MobileContact from "./pages/Mobile/MobileContact";

export default function App() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  return isMobile ? (
    <>
      <Router>
        <Routes>
          <Route path="" element={<MobileHome/>} />
          <Route path="Project" element={<MobileProject/>} />
          <Route path="Contact" element={<MobileContact/>} />
        </Routes>
      </Router>
    </>
  ) : (
    <>
    <Router>
        <Routes>
          <Route path="" element={<DesktopHome/>} />
          <Route path="Project" element={<DesktopProject/>} />
          <Route path="Contact" element={<DesktopContact/>} />
        </Routes>
      </Router>
    </>
  );
}
