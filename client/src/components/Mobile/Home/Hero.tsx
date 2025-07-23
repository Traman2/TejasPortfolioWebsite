import { useNavigate } from "react-router-dom";

export default function MobileHero() {
    const navigate = useNavigate();
    return (
        <div
            className="rounded-lg p-5 mb-3"
            style={{ background: 'linear-gradient(to bottom, #343338, #1D1C22)' }}
        >
            <div className="flex flex-row items-center justify-between">
                <div className="flex flex-col">
                    <span className="text-lg font-normal bg-gradient-to-r from-white to-[#6DED97] bg-clip-text text-transparent mb-1">Hello. I'm</span>
                    <span className="text-3xl font-normal bg-gradient-to-r from-white to-[#6DED97] bg-clip-text text-transparent font-(family-name:--font-zen)">Tejas <br />Raman</span>
                    <span className="text-lg font-bold text-white mt-5">Learn, Code, Create</span>
                </div>
                <div className="flex-shrink-0">
                    <img src="/icons/header/computerHero.svg" alt="Hero Logo" className="w-36 h-36" />
                </div>
            </div>
            <p className="text-[#B4B4B4] text-sm mt-9">
                I'm a Junior at UT Dallas studying Computer Science and enjoy playing videogames and going to the gym to stay in shape. In my free time, I enjoy programming

                {" "}
                new games and creating new apps, and websites to help automate my life.
                <br />
                <br />
                Check out my Personal AI Advisor, <span
                    onClick={() => navigate('Chatbot')}
                    className="text-[#6DED97] cursor-pointer hover:opacity-80 transition"
                >Jarvis</span>, to see where I apply my skills to my various projects!
            </p>
        </div>
    )
}