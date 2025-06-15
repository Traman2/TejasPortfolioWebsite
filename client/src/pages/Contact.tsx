import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

export default function Contact() {
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

  return (
    <div className="min-h-screen w-full bg-[#0F3462] flex flex-col" onScroll={(e) => setSolid(e.currentTarget.scrollTop > 120)}>
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
                solid ? "translate-x-0 opacity-100 pt-0.5" : "-translate-x-4 opacity-0"
              }`}
            >
              Tejas Raman
            </span>
          </div>
          <div className="bg-[#1E6286]/90 rounded-[40px] px-3 py-2 mr-3">
            <div className="flex space-x-2 font-medium">
              <button
                className={`text-white cursor-pointer font-(family-name:--font-lalezar) hover:text-gray-200 px-3 py-1 rounded-[30px]`}
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
                className={`text-white cursor-pointer font-(family-name:--font-lalezar) hover:text-gray-200 px-3 py-1 rounded-[30px] bg-[#0096C7]`}
                onClick={() => contactHandler()}
              >
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </nav>
      <main className="flex-grow pt-45">
        <div className="max-w-[900px] mx-auto p-5">
          <div className="p-14 rounded-xl shadow-lg flex flex-col items-center bg-[#1E6286]">
            <h1
              className="text-5xl font-bold text-[#CAF0F8]"
            >
              Contact Form Coming Soon
            </h1>
            <p className="text-white text-lg mt-4 opacity-80">
              Currently working on some changes
            </p>
          </div>
        </div>
      </main>
      <footer className="mt-auto">
        <Footer/>
      </footer>
    </div>
  );
}
