export default function Projects() {
  return (
    <>
      <div className="mt-2 rounded-xl bg-[#1D1C22] px-12 py-6 text-white text-lg font-semibold">
        <div className="flex items-center">
          <img
            src="/icons/projects/folderFiles.svg"
            alt="Skill Sets Logo"
            className="w-7 h-7 mr-4"
          />
          <h2 className="text-2xl font-bold text-[#CDD2D3]">Projects</h2>
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div className="rounded-2xl overflow-hidden bg-[#17151D] shadow-lg flex flex-col">
            <div className="relative flex justify-center items-center">
              <img
                src="/projectImages/ElevAIteLandingPage.png"
                alt="ElevAIte Preview"
                className="max-w-full max-h-full"
              />
              <div className="absolute inset-0 bg-[#17151D] opacity-60" />
            </div>
            <div className="p-6 flex flex-col">
              <div className="text-2xl font-semibold text-white mb-3">
                ElevAIte
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Node", "MongoDB", "TailwindCSS", "Figma"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-[#0E4C59] text-white px-3 py-1 text-xs font-medium"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="text-[#CDD2D3] mt-6 text-sm">
                ElevAIte is a full-stack productivity app powered by a RAG based
                AI assistant that allows students to interact with a personal
                assistant to view and create classes, check bank balances, track
                expenses, and monitor internship statuses, all from a unified
                web management platform.
              </div>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden bg-[#17151D] shadow-lg flex flex-col">
            <div className="relative flex justify-center items-center">
              <img
                src="/projectImages/HousePredictionHeatMap.png"
                alt="ElevAIte Preview"
                className="max-w-full max-h-full"
              />
              <div className="absolute inset-0 bg-[#17151D] opacity-60" />
            </div>
            <div className="p-6 flex flex-col">
              <div className="text-2xl font-semibold text-white mb-3">
                House Predicton Model
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Node", "MongoDB", "TailwindCSS", "Figma"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-[#0E4C59] text-white px-3 py-1 text-xs font-medium"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="text-[#CDD2D3] mt-6 text-sm">
                Introduction to a machine learning project built to reinforce my
                skills in regression models like Linear Regression and Random
                Forest. Focused on data preprocessing, feature engineering,
                model tuning, and deploying a trained .pkl model integrated with
                a React frontend
              </div>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden bg-[#17151D] shadow-lg flex flex-col">
            <div className="relative flex justify-center items-center">
              <img
                src="/projectImages/ElevAIteLandingPage.png"
                alt="ElevAIte Preview"
                className="max-w-full max-h-full"
              />
              <div className="absolute inset-0 bg-[#17151D] opacity-60" />
            </div>
            <div className="p-6 flex flex-col">
              <div className="text-2xl font-semibold text-white mb-3">
                ElevAIte
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Node", "MongoDB", "TailwindCSS", "Figma"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-[#0E4C59] text-white px-3 py-1 text-xs font-medium"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="text-[#CDD2D3] mt-6 text-sm">
                ElevAIte is a full-stack productivity app powered by a RAG based
                AI assistant that allows students to interact with a personal
                assistant to view and create classes, check bank balances, track
                expenses, and monitor internship statuses, all from a unified
                web management platform.
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
