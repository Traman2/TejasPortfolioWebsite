import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function MobileNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showName, setShowName] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setShowName(window.scrollY > 12);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigateTo = (path: string) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 w-full p-2 z-50">
        <div className="flex items-center justify-between">
          <div className={`flex items-center space-x-2 rounded-2xl px-2 py-2 ${showName ? "bg-[#174259]/90" : "bg-transparent"}`}>
            <img
              src="/tdesign--code.svg"
              alt="Logo"
              className="w-[30px] h-[30px] rounded-full p-1"
            />
            <span
              className={`font-medium text-white text-sm ml-1 pt-1 transition-all duration-300 ease-in-out transform font-(family-name:--font-lalezar) ${
                showName ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
              }`}
            >
              Tejas Raman
            </span>
          </div>
          <button onClick={toggleMenu} className="flex items-center cursor-pointer bg-[#174259]/90 rounded-2xl px-2 py-2">
            <span className="text-white text-sm font-(family-name:--font-lalezar) ml-1 pt-1 mr-2">Options</span>
            <div
              className="w-[30px] h-[30px] flex items-center justify-center"
            >
              <img
                src="/tdesign--menu-filled.svg"
                alt="Menu"
                className={`w-[30px] h-[30px] transition-transform duration-300 ${
                  isMenuOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </div>
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 bg-[#1E6286]/80 backdrop-blur-md z-40 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="h-full flex flex-col items-center justify-center space-y-8">
          <button
            onClick={() => navigateTo("/")}
            className="text-white text-2xl font-(family-name:--font-lalezar) hover:text-gray-200"
          >
            Home
          </button>
          <button
            onClick={() => navigateTo("/Project")}
            className="text-white text-2xl font-(family-name:--font-lalezar) hover:text-gray-200"
          >
            Project
          </button>
          <button
            onClick={() => navigateTo("/Contact")}
            className="text-white text-2xl font-(family-name:--font-lalezar) hover:text-gray-200"
          >
            Contact Me
          </button>
        </div>
      </div>
    </>
  );
} 