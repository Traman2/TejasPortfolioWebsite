import { useEffect, useState } from "react";
import SocketLayout from "./Desktop/SocketLayout";
import Construction from "./Mobile/Construction";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import Bowser from "bowser";

function App() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 868);
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
        `https://tejas-portfolio-mail-server.vercel.app/click`,
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
          <Construction />
        </>
      ) : (
        <>
          <Router>
            <Routes>
              <Route path="" element={<SocketLayout page="" />} />
              <Route path="Project" element={<SocketLayout page="Project" />} />
            </Routes>
          </Router>
        </>
      )}
    </>
  );
}

export default App;
