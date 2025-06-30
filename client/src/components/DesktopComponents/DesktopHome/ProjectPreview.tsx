import { useNavigate } from "react-router-dom";
import data from "../../../../projectData.json";

export default function ProjectPreview() {
  const navigate = useNavigate();

  const projectHandler = () => {
    navigate("/Project");
  };

  return (
    <>
      <div className="max-w-[900px] mx-auto mt-18 mb-25">
        <div className="flex flex-row justify-between items-start px-6">
          <div className="w-auto">
            <div className="flex items-center space-x-4 mb-8">
              <img
                src="/pajamas--project.svg"
                alt="Projects"
                className="w-12 h-12"
              />
              <h2 className="text-white text-5xl font-(family-name:--font-lalezar) mt-2">
                Projects
              </h2>
            </div>
            <div className="space-y-6">
              {data.map((post) => (
                <div className="bg-[#0077B6] border-[#979595] border-3 rounded-2xl p-6 w-[550px]">
                <h3 className="text-white text-3xl font-(family-name:--font-lalezar) mb-4">
                  {post.title}
                </h3>
                <div className="flex flex-wrap gap-2 max-w-[400px]">
                  {post.techs.map((tech) => (
                    <span className="bg-[#0E4C59] text-white px-3 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                  ))}
                </div>
                <p className="text-white mt-4">
                  {post.description}
                </p>
                <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center mt-4 bg-[#023E8A] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#005f8f] transition-colors"
              >
                Learn More
              </a>
              </div>
              ))}
            </div>
            <div className="flex justify-center mt-8">
              <button
                onClick={() => projectHandler()}
                className="bg-[#0077B6]/96 cursor-pointer text-white px-6 py-3 rounded-full font-semibold hover:bg-[#005f8f] transition-colors"
              >
                Click to View all Projects
              </button>
            </div>
          </div>
          <div className="bg-[#1E6286]/90 rounded-2xl p-6 flex flex-col space-x-0 space-y-6">
            <a
              href="https://github.com/Traman2"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <img src="/mdi--github.svg" alt="GitHub" className="w-12 h-12" />
            </a>
            <a
              href="https://linkedin.com/in/tejas-raman-1a892b255/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <img
                src="/mdi--linkedin.svg"
                alt="LinkedIn"
                className="w-12 h-12"
              />
            </a>
            <a
              href="mailto:tejassraman@gmail.com"
              className="hover:scale-110 transition-transform"
            >
              <img
                src="/ic--baseline-email.svg"
                alt="Email"
                className="w-12 h-12"
              />
            </a>
            <a
              href="https://devpost.com/Traman2"
              className="hover:scale-110 transition-transform"
            >
              <img
                src="/simple-icons--devpost.svg"
                alt="Devpost"
                className="w-12 h-12"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
