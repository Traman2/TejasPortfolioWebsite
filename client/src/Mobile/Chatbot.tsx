import { useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import axios from "axios";
import { backendDomain } from "@/lib/backendDomain";

export default function Chatbot() {
    const navigate = useNavigate();
    const [carouselButtons, setCarouselButtons] = useState(["Summarise Tejas' Resume", "What Projects uses React and Node?", "How many Projects uses Computer Vision?", "How many Programming Languages does Tejas know?"])
    const [inputValue, setInputValue] = useState("");
    const [speakerOn, setSpeakerOn] = useState(false);
    const [messages, setMessages] = useState([
        { sender: 'bot', text: "Hello, I'm Jarvis! Ask me anything about Tejas's Portfolio and Resume? If you can't see the input field, try scrolling down. Mobile Dev is kinda weird", cards: [""] },
    ]);
    const [isThinking, setIsThinking] = useState(false);
    const messagesEndRef = useRef(null);

    useEffect(() => {
        if (messagesEndRef.current) {
            (messagesEndRef.current as HTMLDivElement).scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages]);

    const handleSend = () => {
        if (!inputValue) return;
        setMessages(prev => [...prev, { sender: 'user', text: inputValue, cards: [""] }]);
        setInputValue("");
        setIsThinking(true);
        axios.post(`${backendDomain}/rag/query`, {
            history: messages,
            query: inputValue
        })
            .then(response => {
                speakText(response.data.message);
                setCarouselButtons(response.data.suggestions);
                setMessages(prev => [...prev, { sender: 'bot', text: response.data.answer, cards: response.data.cards }]);
                setIsThinking(false);
            })
            .catch(error => {
                console.error('Error fetching response:', error);
                setMessages(prev => [...prev, { sender: 'bot', text: 'Sorry, I encountered an error. Please try again.', cards: [""] }]);
                setIsThinking(false);
            });
    };

    function speakText(text: string) {
        if (!speakerOn) return;
        const utterance = new window.SpeechSynthesisUtterance(text);
        utterance.lang = 'en-US';
        utterance.rate = 1;
        window.speechSynthesis.speak(utterance);
    }

    return (
        <div className="min-h-screen bg-[#0C1313] flex flex-col">
            <div className="flex items-center justify-between mb-4 border-b border-[#36363B] pb-2 px-4 pt-3">
                <div className="flex items-center gap-2">
                    <img src="/icons/SidebarStats/aiStars.svg" alt="Jarvis" className="w-6 h-6" />
                    <span className="text-lg font-bold text-white tracking-wide">Jarvis</span>
                </div>
                <button
                    onClick={() => navigate("/")}
                    className="w-10 h-10 rounded-full bg-[#18181B] flex items-center justify-center shadow-md"
                    aria-label="Home"
                >
                    <img src="/icons/SidebarStats/home.svg" alt="Home" className="w-6 h-6" />
                </button>
            </div>

            <div className="w-full flex flex-col gap-5 overflow-y-auto px-4 min-h-[120px] max-h-[83vh]" style={{ height: 'auto' }}>
                {messages.map((msg, idx) => (
                    <div
                        key={idx}
                        className={`flex items-start gap-2 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                        {msg.sender === 'bot' && (
                            <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center">
                                <img src="/icons/SidebarStats/aiStars.svg" alt="AI Stars" className="w-4 h-4" />
                            </div>
                        )}
                        <div
                            className={`px-3 py-2 rounded-2xl text-white text-sm max-w-[80vw] break-words ${msg.sender === 'user' ? 'bg-[#36363B]' : 'bg-[#18181B]'
                                }`}
                        >
                            {msg.text}
                        </div>
                        {msg.sender === 'user' && (
                            <div className="w-6 h-6 rounded-full bg-[#6DED97]/60 flex items-center justify-center text-white font-bold text-base">🫵</div>
                        )}
                    </div>
                ))}
                {isThinking && (
                    <div className="flex items-center gap-2 justify-start">
                        <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center">
                            <img src="/icons/SidebarStats/aiStars.svg" alt="AI Stars" className="w-4 h-4" />
                        </div>
                        <div className="flex items-center h-6">
                            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse block"></span>
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            <div className="w-full flex flex-col justify-center mt-auto pb-4 px-3 bg-[#0C1313]">
                
                    <div className="w-full overflow-x-auto scrollbar-hide mb-2">
                        <div className="flex flex-nowrap items-center gap-3 min-w-full">
                            {carouselButtons.map((label) => (
                                <button
                                    key={label}
                                    className={`px-4 h-8 rounded-lg cursor-pointer text-xs font-medium transition-colors whitespace-nowrap bg-[#2d2d31] text-gray-200 hover:bg-blue-500`}
                                    style={{ minWidth: 'fit-content' }}
                                    onClick={() => {
                                        setMessages(prev => [...prev, { sender: 'user', text: label, cards: [""] }]);
                                        setIsThinking(true);
                                        axios.post('https://tejas-portfolio-website-server.vercel.app/rag/query', {
                                            history: [...messages, { sender: 'user', text: label, cards: [""] }],
                                            query: label
                                        })
                                            .then(response => {
                                                setCarouselButtons(response.data.suggestions);
                                                speakText(response.data.message);
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
                <div className="flex items-center gap-2 bg-[#232326] rounded-3xl shadow-lg px-3 py-2 mx-4 w-full max-w-xl" style={{ margin: '0 auto' }}>
                    <input
                        type="text"
                        placeholder="Ask Something Yourself"
                        className="flex-1 bg-transparent outline-none text-white placeholder:text-gray-400 text-base px-2"
                        value={inputValue}
                        onChange={e => setInputValue(e.target.value)}
                        onKeyDown={e => { if (e.key === 'Enter') handleSend(); }}
                    />
                    <button
                        className={`rounded-full w-8 h-8 flex items-center justify-center transition-colors ${speakerOn ? 'bg-[#AAFF00]/60' : 'bg-red-600/60'}`}
                        onClick={() => setSpeakerOn(prev => !prev)}
                        type="button"
                        aria-label="Toggle Speaker"
                    >
                        <img src="/icons/chatmodal/speaker.svg" alt="Speaker" className="w-4 h-4" />
                    </button>
                    <button
                        className={`bg-[#3A3030] rounded-full w-8 h-8 flex items-center justify-center transition-colors ${inputValue ? 'hover:bg-[#333] cursor-pointer' : 'opacity-50 cursor-not-allowed'}`}
                        disabled={!inputValue}
                        onClick={handleSend}
                        aria-label="Send"
                    >
                        <img src="/icons/chatmodal/send.svg" alt="Send" className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </div>
    );
}