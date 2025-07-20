import ProjectCard from "../ProjectCard";
import { useState } from "react";
import projects from "../../../../projectdata.json"


interface Project {
  imageURL: string;
  title: string;
  techStack: string[];
  description: string;
  githubURL: string;
  webLink?: string;
}

function splitIntoColumns<T>(arr: T[], numCols: number): T[][] {
  const cols: T[][] = Array.from({ length: numCols }, () => []);
  arr.forEach((item, idx) => {
    cols[idx % numCols].push(item);
  });
  return cols;
}

const NAV_LINKS = [
  { label: "All Projects", value: "all", icon: "/icons/projects/projects.svg" },
  { label: "Desktop", value: "web", icon: "/icons/projects/browser.svg" },
  { label: "Machine Learning", value: "ml", icon: "/icons/projects/chart.svg" },
];

export default function ProjectMain() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredProjects = projects.filter((proj) => {
    return proj.value === activeTab || activeTab === "all"
  })
  const columns = splitIntoColumns<Project>(filteredProjects, 3);
  return (
    <>
      <div className="rounded-xl bg-[#1D1C22] px-12 py-7 text-lg">
        <div className="flex items-center">
          <img
            src="/icons/projects/folderFiles.svg"
            alt="Skill Sets Logo"
            className="w-7 h-7 mr-4"
          />
          <h2 className="text-2xl font-bold text-[#CDD2D3]">Projects Portfolio</h2>
        </div>
        <div className="mt-10 mb-4">
          <div className="relative flex justify-start gap-5 text-sm font-medium text-[#CDD2D3] border-b border-[#39394a]">
            {NAV_LINKS.map((link) => (
              <button
                key={link.value}
                className={
                  "pb-2 cursor-pointer transition-colors border-b-2 flex items-center gap-1 " +
                  (activeTab === link.value
                    ? "border-white text-white"
                    : "border-transparent text-[#CDD2D3]")
                }
                onClick={() => setActiveTab(link.value)}
              >
                <img src={link.icon} alt={link.label + " icon"} className="w-4 h-4" />
                {link.label}
              </button>
            ))}
          </div>
        </div>
        <div className="flex gap-8">
          {columns.map((col, colIdx) => (
            <div key={colIdx} className="flex flex-col gap-8 flex-1">
              {col.map((project, idx) => (
                <ProjectCard key={project.title + idx} {...project} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
