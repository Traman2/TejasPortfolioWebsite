import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Hero from "../../components/DesktopComponents/DesktopHome/Hero";
import ProjectPreview from "../../components/DesktopComponents/DesktopHome/ProjectPreview";
import Connect from "../../components/DesktopComponents/DesktopHome/Connect";
import Footer from "../../components/DesktopComponents/Footer";
import axios from "axios";
import Bowser from "bowser";

export default function Home() {
  const [solid, setSolid] = useState(false);
  const navigate = useNavigate();

  const projectHandler = () => {
    navigate("/Project");
  };
  const homeHandler = () => {
    navigate("/");
  };
  const contactHandler = () => {
    navigate("/Contact");
  };

  useEffect(() => {
    document.title = "Home - Tejas";
  }, []);

  const hasSent = useRef(false);

  useEffect(() => {
    if (hasSent.current) return;
    hasSent.current = true;
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
      .then(() => {
      })
      .catch((error) => {
        console.error("Upload error: ", error);
      });
  }, []);

  return (
    <div
      className="fixed inset-0 min-h-screen w-full overflow-y-auto bg-[#0F3462]"
      onScroll={(e) => setSolid(e.currentTarget.scrollTop > 120)}
    >
      <nav className="fixed top-0 w-full p-4 z-50 mt-2">
        <div className="max-w-[900px] mx-auto flex flex-row items-center justify-between px-6 space-y-0">
          <div
            className={`flex items-center space-x-2 rounded-2xl px-2 py-2 ${
              solid ? "bg-[#1E6286]/90" : "bg-transparent"
            }`}
          >
            <img
              src="/tdesign--code.svg"
              alt="Logo"
              className="w-[30px] h-[30px]"
            />
            <span
              className={`font-medium text-white text-[18px] ml-1 transition-all duration-300 ease-in-out transform font-(family-name:--font-lalezar) ${
                solid
                  ? "translate-x-0 opacity-100 pt-0.5"
                  : "-translate-x-4 opacity-0"
              }`}
            >
              Tejas Raman
            </span>
          </div>
          <div className="bg-[#1E6286]/90 rounded-[40px] px-3 py-2 mr-3">
            <div className="flex space-x-2 font-medium">
              <button
                className={`text-white cursor-pointer font-(family-name:--font-lalezar) hover:text-gray-200 px-3 py-1 rounded-[30px] bg-[#0096C7]`}
                onClick={() => homeHandler()}
              >
                Home
              </button>
              <button
                className="text-white cursor-pointer font-(family-name:--font-lalezar) hover:text-gray-200 px-3 py-1 rounded-[30px]"
                onClick={() => projectHandler()}
              >
                Project
              </button>
              <button
                className={`text-white cursor-pointer font-(family-name:--font-lalezar) hover:text-gray-200 px-3 py-1 rounded-[30px]`}
                onClick={() => contactHandler()}
              >
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </nav>
      <Hero />
      <Connect />
      <ProjectPreview />
      <Footer />
    </div>
  );
}
