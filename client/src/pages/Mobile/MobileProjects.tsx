import MobileNavbar from "../../components/MobileComponents/MobileNavbar";
import MobileFooter from "../../components/MobileComponents/MobileFooter";

export default function MobileProjects() {
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
            <h1 className="text-white text-4xl font-bold mb-0.5">Projects</h1>
          </div>
          <h2 className="text-white text-2xl font-normal mb-5 text-center">
            Showcase of Projects I've Worked On and Contributed To
          </h2>
          <hr className="w-[60%] mx-auto border-t-1 border-white mb-7" />
          <div className="space-y-5 w-full">
            <div className="bg-[#0077B6]/50 border-[#979595] border-3 rounded-xl p-4 w-full">
              <h3 className="text-white text-2xl font-(family-name:--font-lalezar) mb-2">
                Bank Simulator
              </h3>
              <div className="flex flex-wrap gap-2 max-w-full mb-4">
                <span className="bg-[#0E4C59] text-white px-4 py-1.5 rounded-full text-base">
                  React
                </span>
                <span className="bg-[#0E4C59] text-white px-4 py-1.5 rounded-full text-base">
                  TailwindCSS
                </span>
                <span className="bg-[#0E4C59] text-white px-4 py-1.5 rounded-full text-base">
                  Node
                </span>
                <span className="bg-[#0E4C59] text-white px-4 py-1.5 rounded-full text-base">
                  Express
                </span>
                <span className="bg-[#0E4C59] text-white px-4 py-1.5 rounded-full text-base">
                  MongoDB
                </span>
                <span className="bg-[#0E4C59] text-white px-4 py-1.5 rounded-full text-base">
                  JwT Tokens
                </span>
              </div>
              <p className="text-white text-lg">
                Full stack app that uses mongodb and react for route management,
                interactive user iterface, and jwt for
                authentication/authorization
              </p>
            </div>
            
            <div className="bg-[#0077B6]/50 border-[#979595] border-3 rounded-xl p-4 w-full">
              <h3 className="text-white text-2xl font-(family-name:--font-lalezar) mb-2">
                TaskMasterAI
              </h3>
              <div className="flex flex-wrap gap-2 max-w-full mb-4">
                <span className="bg-[#0E4C59] text-white px-4 py-1.5 rounded-full text-base">
                  MongoDB
                </span>
                <span className="bg-[#0E4C59] text-white px-4 py-1.5 rounded-full text-base">
                  TailwindCSS
                </span>
                <span className="bg-[#0E4C59] text-white px-4 py-1.5 rounded-full text-base">
                  React
                </span>
                <span className="bg-[#0E4C59] text-white px-4 py-1.5 rounded-full text-base">
                  Express
                </span>
                <span className="bg-[#0E4C59] text-white px-4 py-1.5 rounded-full text-base">
                  Flask
                </span>
                <span className="bg-[#0E4C59] text-white px-4 py-1.5 rounded-full text-base">
                  Python
                </span>
              </div>
              <p className="text-white text-lg">
                A student workflow/time management system that uses AI to create
                a semester long study plan based off of course material, that
                connects you to the best resources and creates quizzes to help
                you gauge your knowledge.
              </p>
            </div>
            
            <div className="bg-[#0077B6]/50 border-[#979595] border-3 rounded-xl p-4 w-full">
              <h3 className="text-white text-2xl font-(family-name:--font-lalezar) mb-2">
                Personal Portfolio
              </h3>
              <div className="flex flex-wrap gap-2 max-w-full mb-4">
                <span className="bg-[#0E4C59] text-white px-4 py-1.5 rounded-full text-base">
                  React
                </span>
                <span className="bg-[#0E4C59] text-white px-4 py-1.5 rounded-full text-base">
                  TailwindCSS
                </span>
                <span className="bg-[#0E4C59] text-white px-4 py-1.5 rounded-full text-base">
                  Figma
                </span>
                <span className="bg-[#0E4C59] text-white px-4 py-1.5 rounded-full text-base">
                  Vercel
                </span>
              </div>
              <p className="text-white text-lg">
                Web Portfolio to show my personal projects. Frontend uses
                React.js and TailwindCSS. Backend uses Node.js, Express,js,
                MongoDB, and NodeMailer. Website is hosted on Vercel for easier
                management of hosting and better insights on site activity
              </p>
            </div>
            
            <div className="bg-[#0077B6]/50 border-[#979595] border-3 rounded-xl p-4 w-full">
              <h3 className="text-white text-2xl font-(family-name:--font-lalezar) mb-2">
                Arkos
              </h3>
              <div className="flex flex-wrap gap-2 max-w-full mb-4">
                <span className="bg-[#0E4C59] text-white px-4 py-1.5 rounded-full text-base">
                  TailwindCSS
                </span>
                <span className="bg-[#0E4C59] text-white px-4 py-1.5 rounded-full text-base">
                  RAG Model
                </span>
                <span className="bg-[#0E4C59] text-white px-4 py-1.5 rounded-full text-base">
                  React
                </span>
                <span className="bg-[#0E4C59] text-white px-4 py-1.5 rounded-full text-base">
                  Express
                </span>
                <span className="bg-[#0E4C59] text-white px-4 py-1.5 rounded-full text-base">
                  Flask
                </span>
                <span className="bg-[#0E4C59] text-white px-4 py-1.5 rounded-full text-base">
                  Python
                </span>
              </div>
              <p className="text-white text-lg">
                A web app that uses an AI powered RAG model to process financial
                reports and lets users quickly look up details like annual
                revenue and profit margins and also analyze Energy Consumption
                and gets tips on how to further minimize emissions
              </p>
            </div>

            <div className="bg-[#0077B6]/50 border-[#979595] border-3 rounded-xl p-4 w-full">
              <h3 className="text-white text-2xl font-(family-name:--font-lalezar) mb-2">
                SignLang
              </h3>
              <div className="flex flex-wrap gap-2 max-w-full mb-4">
                <span className="bg-[#0E4C59] text-white px-4 py-1.5 rounded-full text-base">
                  HTML
                </span>
                <span className="bg-[#0E4C59] text-white px-4 py-1.5 rounded-full text-base">
                  CSS
                </span>
                <span className="bg-[#0E4C59] text-white px-4 py-1.5 rounded-full text-base">
                  JavaScript
                </span>
                <span className="bg-[#0E4C59] text-white px-4 py-1.5 rounded-full text-base">
                  TensorFlow.js
                </span>
              </div>
              <p className="text-white text-lg">
                An AI powered sign language recognizer using the users webcam
                and tensorflow.js to analyze the image and identify the hand
                sign
              </p>
            </div>
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
