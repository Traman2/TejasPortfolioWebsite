import { useEffect, useState } from "react";
import SocketLayout from "./Desktop/SocketLayout";
import MobileHome from "./Mobile/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import Bowser from "bowser";
import Chatbot from "./Mobile/Chatbot";
import Projects from "./Mobile/Projects";
import { backendDomain } from "./lib/backendDomain";

function App() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1250);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const alreadySent = sessionStorage.getItem("clickLogged");

    if (alreadySent) return;
    sessionStorage.setItem("clickLogged", "true");
    const browser = Bowser.getParser(window.navigator.userAgent);
    const deviceInfo = browser.getResult();
    axios
      .post(
        `${backendDomain}/click`,
        {
          deviceType: `Browser: ${deviceInfo.browser.name}, Version: ${deviceInfo.browser.version},  OS: ${deviceInfo.os.name}`,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then(() => {})
      .catch((error) => {
        console.error("Upload error: ", error);
      });
  }, []);
  
  return (
    <>
      {isMobile ? (
        <>
          <Router>
            <Routes>
              <Route path="/Projects" element={<Projects />} />
              <Route path="/Chatbot" element={<Chatbot />} />
              <Route path="" element={<MobileHome />} />
            </Routes>
          </Router>
        </>
      ) : (
        <>
          <Router>
            <Routes>
              <Route path="" element={<SocketLayout page="" />} />
              <Route path="/Project" element={<SocketLayout page="Project" />} />
            </Routes>
          </Router>
        </>
      )}
    </>
  );
}

export default App;
