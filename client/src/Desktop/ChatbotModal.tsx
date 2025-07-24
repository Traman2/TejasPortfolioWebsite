import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import projects from "../../projectdata.json";

interface ChatbotModalProps {
    onClose: () => void;
}

interface Project {
    imageURL: string;
    title: string;
    githubURL: string;
}

const hosturl = "https://tejas-portfolio-website-server.vercel.app"; // RAG Server URL

// Mini Project card
function MiniProjectCard({ imageURL, title, githubURL }: Project) {
    return (
        <div className="flex items-center gap-2 bg-[#19191C] rounded-lg p-2 mt-2 mb-1 shadow border border-[#36363B] w-[220px]">
            <img src={imageURL} alt={title} className="w-10 h-10 rounded-md object-cover" />
            <div className="flex flex-col flex-1 min-w-0">
                <div className="text-xs font-semibold text-white truncate">{title}</div>
                <div className="flex gap-2 mt-1">
                    <a href={githubURL} target="_blank" rel="noopener noreferrer">
                        <img src="/icons/analytics/github.svg" alt="GitHub" className="w-4 h-4" />
                    </a>
                </div>
            </div>
        </div>
    );
}

// Resume Card 
function ResumeCard() {
    return (
        <div className="flex items-center gap-2 bg-[#19191C] rounded-lg p-2 mt-2 shadow border border-[#36363B] w-[220px]">
            <div className="w-10 h-10 rounded-md bg-[#232326] flex items-center justify-center">
                <img src="/icons/resume.svg" alt="Resume" className="w-7 h-7" />
            </div>
            <div className="flex flex-col flex-1 min-w-0">
                <div className="text-xs font-semibold text-white truncate">Tejas's Resume</div>
                <div className="flex gap-2 mt-1">
                    <a href="/Tejas_Resume.pdf" target="_blank" rel="noopener noreferrer">
                        <img src="/icons/analytics/eye.svg" alt="View Resume" className="w-4 h-4 inline-block" />
                        <span className="ml-1 text-xs text-blue-400">Open PDF</span>
                    </a>
                </div>
            </div>
        </div>
    );
}


const ChatbotModal: React.FC<ChatbotModalProps> = ({ onClose }) => {
    const [visible, setVisible] = useState(false);
    const [closing, setClosing] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [messages, setMessages] = useState([
        { sender: 'bot', text: "Hello, I'm Jarvis! Ask me anything about Tejas's Portfolio and Resume?", cards: [""] },
    ]);
    const [isThinking, setIsThinking] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const [carouselButtons, setCarouselButtons] = useState(["Summarise Tejas' Resume", "What Projects uses React and Node?", "How many Projects uses Computer Vision?", "How many Programming Languages does Tejas know?"]);

    useEffect(() => {
        const timeout = setTimeout(() => setVisible(true), 10);
        return () => clearTimeout(timeout);
    }, []);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isThinking]);

    const handleClose = () => {
        setClosing(true);
        setTimeout(() => {
            onClose();
        }, 150);
    };

    const handleSend = () => {
        if (!inputValue) return;
        setMessages(prev => [...prev, { sender: 'user', text: inputValue, cards: [""] }]);
        setInputValue("");
        setIsThinking(true);
        axios.post(`${hosturl}/rag/query`, {
            history: messages,
            query: inputValue
        })
            .then(response => {
                setCarouselButtons(response.data.suggestions)
                setMessages(prev => [...prev, { sender: 'bot', text: response.data.answer, cards: response.data.cards }]);
                setIsThinking(false);
            })
            .catch(error => {
                console.error('Error fetching response:', error);
                setMessages(prev => [...prev, { sender: 'bot', text: 'Sorry, I encountered an error. Please try again.', cards: [""] }]);
                setIsThinking(false);
            });
    };



    return (
        <div
            className={`fixed inset-0 z-50 flex items-center justify-center bg-black/60 transition-opacity duration-100 backdrop-blur ${visible && !closing ? 'opacity-100' : 'opacity-0'}`}
            onClick={handleClose}
        >
            <div
                className="relative bg-[#232326] rounded-xl border border-[#fff]/10 shadow-2xl p-7 flex flex-col items-center justify-center h-[650px] w-[890px] overflow-y-auto"
                style={{}}
                onClick={e => e.stopPropagation()}
            >
                <div className="w-full flex flex-col items-start">
                    <h2 className="text-2xl font-semibold text-white tracking-wide mb-3">Jarvis AI</h2>
                    <div className="w-full border-b border-[#36363B]" />
                </div>
                <div className="w-full bg-[#232326] pb-5 pt-7 flex flex-col gap-4 mb-3 rounded-b-2xl flex-1 overflow-y-auto scrollbar-hide">
                    {messages.map((msg, idx) => (
                        <div key={idx} className={`flex items-start gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                            {msg.sender === 'bot' && (
                                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                                    <img src="/icons/SidebarStats/aiStars.svg" alt="AI Stars" className="w-5 h-5" />
                                </div>
                            )}
                            <div className={`px-4 py-2 rounded-2xl text-white text-base max-w-[70%] ${msg.sender === 'user' ? 'bg-[#36363B]' : 'bg-[#18181B]'}`}>{msg.text}
                                {/* Relevant Data Cards (bot res only)*/}
                                {msg.sender === 'bot' && Array.isArray(msg.cards) && msg.cards.filter(card => card && card !== "").length > 0 &&(
                                    <>
                                        <br />
                                        <br />
                                        <p className="text-sm text-gray-400">Relevant Data</p>
                                    </>
                                )}
                                {msg.sender === 'bot' && Array.isArray(msg.cards) && msg.cards.filter(card => card && card !== "").length > 0 && (
                                    <div className="flex gap-2 flex-wrap">
                                        {msg.cards.filter(card => card && card !== "").map(cardEnum => {
                                            const enumToTitle = {
                                                ElevAIteCard: "ElevAIte",
                                                TaskMasterCard: "TaskMasterAI",
                                                HousePredictionModelCard: "House Prediction Model",
                                                StyleScanCard: "StyleScan",
                                                ArkosCard: "Arkos (HackAI 2025)",
                                                BankSimulatorCard: "Bank Siumulator",
                                                InsurancePredictionCard: "Insurance Prediction (FinHack 2025)",
                                                SignLangCard: "SignLangAI (HackUTD 2024)",
                                            };
                                            if (cardEnum === "ResumeCard") {
                                                return <ResumeCard key="ResumeCard" />;
                                            }
                                            const projectTitle = enumToTitle[cardEnum as keyof typeof enumToTitle];
                                            if (!projectTitle) return null;
                                            const project = projects.find(p => p.title === projectTitle);
                                            if (!project) return null;
                                            return <MiniProjectCard key={cardEnum} imageURL={project.imageURL} title={project.title} githubURL={project.githubURL} />;
                                        })}
                                    </div>
                                )}
                            </div>
                            {msg.sender === 'user' && (
                                <div className="w-8 h-8 rounded-full bg-[#6DED97]/20 flex items-center justify-center text-white font-bold text-lg">🫵</div>
                            )}
                        </div>
                    ))}
                    {isThinking && (
                        <div className="flex items-center gap-3 justify-start">
                            <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                                <img src="/icons/SidebarStats/aiStars.svg" alt="AI Stars" className="w-5 h-5" />
                            </div>
                            <div className="flex items-center h-8">
                                <span className="w-3 h-3 rounded-full bg-blue-400 animate-pulse block"></span>
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>
                <div className="w-full overflow-x-auto scrollbar-hide mb-3">
                    <div className="flex flex-nowrap items-center gap-3 min-w-full">
                        {/* carousel buttons render*/}
                        {carouselButtons && carouselButtons.map((label) => (
                            <button
                                key={label}
                                className={`px-4 h-8 rounded-lg cursor-pointer text-xs font-medium transition-colors whitespace-nowrap bg-[#2d2d31] text-gray-200 hover:bg-blue-500`}
                                style={{ minWidth: 'fit-content' }}
                                /* click handler for carousel buttons*/
                                onClick={() => {
                                    setMessages(prev => [...prev, { sender: 'user', text: label, cards: [""] },]);
                                    setIsThinking(true);
                                    axios.post(`${hosturl}/rag/query`, {
                                        history: [...messages, { sender: 'user', text: label, cards: [""] }],
                                        query: label
                                    })
                                        .then(response => {
                                            setCarouselButtons(response.data.suggestions)
                                            setMessages(prev => [...prev, { sender: 'bot', text: response.data.answer, cards: response.data.cards }]);
                                            setIsThinking(false);
                                        })
                                        .catch(error => {
                                            console.error('Error fetching response:', error);
                                            setMessages(prev => [...prev, { sender: 'bot', text: 'Sorry, I encountered an error. Please try again.', cards: [""] }]);
                                            setIsThinking(false);
                                        });
                                }}
                            >
                                {label}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="w-full bg-[#131316] rounded-2xl py-5 px-6 flex flex-col gap-2">
                    <div className="flex items-center w-full">
                        <input
                            type="text"
                            placeholder="Ask Something Yourself. I can answer anything related to Tejas' Career"
                            className="flex-1 bg-transparent outline-none text-white placeholder:text-gray-400 text-base"
                            value={inputValue}
                            onChange={e => setInputValue(e.target.value)}
                            onKeyDown={e => { if (e.key === 'Enter') handleSend(); }}
                        />
                    </div>
                    <div className="border-b border-[#232326] w-full my-1" />
                    <div className="flex items-center w-full mt-1">
                        <button
                            className="mr-3 px-4 h-8 rounded-lg bg-[#2d2d31] cursor-pointer text-gray-200 text-xs font-medium transition-colors hover:bg-red-600"
                            onClick={handleClose}
                        >
                            Close
                        </button>
                        <div className="rounded-lg px-3 flex items-center justify-start mr-3" style={{ backgroundColor: '#1a2238', height: '2rem', minWidth: 'fit-content' }}>
                            <img src="/icons/footer/infoi.svg" alt="info" className="w-4 h-4 mr-2" />
                            <span className="text-xs text-gray-300">Responses may be inaccurate, Still in Development</span>
                        </div>
                        <div className="flex-1" />
                        <button
                            className={`ml-2 bg-[#232326] rounded-full w-8 h-8 flex items-center justify-center transition-colors ${inputValue ? 'hover:bg-[#333] cursor-pointer' : 'opacity-50 cursor-not-allowed'}`}
                            disabled={!inputValue}
                            onClick={handleSend}
                        >
                            <img src="/icons/chatmodal/send.svg" alt="Send" className="w-5 h-5" />
                        </button>
                    </div>
                </div>
                <div className="w-full flex justify-start px-1 mt-2">
                    <span className="text-xs text-gray-300">Model: gemini-2.5-flash-lite. Vector Database: Pinecone. Text-embedding-model: llama-text-embed-v2</span>
                </div>
            </div>
        </div>
    );
};

export default ChatbotModal; 