import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import RAGChatbotModal from "../modals/RAGChatbotModal";


export default function Home() {
    const navigate = useNavigate();
    useEffect(() => {
        document.title = "1. Home - Tejas Raman";
    }, []);
    const [modalOpen, setModalOpen] = useState(false);

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
                <div className="flex-1 flex border-y-2 border-dashed border-primary justify-center items-center">
                    {/* Main Content */}
                    <div className="flex-1 mx-12 ">
                        <div className="px-40 flex flex-wrap gap-8">
                            <div className="flex-3">
                                <h1 className="font-heading text-5xl leading-relaxed text-secondary">Hello, <br /> I'm Tejas</h1>
                                <p className="font-primary text-xl">{"<p>"}Sophomore Computer Science Major at UT Dallas. Like to learning new programming tools every week and use all my knowledge to make impactful applications. In my free time I play video games, go to the gym and play basketball{"</p>"}</p>
                                <div className="flex mt-5 gap-4">
                                    <a
                                        href="/Tejas_Resume.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-[#D9D9D9] hover:bg-primary/90 transition-colors cursor-pointer px-4 py-1 rounded-xl font-primary text-[20px] flex items-center gap-2"
                                    >
                                        <img src="/icons/Home/pdf.svg" alt="PDF" className="w-4 h-4" />
                                        <p>My Resume</p>
                                    </a>
                                    <button onClick={() => setModalOpen(true)} className="bg-[#D9D9D9] hover:bg-primary/90 transition-colors cursor-pointer px-4 py-1 rounded-xl font-primary text-[20px] flex items-center gap-2">
                                        <img src="/icons/Home/aiStars.svg" alt="AI" className="w-4 h-4" />
                                        <p>Ask Jarvis for more info</p>
                                    </button>
                                </div>
                            </div>

                            <div className="flex-2 flex items-center justify-center">
                                <img src="/icons/mainHero.svg" alt="AI" className="w-85 h-85" />
                            </div>

                            <div className="w-full">
                                <h2 className="font-heading text-2xl mt-4 mb-2 text-secondary">Fun Facts</h2>
                                <div className="flex gap-3">
                                    <div className="flex-1 bg-primary rounded-xl px-8 py-6 flex gap-2 items-start">
                                        <p className="font-heading text-4xl text-white leading-none">494</p>
                                        <p className="font-footer text-white text-sm leading-none mt-0">Commits Made</p>
                                    </div>
                                    <div className="flex-1 bg-primary rounded-xl px-8 py-6 flex gap-2 items-start">
                                        <p className="font-heading text-4xl text-white leading-none">122</p>
                                        <p className="font-footer text-white text-sm leading-none mt-0">Views on Site</p>
                                    </div>
                                    <div className="flex-1 bg-primary rounded-xl px-8 py-6 flex gap-2 items-start">
                                        <p className="font-heading text-4xl text-white leading-none">4+</p>
                                        <p className="font-footer text-white text-sm leading-none mt-0">Years of Experience</p>
                                    </div>
                                    <div className="flex-1 bg-primary rounded-xl px-8 py-6 flex gap-4 items-start">
                                        <div className="font-heading text-white leading-none flex items-end">
                                            <span className="text-4xl">12</span>
                                            <span className="text-xl">Mb</span>
                                        </div>
                                        <p className="font-footer text-white text-sm leading-none mt-0">Website Size</p>
                                    </div>

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
            {modalOpen && (
                <RAGChatbotModal onClose={() => setModalOpen(false)} />
            )}
        </>
    )
}