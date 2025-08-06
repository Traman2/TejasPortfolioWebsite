import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProjectData from "./projectData.json"

interface Project {
    imageURL: string;
    title: string;
    techStack: string[];
    description: string;
    githubURL: string;
    categories: string[];
    keyFeatures: string[];
}

export default function Projects() {
    const navigate = useNavigate();
    useEffect(() => {
        document.title = "2. Projects - Tejas Raman";
    }, []);
    const [activeProject, setActiveProject] = useState<Project | null>(null)

    return (
        <>
            {/* Horizontal Lines Y Lines*/}
            <div className="absolute inset-0 border-dashed border-x-2 border-primary mx-12 pointer-events-none"></div>
            <div className="w-screen h-screen bg-background flex flex-col cursor-main">
                <div className=" flex justify-center gap-12">
                    <button onClick={() => navigate("/")} className="cursor-pointer hover:underline my-3 font-heading text-accent">
                        Home
                    </button>
                    <button onClick={() => navigate("/Projects")} className="cursor-pointer hover:underline font-heading my-3 text-accent">
                        Projects
                    </button>
                    <button onClick={() => navigate("/About")} className="cursor-pointer hover:underline font-heading my-3 text-accent">
                        About
                    </button>
                    <button onClick={() => navigate("/Contact")} className="cursor-pointer hover:underline font-heading my-3 text-accent">
                        Contact Me
                    </button>
                </div>
                {/* l-Nothing | Center-Main Content | R-Nothing */}
                <div className="flex-1 flex border-y-2 border-dashed border-primary">
                    {/* Main Content */}
                    <div className="flex-1 mx-12">
                        <div className="flex flex-col px-12 py-6 h-full">
                            <div className="flex gap-8 flex-1">
                                <div className="flex-2 border-2 border-dashed border-primary">
                                    <h1 className="text-lg text-secondary font-heading py-3 border-b-2 border-dashed border-primary flex items-center justify-center gap-4">
                                        <img src="/icons/Projects/folder.svg" alt="Projects folder" className="w-7 h-7" />
                                        <p className="pt-1">Project Selection</p>
                                    </h1>
                                    <div className="flex flex-col items-start">
                                        {ProjectData.slice(0, 7).map((Project, index) => (
                                            <button onClick={() => setActiveProject(Project)} key={index} className="cursor-pointer hover:bg-accent hover:text-white transition-colors py-1 border-b-2 border-dashed border-primary w-full text-left pl-8 text-xl font-primary ">{index + 1}. {Project.title}</button>
                                        ))}
                                        <button onClick={() => setActiveProject(ProjectData[ProjectData.length - 1])} className="cursor-pointer hover:bg-accent hover:text-white transition-colors py-1 w-full text-left pl-8 text-xl font-primary ">{ProjectData.length}. {ProjectData[ProjectData.length - 1].title}</button>
                                    </div>
                                </div>
                                <div className="flex-3 border-2 border-dashed border-primary flex flex-col">

                                    {activeProject ?
                                        (
                                            <>
                                                <h1 className="text-lg h-14 text-secondary text-center font-heading py-3 pt-4 pl-8 border-b-2 border-dashed border-primary">{activeProject.title}</h1>
                                                <div className="px-8 pt-6 flex-auto h-80 overflow-y-auto scrollbar-primary">
                                                    <div className="flex gap-4">
                                                        <div className="flex-8 bg-[#D9D9D9] rounded-lg px-4 flex items-center">
                                                            <img src={activeProject.imageURL} className="object-cover rounded-lg my-4" />
                                                        </div>

                                                        <div className="flex flex-col flex-8">
                                                            <h2 className="font-primary text-2xl">Skills and Technologies</h2>
                                                            <div className="flex gap-2 flex-wrap ">
                                                                {activeProject.techStack.map((tech) => (
                                                                    <p className="font-footer bg-[#D9D9D9] px-4 py-1 rounded-xl">{tech}</p>
                                                                ))}
                                                            </div>
                                                            <h2 className="font-primary text-2xl mt-4">Categories</h2>
                                                            <div className="flex gap-2 flex-wrap ">
                                                            {activeProject.categories.map((categ) => (
                                                                    <p className="font-footer bg-[#D9D9D9] px-4 py-1 rounded-xl">{categ}</p>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <h2 className="font-primary text-2xl mt-4">Summary</h2>
                                                    <p className="font-footer">{activeProject.description}</p>
                                                    <h2 className="font-primary text-2xl mt-4">Key Features</h2>
                                                    <ul className="list-disc list-inside ml-4 space-y-1">
                                                        {activeProject.keyFeatures.map((feature, index) => (
                                                            <li key={index} className="font-footer">{feature}</li>
                                                        ))}
                                                    </ul>
                                                    <div className="pb-6">
                                                        <h2 className="font-primary text-2xl mt-4">Links</h2>
                                                        <a href={activeProject.githubURL} target="_blank" rel="noopener noreferrer" className="bg-[#2D2D76] px-4 py-1 text-white rounded-xl inline-flex gap-2 font-primary hover:text-black hover:bg-primary transition-colors cursor-pointer text-lg w-fit"><img src="icons/analytics/github.svg" className="w-5" /> Github Repository</a>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                        :
                                        (
                                            <>
                                                <div className="flex items-center justify-center h-full">
                                                    <p className="text-gray-500 text-sm font-footer">Please select a Project from the menu to get started</p>
                                                </div>
                                            </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Footer */}
                <div className="flex justify-center items-center h-12">
                    <p className="font-footer">Tejas Raman. Copyright 2025</p>
                </div>
            </div>
        </>
    )
}