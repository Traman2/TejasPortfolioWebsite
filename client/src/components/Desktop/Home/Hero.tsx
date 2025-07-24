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
        </p>
        <button onClick={openModal} className="text-[#FFF] cursor-pointer shadow-xl hover:bg-[#2642de] transition-colors duration-200 mt-5 text-sm rounded-3xl px-5 py-1 bg-[#2236a9]">
          Want to learn more? Check out Jarvis AI
        </button>
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
  