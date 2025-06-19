export default function MobileAbout() {
  return (
    <>
      <div className="w-[90vw] flex flex-col items-center mt-10">
        <h2 className="text-[#ADE8F4] text-3xl font-['Lalezar'] text-left w-full">
          Learn, Code, Create
        </h2>
        <ul className="text-[#ADE8F4] text-base font-semibold mt-4 space-y-2 w-full">
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>CS Major @ UT Dallas</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>Learning NLPs, LLMs, and ML models</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>
              Building full-stack apps with React, TailwindCSS, Node, Express,
              MongoDB & more
            </span>
          </li>
        </ul>
        <div className="flex space-x-6 mt-12 bg-[#1E6286]/90 rounded-4xl px-6 py-4">
          <a
            href="https://github.com/Traman2"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <img src="/mdi--github.svg" alt="GitHub" className="w-8 h-8" />
          </a>
          <a
            href="https://linkedin.com/in/tejas-raman-1a892b255/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <img src="/mdi--linkedin.svg" alt="LinkedIn" className="w-8 h-8" />
          </a>
          <a
            href="mailto:tejassraman@gmail.com"
            className="hover:scale-110 transition-transform"
          >
            <img
              src="/ic--baseline-email.svg"
              alt="Email"
              className="w-8 h-8"
            />
          </a>
          <a
            href="https://devpost.com/Traman2"
            className="hover:scale-110 transition-transform"
          >
            <img
              src="/simple-icons--devpost.svg"
              alt="Devpost"
              className="w-8 h-8"
            />
          </a>
        </div>
      </div>
    </>
  );
}
