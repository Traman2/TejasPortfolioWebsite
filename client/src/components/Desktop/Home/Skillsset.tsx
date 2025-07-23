import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface SkillsetProps {
  openModal?: () => void;
}

export default function Skillset({ openModal }: SkillsetProps) {
  return (
    <>
      <div className="flex-2 bg-[#1D1C22] rounded-xl py-6 px-12">
        <div className="flex items-center">
          <img
            src="/icons/skillsSet/skillsHead.svg"
            alt="Skill Sets Logo"
            className="w-7 h-7 mr-4"
          />
          <h2 className="text-2xl font-bold text-[#CDD2D3]">Skill Sets</h2>
        </div>
        <div className="max-w-[500px]">
          <p className="text-[#CDD2D3] mt-4">
            So far I have created many projects that use MERN Stack (a tech stack that uses MongoDB, Express.js, React, and Node.js for Full Stack Web Development), and I am currently learning how to use the .NET Framework to create desktop applications. I have also designed and developed an AI Chat Advisor called Jarvis to help you out with any questions you have about my projects or my skills.
            <br/>
            <br/>
            I have worked on many projects with a Team and by myself. You can check out my various examples in my Project Portfolio section or my GitHub profile.Some of my skills set include:
          </p>
        </div>
        <div className="mt-2 space-y-5">
          <div className="flex items-center">
            <span className="text-[#fff] font-bold mr-2">
              Programming Languages:
            </span>
            <Tooltip>
              <TooltipTrigger>
                <img
                  src="/icons/techstack/csharp.svg"
                  alt="C#"
                  className="w-7 h-7 mr-2"
                />
              </TooltipTrigger>
              <TooltipContent>
                <p>C#</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger>
                <img
                  src="/icons/techstack/cplusplus.svg"
                  alt="C++"
                  className="w-7 h-7"
                />
              </TooltipTrigger>
              <TooltipContent>
                <p>C++</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger>
                <img
                  src="/icons/techstack/javascript.svg"
                  alt="JavaScript"
                  className="w-7 h-7 ml-3"
                />
              </TooltipTrigger>
              <TooltipContent>
                <p>JavaScript</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger>
                <img
                  src="/icons/techstack/typescript.svg"
                  alt="TypeScript"
                  className="w-7 h-7 ml-3"
                />
              </TooltipTrigger>
              <TooltipContent>
                <p>TypeScript</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger>
                <img
                  src="/icons/techstack/python.svg"
                  alt="Python"
                  className="w-7 h-7 ml-3"
                />
              </TooltipTrigger>
              <TooltipContent>
                <p>Python</p>
              </TooltipContent>
            </Tooltip>
          </div>
          <div className="flex items-center">
            <span className="text-[#fff] font-bold mr-2">Frontend:</span>
            <Tooltip>
              <TooltipTrigger>
                <img
                  src="/icons/techstack/react.svg"
                  alt="React"
                  className="w-7 h-7"
                />
              </TooltipTrigger>
              <TooltipContent>
                <p>React</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger>
                <img
                  src="/icons/techstack/tailwindcss.svg"
                  alt="TailwindCSS"
                  className="w-7 h-7 ml-2"
                />
              </TooltipTrigger>
              <TooltipContent>
                <p>TailwindCSS</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger>
                <img
                  src="/icons/techstack/figma.svg"
                  alt="Figma"
                  className="w-7 h-7 ml-2"
                />
              </TooltipTrigger>
              <TooltipContent>
                <p>Figma</p>
              </TooltipContent>
            </Tooltip>
          </div>
          <div className="flex items-center">
            <span className="text-[#fff] font-bold mr-2">Backend:</span>
            <Tooltip>
              <TooltipTrigger>
                <img
                  src="/icons/techstack/express.svg"
                  alt="Express.js"
                  className="w-7 h-7"
                />
              </TooltipTrigger>
              <TooltipContent>
                <p>Express.js</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger>
                <img
                  src="/icons/techstack/mongodb.svg"
                  alt="MongoDB"
                  className="w-7 h-7 ml-2"
                />
              </TooltipTrigger>
              <TooltipContent>
                <p>MongoDB</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger>
                <img
                  src="/icons/techstack/nodejs.svg"
                  alt="Node.js"
                  className="w-7 h-7 ml-2"
                />
              </TooltipTrigger>
              <TooltipContent>
                <p>Node.js</p>
              </TooltipContent>
            </Tooltip>
          </div>
          <div className="flex items-center">
            <span className="text-[#fff] font-bold mr-2">
              AI and ML Frameworks:
            </span>
            <Tooltip>
              <TooltipTrigger>
                <img
                  src="/icons/techstack/matplotlib.svg"
                  alt="Matplotlib"
                  className="w-7 h-7"
                />
              </TooltipTrigger>
              <TooltipContent>
                <p>Matplotlib</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger>
                <img
                  src="/icons/techstack/tensorflow.svg"
                  alt="TensorFlow"
                  className="w-7 h-7 ml-2"
                />
              </TooltipTrigger>
              <TooltipContent>
                <p>TensorFlow</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger>
                <img
                  src="/icons/techstack/scikitlearn.svg"
                  alt="Scikit-learn"
                  className="w-7 h-7 ml-2"
                />
              </TooltipTrigger>
              <TooltipContent>
                <p>Scikit-learn</p>
              </TooltipContent>
            </Tooltip>
          </div>
          <div className="flex items-center">
            <span className="text-[#fff] font-bold mr-2">Tools:</span>
            <Tooltip>
              <TooltipTrigger>
                <img
                  src="/icons/techstack/intellij.svg"
                  alt="IntelliJ IDEA"
                  className="w-7 h-7"
                />
              </TooltipTrigger>
              <TooltipContent>
                <p>IntelliJ IDEA</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger>
                <img
                  src="/icons/techstack/pycharm.svg"
                  alt="PyCharm"
                  className="w-7 h-7 ml-2"
                />
              </TooltipTrigger>
              <TooltipContent>
                <p>PyCharm</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger>
                <img
                  src="/icons/techstack/clion.svg"
                  alt="CLion"
                  className="w-7 h-7 ml-2"
                />
              </TooltipTrigger>
              <TooltipContent>
                <p>CLion</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger>
                <img
                  src="/icons/techstack/vscode.svg"
                  alt="VS Code"
                  className="w-7 h-7 ml-2"
                />
              </TooltipTrigger>
              <TooltipContent>
                <p>VS Code</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger>
                <img
                  src="/icons/techstack/visualstudio.svg"
                  alt="Visual Studio"
                  className="w-7 h-7 ml-2"
                />
              </TooltipTrigger>
              <TooltipContent>
                <p>Visual Studio</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger>
                <img
                  src="/icons/techstack/git.svg"
                  alt="Git"
                  className="w-7 h-7 ml-2"
                />
              </TooltipTrigger>
              <TooltipContent>
                <p>Git</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>
        <div className="max-w-[500px]">
          <p className="text-[#CDD2D3] mt-7">
            If you would like to contact me directly or have any questions, please feel free to reach out through my contact me page or directly via email at tejassraman@gmail.com
          </p>
        </div>
        <div className="mt-4">
          <button
            className="cursor-pointer flex items-center gap-3 py-2 bg-[#6DED97] px-6 rounded-xl text-sm font-semibold text-black hover:opacity-90 transition"
            onClick={openModal}
          >
            <span>Have Any Questions? Ask Jarvis</span>
          </button>
        </div>
      </div>
    </>
  );
}
