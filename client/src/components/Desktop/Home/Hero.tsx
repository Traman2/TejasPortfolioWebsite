import { useNavigate } from "react-router-dom";

interface HeroProps {
  openModal?: () => void;
}

export default function Hero({ openModal }: HeroProps) {
  const navigate = useNavigate();
  return (
    <div className="w-full flex items-center justify-between bg-gradient-to-b from-[#343338] to-[#1D1C22] rounded-xl">
      {/* Left Container */}
      <div className="flex flex-col justify-center items-start px-12 py-8 flex-1 max-w-[580px]">
        {/* Gradient Text Block */}
        <div className="bg-gradient-to-r from-white to-[#6DED97] bg-clip-text text-transparent">
          <h2 className="text-5xl font-normal mb-3">Hello I&apos;m</h2>
          <h1 className="text-5xl mb-3 font-(family-name:--font-zen)">Tejas Raman</h1>
        </div>
        <p className="text-xl text-white font-bold">Learn, Code, Create</p>
        <p className="text-[#B4B4B4] mt-6">I'm a Junior at UT Dallas studying Computer Science and enjoy playing videogames and going to the gym to stay in shape. In my free time, I enjoy {" "}
          <span
            className="text-[#6DED97] underline cursor-pointer hover:opacity-80 transition"
            onClick={() => navigate("/Project")}
          >
            programming
          </span>{" "}
          new apps and AI tools to help automate people's life
          
          <br/>
          <br/>
          Don't believe me? Check out {" "}
          <span
            className="text-[#6DED97] underline cursor-pointer hover:opacity-80 transition"
            onClick={openModal}
          >
            Jarvis
          </span>, a custom AI Chatbot I made to help you learn more about me and my projects!
        </p>
      </div>
      <div className="flex items-center justify-center pr-12">
        <img
          src="/icons/header/computerHero.svg"
          alt="Computer Hero Logo"
          className="w-63 h-63 object-contain"
        />
      </div>
    </div>
  );
}
  