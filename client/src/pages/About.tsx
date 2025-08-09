import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import RAGChatbotModal from "../modals/RAGChatbotModal";
export default function About() {
    const navigate = useNavigate();
    useEffect(() => {
        document.title = "3. About - Tejas Raman";
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
                    <button onClick={() => setModalOpen(true)} className="cursor-pointer hover:underline font-heading my-3 text-accent">
                       Jarvis
                    </button>
                    {/* <button onClick={() => navigate("/About")} className="cursor-pointer hover:underline font-heading my-3 text-accent">
                        About
                    </button> */}
                    <button onClick={() => navigate("/Contact")} className="cursor-pointer hover:underline font-heading my-3 text-accent">
                        Contact Me
                    </button>
                </div>
                {/* l-Nothing | Center-Main Content | R-Nothing */}
                <div className="flex-1 flex border-y-2 border-dashed border-primary">
                    {/* Main Content */}
                    <div className="flex-1 mx-12 ">
                        {/* Delete items-center justify-center h-full when using this area later*/}
                        <div className="px-40 py-15 flex flex-wrap gap-8 items-center justify-center h-full">
                            <p className="text-gray-500 text-sm font-footer">About page is coming soon...</p>
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