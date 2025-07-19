import ProjectCard from "../Projects/ProjectCard";

export default function ProjectsPreview() {
  return (
    <>
      <div className="mt-2 rounded-xl bg-[#1D1C22] px-12 py-6 text-lg">
        <div className="flex items-center">
          <img
            src="/icons/projects/folderFiles.svg"
            alt="Skill Sets Logo"
            className="w-7 h-7 mr-4"
          />
          <h2 className="text-2xl font-bold text-[#CDD2D3]">Projects</h2>
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <ProjectCard
            imageURL="/projectImages/ElevAIteLandingPage.png"
            title="ElevAIte"
            techStack={["react", "tailwindcss", "node"]}
            description="ElevAIte is a full-stack productivity app powered by a RAG based
                AI assistant that allows students to interact with a personal
                assistant to view and create classes, check bank balances, track
                expenses, and monitor internship statuses, all from a unified
                web management platform."
          />

          <ProjectCard
            imageURL="/projectImages/HousePredictionHeatMap.png"
            title="House Prediction Moddel"
            techStack={["React", "Node", "TailwindCSS", "Figma"]}
            description="Introduction to a machine learning project built to reinforce my
                skills in regression models like Linear Regression and Random
                Forest. Focused on data preprocessing, feature engineering,
                model tuning, and deploying a trained .pkl model integrated with
                a React frontend"
          />

          <ProjectCard
            imageURL="/projectImages/ElevAIteLandingPage.png"
            title="ElevAIte"
            techStack={["react", "tailwindcss", "node"]}
            description="ElevAIte is a full-stack productivity app powered by a RAG based
                AI assistant that allows students to interact with a personal
                assistant to view and create classes, check bank balances, track
                expenses, and monitor internship statuses, all from a unified
                web management platform."
          />
        </div>
        <div className="flex justify-center mt-6 ">
           <button className="bg-[#6DED97] px-6 py-2 shadow-lg text-sm rounded-4xl font-bold">
          Click to view more
        </button>
        </div>
       
      </div>
    </>
  );
}
