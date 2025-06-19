import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/DesktopComponents/Footer";

export default function Project() {
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
    <div
      className=" fixed inset-0 min-h-screen w-full overflow-y-auto bg-[#0F3462] flex flex-col"
      onScroll={(e) => setSolid(e.currentTarget.scrollTop > 120)}
    >
      {" "}
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
                className={`text-white cursor-pointer font-(family-name:--font-lalezar) hover:text-gray-200 px-3 py-1 rounded-[30px]`}
                onClick={() => homeHandler()}
              >
                Home
              </button>
              <button
                className="text-white cursor-pointer font-(family-name:--font-lalezar) hover:text-gray-200 px-3 py-1 rounded-[30px] bg-[#0096C7]"
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
      <main className="flex-grow mt-30">
        <div className="max-w-[870px] mx-auto flex flex-col items-center mb-12 px-4">
          <div className="flex items-center space-x-4 mb-8">
            <img
              src="/pajamas--project.svg"
              alt="Projects"
              className="w-12 h-12"
            />
            <h1 className="text-white text-5xl font-(family-name:--font-jaro) mb-1">Projects</h1>
          </div>
          <h2 className="text-white text-2xl font-(family-name:--font-lalezar) mb-6 text-center">
            Showcase of Projects I've Worked On and Contributed To
          </h2>
          <hr className="w-full border-t-1 border-white mb-8" />
          <div className="space-y-6 w-full">
            <div className="bg-[#0077B6]/50 border-[#979595] border-3 rounded-2xl p-6 w-full max-w-[870px] mx-auto">
              <h3 className="text-white text-3xl font-(family-name:--font-lalezar) mb-4">
                Bank Simulator
              </h3>
              <div className="flex flex-wrap gap-2 max-w-[600px]">
                <span className="bg-[#0E4C59] text-white px-3 py-1 rounded-full text-sm">
                  React
                </span>
                <span className="bg-[#0E4C59] text-white px-3 py-1 rounded-full text-sm">
                  TailwindCSS
                </span>
                <span className="bg-[#0E4C59] text-white px-3 py-1 rounded-full text-sm">
                  Node
                </span>
                <span className="bg-[#0E4C59] text-white px-3 py-1 rounded-full text-sm">
                  Express
                </span>
                <span className="bg-[#0E4C59] text-white px-3 py-1 rounded-full text-sm">
                  MongoDB
                </span>
                <span className="bg-[#0E4C59] text-white px-3 py-1 rounded-full text-sm">
                  JwT Tokens
                </span>
              </div>
              <p className="text-white mt-4">
                Full stack app that uses mongodb and react for route management,
                interactive user iterface, and jwt for
                authentication/authorization
              </p>
            </div>

            <div className="bg-[#0077B6]/50 border-[#979595] border-3 rounded-2xl p-6 w-full max-w-[870px] mx-auto">
              <h3 className="text-white text-3xl font-(family-name:--font-lalezar) mb-4">
                TaskMasterAI
              </h3>
              <div className="flex flex-wrap gap-2 max-w-[600px]">
                <span className="bg-[#0E4C59] text-white px-3 py-1 rounded-full text-sm">
                  MongoDB
                </span>
                <span className="bg-[#0E4C59] text-white px-3 py-1 rounded-full text-sm">
                  TailwindCSS
                </span>
                <span className="bg-[#0E4C59] text-white px-3 py-1 rounded-full text-sm">
                  React
                </span>
                <span className="bg-[#0E4C59] text-white px-3 py-1 rounded-full text-sm">
                  Express
                </span>
                <span className="bg-[#0E4C59] text-white px-3 py-1 rounded-full text-sm">
                  Flask
                </span>
                <span className="bg-[#0E4C59] text-white px-3 py-1 rounded-full text-sm">
                  Python
                </span>
              </div>
              <p className="text-white mt-4">
                A student workflow/time management system that uses AI to create
                a semester long study plan based off of course material, that
                connects you to the best resources and creates quizzes to help
                you gauge your knowledge.
              </p>
            </div>

            <div className="bg-[#0077B6]/50 border-[#979595] border-3 rounded-2xl p-6 w-full max-w-[870px] mx-auto">
              <h3 className="text-white text-3xl font-(family-name:--font-lalezar) mb-4">
                Personal Portfolio
              </h3>
              <div className="flex flex-wrap gap-2 max-w-[600px]">
                <span className="bg-[#0E4C59] text-white px-3 py-1 rounded-full text-sm">
                  React
                </span>
                <span className="bg-[#0E4C59] text-white px-3 py-1 rounded-full text-sm">
                  TailwindCSS
                </span>
                <span className="bg-[#0E4C59] text-white px-3 py-1 rounded-full text-sm">
                  Figma
                </span>
                <span className="bg-[#0E4C59] text-white px-3 py-1 rounded-full text-sm">
                  Vercel
                </span>
              </div>
              <p className="text-white mt-4">
                Web Portfolio to show my personal projects. Frontend uses
                React.js and TailwindCSS. Backend uses Node.js, Express,js,
                MongoDB, and NodeMailer. Website is hosted on Vercel for easier
                management of hosting and better insights on site activity
              </p>
            </div>

            <div className="bg-[#0077B6]/50 border-[#979595] border-3 rounded-2xl p-6 w-full max-w-[870px] mx-auto">
              <h3 className="text-white text-3xl font-(family-name:--font-lalezar) mb-4">
                Arkos
              </h3>
              <div className="flex flex-wrap gap-2 max-w-[600px]">
                <span className="bg-[#0E4C59] text-white px-3 py-1 rounded-full text-sm">
                  TailwindCSS
                </span>
                <span className="bg-[#0E4C59] text-white px-3 py-1 rounded-full text-sm">
                  RAG Model
                </span>
                <span className="bg-[#0E4C59] text-white px-3 py-1 rounded-full text-sm">
                  React
                </span>
                <span className="bg-[#0E4C59] text-white px-3 py-1 rounded-full text-sm">
                  Express
                </span>
                <span className="bg-[#0E4C59] text-white px-3 py-1 rounded-full text-sm">
                  Flask
                </span>
                <span className="bg-[#0E4C59] text-white px-3 py-1 rounded-full text-sm">
                  Python
                </span>
              </div>
              <p className="text-white mt-4">
                A web app that uses an AI powered RAG model to process financial
                reports and lets users quickly look up details like annual
                revenue and profit margins and also analyze Energy Consumption
                and gets tips on how to further minimize emissions
              </p>
            </div>

            <div className="bg-[#0077B6]/50 border-[#979595] border-3 rounded-2xl p-6 w-full max-w-[870px] mx-auto">
              <h3 className="text-white text-3xl font-(family-name:--font-lalezar) mb-4">
                SignLang
              </h3>
              <div className="flex flex-wrap gap-2 max-w-[600px]">
                <span className="bg-[#0E4C59] text-white px-3 py-1 rounded-full text-sm">
                  HTML
                </span>
                <span className="bg-[#0E4C59] text-white px-3 py-1 rounded-full text-sm">
                  CSS
                </span>
                <span className="bg-[#0E4C59] text-white px-3 py-1 rounded-full text-sm">
                  JavaScript
                </span>
                <span className="bg-[#0E4C59] text-white px-3 py-1 rounded-full text-sm">
                  TensorFlow.js
                </span>
              </div>
              <p className="text-white mt-4">
                An AI powered sign language recognizer using the users webcam
                and tensorflow.js to analyze the image and identify the hand
                sign
              </p>
            </div>
          </div>
          <div className="flex justify-center mt-14">
            <a
              href="https://github.com/Traman2"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => projectHandler()}
              className="bg-[#0077B6]/96 cursor-pointer text-white px-6 py-3 rounded-full font-semibold hover:bg-[#005f8f] transition-colors flex items-center gap-2"
            >
              See More Projects on
              <img src="/mdi--github.svg" alt="GitHub" className="w-6 h-6" />
            </a>
          </div>
        </div>
      </main>
      <footer className="mt-auto">
        <Footer />
      </footer>
    </div>
  );
}
