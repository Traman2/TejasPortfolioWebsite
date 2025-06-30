import { useNavigate } from "react-router-dom";
import data from "../../../../projectData.json";

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
          {data.slice(0,3).map((post) => (
            <div className="bg-[#0077B6] border-[#979595] border-3 rounded-2xl p-4 w-full">
            <h3 className="text-white text-2xl font-['Lalezar'] mb-2">
              {post.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {post.techs.map((tech) => (
                <span className="bg-[#0E4C59] text-white px-4 py-1.5 rounded-full text-base">
                {tech}
              </span>
              ))}
            </div>
            <p className="text-white mt-3 text-lg">
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
