import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MobileBottomNav() {
    const [showNav, setShowNav] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setShowNav(true);
            } else {
                setShowNav(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <nav
                className={`fixed bottom-0 left-0 w-full bg-[#0E0C16] flex justify-center gap-4 py-4 z-50 transition-transform duration-300 ${showNav ? 'translate-y-0' : 'translate-y-full pointer-events-none'}`}
            >
                <button onClick={() => navigate("/")} className="flex items-center text-white text-xs bg-gray-600 rounded-full px-5 py-1">
                    <img src="/icons/SidebarStats/home.svg" alt="Menu" className="w-5 h-5" />
                    <span className="ml-2">Home</span>
                </button>
                <button onClick={() => navigate("/Chatbot")} className="flex items-center text-white text-xs bg-blue-600 rounded-full px-5 py-1">
                    <img src="/icons/SidebarStats/aiStars.svg" alt="Jarvis" className="w-5 h-5" />
                    <span className="ml-2">Jarvis</span>
                </button>
            </nav>
        </>
    )
}