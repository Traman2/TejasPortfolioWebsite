import ProjectCard from "../ProjectCard";
import { useNavigate } from "react-router-dom";
import projects from "../../../../projectdata.json";

export default function ProjectsPreview() {
  const navigate = useNavigate();
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
          {
            projects.slice(0,3).map((proj) => (
              <ProjectCard key={proj.title} {...proj}/>
            ))
          }

        </div>
        <div className="flex justify-center mt-6 ">
          <button
            onClick={() => navigate("/Project")}
            className="cursor-pointer bg-[#6DED97] px-6 py-2 shadow-lg text-sm rounded-4xl font-bold"
          >
            Click to view more
          </button>
        </div>
      </div>
    </>
  );
}
