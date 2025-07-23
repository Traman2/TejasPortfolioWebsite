
export default function MobileSkills() {
    return (
        <div className="bg-[#1D1C22] rounded-lg p-5 mb-3">
            <div className="flex items-center mb-3">
                <img
                    src="/icons/skillsSet/skillsHead.svg"
                    alt="Skill Sets Logo"
                    className="w-6 h-6 mr-3"
                />
                <h2 className="text-lg font-bold text-[#CDD2D3]">Skill Sets</h2>
            </div>
            <p className="text-[#B4B4B4] text-sm mb-4">
                So far I have created many projects that use MERN Stack (a tech stack that uses MongoDB, Express.js, React, and Node.js for Full Stack Web Development), and I am currently learning how to use the .NET Framework to create desktop applications. I have also designed and developed an AI Chat Advisor called Jarvis to help you out with any questions you have about my projects or my skills.
                <br />
                <br />
                I have worked on many projects with a Team and by myself. You can check out my various examples in my Project Portfolio section or my GitHub profile. Some of my skills set include:
            </p>
            <div className="space-y-3">
                <div className="flex items-center flex-wrap mb-1">
                    <span className="text-white font-bold mr-2 text-sm">Programming Languages:</span>
                    <img src="/icons/techstack/csharp.svg" alt="C#" className="w-5 h-5 mr-1" />
                    <img src="/icons/techstack/cplusplus.svg" alt="C++" className="w-5 h-5 mr-1" />
                    <img src="/icons/techstack/javascript.svg" alt="JavaScript" className="w-5 h-5 mr-1" />
                    <img src="/icons/techstack/typescript.svg" alt="TypeScript" className="w-5 h-5 mr-1" />
                    <img src="/icons/techstack/python.svg" alt="Python" className="w-5 h-5" />
                </div>
                <div className="flex items-center flex-wrap mb-1">
                    <span className="text-white font-bold mr-2 text-sm">Frontend:</span>
                    <img src="/icons/techstack/react.svg" alt="React" className="w-5 h-5 mr-1" />
                    <img src="/icons/techstack/tailwindcss.svg" alt="TailwindCSS" className="w-5 h-5 mr-1" />
                    <img src="/icons/techstack/figma.svg" alt="Figma" className="w-5 h-5" />
                </div>
                <div className="flex items-center flex-wrap mb-1">
                    <span className="text-white font-bold mr-2 text-sm">Backend:</span>
                    <img src="/icons/techstack/express.svg" alt="Express.js" className="w-5 h-5 mr-1" />
                    <img src="/icons/techstack/mongodb.svg" alt="MongoDB" className="w-5 h-5 mr-1" />
                    <img src="/icons/techstack/nodejs.svg" alt="Node.js" className="w-5 h-5" />
                </div>
                <div className="flex items-center flex-wrap mb-1">
                    <span className="text-white font-bold mr-2 text-sm">AI and ML Frameworks:</span>
                    <img src="/icons/techstack/matplotlib.svg" alt="Matplotlib" className="w-5 h-5 mr-1" />
                    <img src="/icons/techstack/tensorflow.svg" alt="TensorFlow" className="w-5 h-5 mr-1" />
                    <img src="/icons/techstack/scikitlearn.svg" alt="Scikit-learn" className="w-5 h-5" />
                </div>
                <div className="flex items-center flex-wrap mb-1">
                    <span className="text-white font-bold mr-2 text-sm">Tools:</span>
                    <img src="/icons/techstack/intellij.svg" alt="IntelliJ IDEA" className="w-5 h-5 mr-1" />
                    <img src="/icons/techstack/pycharm.svg" alt="PyCharm" className="w-5 h-5 mr-1" />
                    <img src="/icons/techstack/clion.svg" alt="CLion" className="w-5 h-5 mr-1" />
                    <img src="/icons/techstack/vscode.svg" alt="VS Code" className="w-5 h-5 mr-1" />
                    <img src="/icons/techstack/visualstudio.svg" alt="Visual Studio" className="w-5 h-5 mr-1" />
                    <img src="/icons/techstack/git.svg" alt="Git" className="w-5 h-5" />
                </div>
            </div>
            <p className="text-[#B4B4B4] text-sm mt-5">
                If you would like to contact me directly or have any questions, please feel free to reach out through my contact me page or directly via email at tejassraman@gmail.com
            </p>
            <div className="mt-6 flex justify-center">
                <button
                    className="flex items-center gap-2 py-2 px-4 bg-[#6DED97] rounded-2xl text-xs font-semibold text-black shadow font-bold transition-colors duration-200 hover:bg-[#4ec87a] focus:outline-none"
                >
                    <span>Have Any Questions? Ask Jarvis</span>
                </button>
            </div>
        </div>
    )
}