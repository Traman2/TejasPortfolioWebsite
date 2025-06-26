import { useNavigate } from "react-router-dom";

export default function MobileProjectPreview() {
  const navigate = useNavigate();

  const projectHandler = () => {
    navigate("/Project");
  };

  return (
    <>
      <div className="w-[90vw] mt-8">
        <div className="flex items-center justify-center space-x-2 mb-8">
          <img
            src="/pajamas--project.svg"
            alt="Connect"
            className="w-10 h-10"
          />
          <h2 className="text-white text-4xl font-(family-name:--font-lalezar) mt-1">
            Project
          </h2>
        </div>
        <div className="space-y-6">
          <div className="bg-[#0077B6] border-[#979595] border-3 rounded-2xl p-4 w-full">
            <h3 className="text-white text-2xl font-['Lalezar'] mb-2">
              Schedgy
            </h3>
            <div className="flex flex-wrap gap-2">
              <span className="bg-[#0E4C59] text-white px-4 py-1.5 rounded-full text-base">
                React
              </span>
              <span className="bg-[#0E4C59] text-white px-4 py-1.5 rounded-full text-base">
                TailwindCSS
              </span>
              <span className="bg-[#0E4C59] text-white px-4 py-1.5 rounded-full text-base">
                Node
              </span>
              <span className="bg-[#0E4C59] text-white px-4 py-1.5 rounded-full text-base">
                Express
              </span>
              <span className="bg-[#0E4C59] text-white px-4 py-1.5 rounded-full text-base">
                MongoDB
              </span>
            </div>
            <p className="text-white mt-3 text-lg">
              Schedgy is a full-stack productivity app for college students to
              manage assignments, track expenses, view payroll dates, and
              monitor finances from a unified dashboard.
            </p>
            <a
                href="https://github.com/Traman2/Schedgy"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center mt-4 shadow-md bg-[#023E8A] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#005f8f] transition-colors mr-2"
              >
                Learn More
              </a>
          </div>

          <div className="bg-[#0077B6] border-[#979595] border-3 rounded-2xl p-4 w-full">
            <h3 className="text-white text-2xl font-['Lalezar'] mb-2">
              TaskMasterAI
            </h3>
            <div className="flex flex-wrap gap-2">
              <span className="bg-[#0E4C59] text-white px-4 py-1.5 rounded-full text-base">
                MongoDB
              </span>
              <span className="bg-[#0E4C59] text-white px-4 py-1.5 rounded-full text-base">
                TailwindCSS
              </span>
              <span className="bg-[#0E4C59] text-white px-4 py-1.5 rounded-full text-base">
                React
              </span>
              <span className="bg-[#0E4C59] text-white px-4 py-1.5 rounded-full text-base">
                Express
              </span>
              <span className="bg-[#0E4C59] text-white px-4 py-1.5 rounded-full text-base">
                Flask
              </span>
              <span className="bg-[#0E4C59] text-white px-4 py-1.5 rounded-full text-base">
                Python
              </span>
            </div>
            <p className="text-white mt-3 text-lg">
              A student workflow/time management app that uses AI to create a
              semester long study plan based off of course material, that
              connects you to the best resources and creates quizzes to help you
              gauge your knowledge.
            </p>
            <a
                href="https://github.com/NovaBoltSpider10/taskmaster-web-client/tree/dev/tejas"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center mt-4 shadow-md bg-[#023E8A] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#005f8f] transition-colors mr-2"
              >
                Learn More
              </a>
          </div>

          <div className="bg-[#0077B6] border-[#979595] border-3 rounded-2xl p-4 w-full">
            <h3 className="text-white text-2xl font-['Lalezar'] mb-2">
              Personal Portfolio
            </h3>
            <div className="flex flex-wrap gap-2">
              <span className="bg-[#0E4C59] text-white px-4 py-1.5 rounded-full text-base">
                React
              </span>
              <span className="bg-[#0E4C59] text-white px-4 py-1.5 rounded-full text-base">
                TailwindCSS
              </span>
              <span className="bg-[#0E4C59] text-white px-4 py-1.5 rounded-full text-base">
                Figma
              </span>
              <span className="bg-[#0E4C59] text-white px-4 py-1.5 rounded-full text-base">
                Vercel
              </span>
            </div>
            <p className="text-white mt-3 text-lg">
              Web Portfolio to show my personal projects. Frontend uses React.js
              and TailwindCSS. Backend uses Node.js, Express,js, MongoDB, and
              NodeMailer. Website is hosted on Vercel for easier management of
              hosting and better insights on site activity
            </p>
            <a
                href="https://github.com/Traman2/TejasPortfolioWebsite"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center mt-4 bg-[#023E8A] text-white px-4 py-2 rounded-lg shadow-md font-medium hover:bg-[#005f8f] transition-colors mr-2"
              >
                Learn More
              </a>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <button
            onClick={projectHandler}
            className="bg-[#0077B6]/96 cursor-pointer text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#005f8f] transition-colors"
          >
            View all Projects
          </button>
        </div>
      </div>
    </>
  );
}
