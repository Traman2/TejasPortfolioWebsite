import MobileNavbar from "../../components/MobileComponents/MobileNavbar";
import MobileFooter from "../../components/MobileComponents/MobileFooter";
import { useEffect } from "react";
import data from "../../../projectData.json";

export default function MobileProjects() {
  useEffect(() => {
    document.title = "Project - Tejas";
  }, []);

  return (
    <div className="min-h-screen w-full bg-[#0F3462] flex flex-col">
      <MobileNavbar />
      <main className="flex-grow pt-24 pb-6 px-2">
        <div className="w-full max-w-[89vw] mx-auto flex flex-col items-center mb-8">
          <div className="flex items-center space-x-2 mb-6">
            <img
              src="/pajamas--project.svg"
              alt="Projects"
              className="w-10 h-10"
            />
            <h1 className="text-white text-4xl mb-0.5 font-(family-name:--font-jaro)">
              Projects
            </h1>
          </div>
          <h2 className="text-white text-2xl font-(family-name:--font-lalezar) mb-5 text-center">
            Showcase of Projects I've Worked On and Contributed To
          </h2>
          <hr className="w-[60%] mx-auto border-t-1 border-white mb-7" />
          <div className="space-y-5 w-full">
            {data.map((post) => (
              <div className="bg-[#0077B6] border-[#979595] border-3 rounded-xl p-4 w-full">
              <h3 className="text-white text-2xl font-(family-name:--font-lalezar) mb-2">
                {post.title}
              </h3>
              <div className="flex flex-wrap gap-2 max-w-full mb-4">
                {post.techs.map((tech) => (
                  <span className="bg-[#0E4C59] text-white px-4 py-1.5 rounded-full text-base">
                  {tech}
                </span>
                ))}
                
              </div>
              <p className="text-white text-lg">
                {post.description}
              </p>
              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center mt-4 shadow-md bg-[#023E8A] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#005f8f] transition-colors mr-2"
              >
                Learn More
              </a>
            </div>
            ))}
          </div>
          <div className="flex justify-center mt-10">
            <a
              href="https://github.com/Traman2"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0077B6]/96 cursor-pointer text-white px-4 py-2 rounded-full font-semibold hover:bg-[#005f8f] transition-colors flex items-center gap-2 text-lg"
            >
              See More Projects on
              <img src="/mdi--github.svg" alt="GitHub" className="w-6 h-6" />
            </a>
          </div>
        </div>
      </main>
      <MobileFooter />
    </div>
  );
}
