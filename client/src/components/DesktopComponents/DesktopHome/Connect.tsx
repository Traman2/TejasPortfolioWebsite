import { useState } from "react";

export default function Connect() {
  const [activeSection, setActiveSection] = useState("about");

  return (
    <>
      <div className="max-w-[900px] mx-auto mt-18 mb-25">
        <div className="flex flex-row justify-between items-start px-6">
          <div className="w-full">
            <div className="flex items-center space-x-4 mb-8">
              <img src="/mdi--about.svg" alt="Connect" className="w-12 h-12" />
              <h2 className="text-white text-5xl font-(family-name:--font-lalezar) mt-2">
                Connect
              </h2>
            </div>

            <div className="flex space-x-4 mb-6">
              <button
                onClick={() => setActiveSection("about")}
                className={`text-white px-4 py-2 rounded-lg font-semibold transition-colors cursor-pointer ${
                  activeSection === "about"
                    ? "bg-[#0077B6]"
                    : "bg-transparent hover:bg-[#0077B6]/50"
                }`}
              >
                About Me
              </button>
              <button
                onClick={() => setActiveSection("skills")}
                className={`text-white px-4 py-2 rounded-lg font-semibold transition-colors cursor-pointer ${
                  activeSection === "skills"
                    ? "bg-[#0077B6]"
                    : "bg-transparent hover:bg-[#0077B6]/50"
                }`}
              >
                Technical Skills
              </button>
            </div>

            <div className="text-white mb-8 max-w-[700px]">
              {activeSection === "about" ? (
                <>
                  <p className="text-lg leading-relaxed">
                    I am actively seeking internship opportunities for Summer
                    2026, with a focus on software development and engineering
                    roles. For potential opportunities, please connect with me
                    on{" "}
                    <a
                      href="https://linkedin.com/in/tejas-raman-1a892b255/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#0096C7] hover:text-[#00b4f0] transition-colors"
                    >
                      LinkedIn
                    </a>
                  </p>
                  <p className="text-lg mt-4 leading-relaxed">
                    If you would like to contact me directly or have any
                    questions, please feel free to reach out through my contact
                    page or directly via email at{" "}
                    <a
                      href="mailto:tejassraman@gmail.com"
                      className="text-[#0096C7] hover:text-[#00b4f0] transition-colors"
                    >
                      tejassraman@gmail.com
                    </a>
                  </p>
                </>
              ) : (
                <>
                  <p className="text-lg leading-relaxed">
                    My technical skils cover multiple programming languages and
                    modern web frameworks. I have strong proficiency in:
                  </p>
                  <div className="mt-4 space-y-2">
                    <p className="text-lg leading-relaxed">
                      <span className="font-bold">
                        Programming Languages:
                      </span>{" "}
                      Java, C++, C#
                    </p>
                    <p className="text-lg leading-relaxed">
                      <span className="font-bold">Web Development:</span>{" "}
                      JavaScript, TypeScript
                    </p>
                    <p className="text-lg leading-relaxed">
                      <span className="font-bold">
                        Frontend Technologies:
                      </span>{" "}
                      React.js, HTML5, CSS3, TailwindCSS
                    </p>
                    <p className="text-lg leading-relaxed">
                      <span className="font-bold">
                        Backend Development:
                      </span>{" "}
                      Node.js, Express.js
                    </p>
                  </div>
                  <p className="text-lg mt-4 leading-relaxed">
                    This portfolio website showcases my experience with
                    React.js, TailwindCSS, and Node.js, demonstrating my ability
                    to create responsive and modern web applications with
                    backend server logic
                  </p>
                </>
              )}
            </div>

            <div className="flex justify-start space-x-6">
              <a
                href="/Tejas_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-[#0077B6] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#005f8f] transition-colors"
              >
                <span>View Resume</span>
                <img
                  src="/material-icon-theme--pdf.svg"
                  alt="PDF"
                  className="w-6 h-6 ml-2"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
