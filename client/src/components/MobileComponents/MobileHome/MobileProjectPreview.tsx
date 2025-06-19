import { useNavigate } from "react-router-dom";

export default function MobileProjectPreview() {
  const navigate = useNavigate();

  const projectHandler = () => {
    navigate("/Project");
  };

  return (
    <>
      <div className="w-[90vw] mt-16">
        <div className="flex items-center space-x-4 mb-8">
          <img src="/pajamas--project.svg" alt="Projects" className="w-8 h-8" />
          <h2 className="text-white text-2xl font-['Lalezar']">Projects</h2>
        </div>
        <div className="space-y-6">
          <div className="bg-[#0077B6]/50 border-[#979595] border-3 rounded-2xl p-4 w-full">
            <h3 className="text-white text-2xl font-['Lalezar'] mb-2">
              Bank Simulator
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
              Full stack app that uses mongodb and react for route
              management ...
            </p>
          </div>

          <div className="bg-[#0077B6]/50 border-[#979595] border-3 rounded-2xl p-4 w-full">
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
              A student workflow/time management web app that uses Mong ...
            </p>
          </div>

          <div className="bg-[#0077B6]/50 border-[#979595] border-3 rounded-2xl p-4 w-full">
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
              Personal Web Portfolio to showcase academic achivements
              and ...
            </p>
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
