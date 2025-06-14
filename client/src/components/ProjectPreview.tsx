import { useNavigate } from "react-router-dom";

export default function ProjectPreview() {
  const navigate = useNavigate();

  const projectHandler = () => {
    navigate("/Project");
  };

  return (
    <>
      <div className="max-w-[900px] mx-auto mt-20 mb-25">
        <div className="flex flex-col sm:flex-row justify-between items-start px-4 sm:px-6 md:px-8">
          <div className="w-full sm:w-auto">
            <div className="flex items-center space-x-4 mb-8">
              <img
                src="/pajamas--project.svg"
                alt="Projects"
                className="w-12 h-12"
              />
              <h2 className="text-white text-4xl sm:text-5xl font-bold">
                Projects
              </h2>
            </div>
            <div className="space-y-6">
              <div className="bg-[#0077B6]/50 rounded-2xl p-6 w-full sm:w-[550px]">
                <h3 className="text-white text-2xl sm:text-3xl font-semibold mb-4">
                  TaskMasterAI
                </h3>
                <div className="flex flex-wrap gap-2 max-w-[480px]">
                  <span className="bg-[#0E4C59] text-white px-3 py-1 rounded-full text-sm">
                    MongoDB
                  </span>
                  <span className="bg-[#0E4C59] text-white px-3 py-1 rounded-full text-sm">
                    Node.js
                  </span>
                  <span className="bg-[#0E4C59] text-white px-3 py-1 rounded-full text-sm">
                    React.js
                  </span>
                  <span className="bg-[#0E4C59] text-white px-3 py-1 rounded-full text-sm">
                    SocketIO
                  </span>
                  <span className="bg-[#0E4C59] text-white px-3 py-1 rounded-full text-sm">
                    Express.js
                  </span>
                  <span className="bg-[#0E4C59] text-white px-3 py-1 rounded-full text-sm">
                    Flask
                  </span>
                  <span className="bg-[#0E4C59] text-white px-3 py-1 rounded-full text-sm">
                    Python
                  </span>
                  <span className="bg-[#0E4C59] text-white px-3 py-1 rounded-full text-sm">
                    SkLearn
                  </span>
                </div>
                <p className="text-white mt-4">
                  TaskMasterAI is a social platform designed for students to
                  connect ...
                </p>
              </div>

              <div className="bg-[#0077B6]/50 rounded-2xl p-6 w-full sm:w-[550px]">
                <h3 className="text-white text-2xl sm:text-3xl font-semibold mb-4">
                  Automated Banker
                </h3>
                <div className="flex flex-wrap gap-2 max-w-[400px]">
                  <span className="bg-[#0E4C59] text-white px-3 py-1 rounded-full text-sm">
                    React
                  </span>
                  <span className="bg-[#0E4C59] text-white px-3 py-1 rounded-full text-sm">
                    TailwindCSS
                  </span>
                </div>
                <p className="text-white mt-4">
                  Full stack app that uses mongodb and react for route
                  management ...
                </p>
              </div>

              <div className="bg-[#0077B6]/50 rounded-2xl p-6 w-full sm:w-[550px]">
                <h3 className="text-white text-2xl sm:text-3xl font-semibold mb-4">
                  Personal Web Portfolio
                </h3>
                <div className="flex flex-wrap gap-2 max-w-[400px]">
                  <span className="bg-[#0E4C59] text-white px-3 py-1 rounded-full text-sm">
                    React.js
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
                  Website with all my projects, info, and about me
                </p>
              </div>
            </div>
            <div className="flex justify-center mt-8 w-full sm:w-[450px]">
              <button
                onClick={() => projectHandler()}
                className="bg-[#0077B6]/96 cursor-pointer text-white px-6 py-3 rounded-full font-semibold hover:bg-[#005f8f] transition-colors"
              >
                Click to View all Projects
              </button>
            </div>
          </div>
          <div className="bg-[#1E6286]/90 rounded-2xl p-6 flex flex-row sm:flex-col space-x-6 sm:space-x-0 sm:space-y-6 mt-8 sm:mt-0 mx-auto sm:mx-0">
            <a
              href="https://github.com/Traman2"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <img src="/mdi--github.svg" alt="GitHub" className="w-12 h-12" />
            </a>
            <a
              href="https://linkedin.com/in/tejas-raman-1a892b255/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <img
                src="/mdi--linkedin.svg"
                alt="LinkedIn"
                className="w-12 h-12"
              />
            </a>
            <a
              href="mailto:tejassraman@example.com"
              className="hover:scale-110 transition-transform"
            >
              <img
                src="/ic--baseline-email.svg"
                alt="Email"
                className="w-12 h-12"
              />
            </a>
            <a
              href="https://devpost.com/Traman2"
              className="hover:scale-110 transition-transform"
            >
              <img
                src="/simple-icons--devpost.svg"
                alt="Devpost"
                className="w-12 h-12"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
