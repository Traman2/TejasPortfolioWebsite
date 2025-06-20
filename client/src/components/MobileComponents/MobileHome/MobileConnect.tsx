import { useState } from "react";

export default function MobileConnect() {
  const [activeSection, setActiveSection] = useState("about");

  return (
    <div className="w-full max-w-[89vw] mx-auto flex flex-col items-center mb-8 mt-16">
      <div className="flex items-center space-x-2 mb-6">
        <img src="/mdi--about.svg" alt="Connect" className="w-10 h-10" />
        <h2 className="text-white text-4xl font-(family-name:--font-lalezar) mt-1">
          Connect
        </h2>
      </div>

      <div className="flex w-full mb-6 gap-2">
        <button
          onClick={() => setActiveSection("about")}
          className={`text-white flex-1 text-lg px-4 py-3 rounded-lg font-semibold transition-all duration-200 ${
            activeSection === "about"
              ? "bg-[#0077B6] border-2 border-[#0077B6]"
              : "bg-transparent border-2 border-[#0077B6] hover:bg-[#0077B6]/50"
          }`}
        >
          About Me
        </button>
        <button
          onClick={() => setActiveSection("skills")}
          className={`text-white flex-1 text-lg px-4 py-3 rounded-lg font-semibold transition-all duration-200 ${
            activeSection === "skills"
              ? "bg-[#0077B6] border-2 border-[#0077B6]"
              : "bg-transparent border-2 border-[#0077B6] hover:bg-[#0077B6]/50"
          }`}
        >
          Technical Skills
        </button>
      </div>

      <div className="text-white mb-8 w-full">
        {activeSection === "about" ? (
          <>
            <p className="text-base leading-relaxed">
              I am actively seeking internship opportunities for Summer 2026,
              with a focus on software development and engineering roles. For
              potential opportunities, please connect with me on{" "}
              <a
                href="https://linkedin.com/in/tejas-raman-1a892b255/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0096C7] hover:text-[#00b4f0] transition-colors underline"
              >
                LinkedIn
              </a>
            </p>
            <p className="text-base mt-4 leading-relaxed">
              If you would like to contact me directly or have any questions,
              please feel free to reach out through my contact page or directly
              via email at{" "}
              <a
                href="mailto:tejassraman@gmail.com"
                className="text-[#0096C7] hover:text-[#00b4f0] transition-colors underline"
              >
                tejassraman@gmail.com
              </a>
            </p>
          </>
        ) : (
          <>
            <p className="text-base leading-relaxed">
              My technical skils cover multiple programming languages and modern
              web frameworks. I have strong proficiency in:
            </p>
            <div className="mt-4 space-y-2 text-base">
              <p className="leading-relaxed">
                <span className="font-bold">Programming Languages:</span>{" "}
                Java, C++, C#, Python
              </p>
              <p className="leading-relaxed">
                <span className="font-bold">Web Development:</span>{" "}
                JavaScript, TypeScript
              </p>
              <p className="leading-relaxed">
                <span className="font-bold">Frontend Technologies:</span>{" "}
                React.js, HTML5, CSS3, TailwindCSS
              </p>
              <p className="leading-relaxed">
                <span className="font-bold">Backend Development:</span>{" "}
                Node.js, Express.js
              </p>
            </div>
            <p className="text-base mt-4 leading-relaxed">
              This portfolio website showcases my experience with React.js,
              TailwindCSS, and Node.js, demonstrating my ability to create
              responsive and modern web applications with backend server logic
            </p>
          </>
        )}
      </div>

      <div className="flex flex-col space-y-4 w-full">
        <a
          href="/Tejas_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center bg-[#0077B6] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#005f8f] transition-colors w-full text-lg"
        >
          <span>View Resume</span>
          <img
            src="/material-icon-theme--pdf.svg"
            alt="PDF"
            className="w-6 h-6 ml-2"
          />
        </a>
        <a
          href="/contact"
          className="flex items-center justify-center bg-[#0077B6] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#005f8f] transition-colors w-full text-lg"
        >
          <img
            src="/fluent-color--contact-card-48.svg"
            alt="Contact"
            className="w-6 h-6 mr-2"
          />
          <span>Contact Me</span>
        </a>
      </div>
    </div>
  );
}
