import React, { useEffect, useState, useRef } from "react";
import axios from "axios";

interface ChatbotModalProps {
    onClose: () => void;
}


const ChatbotModal: React.FC<ChatbotModalProps> = ({ onClose }) => {
    const [visible, setVisible] = useState(false);
    const [closing, setClosing] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [messages, setMessages] = useState([
        { sender: 'bot', text: "Hello, I'm Jarvis! Ask me anything about Tejas's Portfolio and Resume?" },
    ]);
    const [isThinking, setIsThinking] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const [showCarousel, setShowCarousel] = useState(true);
    const carouselButtons = ["Summarise Tejas' Resume", "What Projects uses React and Node?", "How many Projects uses Computer Vision?", "How many Programming Languages does Tejas know?"];
    const [speakerOn, setSpeakerOn] = useState(false);

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
        setShowCarousel(false); // Hide carousel on send
        setMessages(prev => [...prev, { sender: 'user', text: inputValue }]);
        setInputValue("");
        setIsThinking(true);
        console.log(messages);
        axios.post('https://tejas-portfolio-website-server.vercel.app/rag/query', {
            history: messages,
            query: inputValue
        })
            .then(response => {
                speakText(response.data.message);
                setMessages(prev => [...prev, { sender: 'bot', text: response.data.message }]);
                setIsThinking(false);
            })
            .catch(error => {
                console.error('Error fetching response:', error);
                setMessages(prev => [...prev, { sender: 'bot', text: 'Sorry, I encountered an error. Please try again.' }]);
                setIsThinking(false);
            });
    };

    function speakText(text: string) {
        if (!speakerOn) return; // Do nothing if speaker is off
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-US';
        utterance.rate = 1;
        window.speechSynthesis.speak(utterance);
    }


    return (
        <div
            className={`fixed inset-0 z-50 flex items-center justify-center bg-black/60 transition-opacity duration-100 backdrop-blur ${visible && !closing ? 'opacity-100' : 'opacity-0'}`}
            onClick={handleClose}
        >
            <div
                className="relative bg-[#232326] rounded-xl border border-[#fff]/10 shadow-2xl p-7 flex flex-col items-center justify-center h-[600px] w-[790px] overflow-y-auto"
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
                            <div className={`px-4 py-2 rounded-2xl text-white text-base max-w-[70%] ${msg.sender === 'user' ? 'bg-[#36363B]' : 'bg-[#18181B]'}`}>{msg.text}</div>
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
                {showCarousel && (
                    <div className="w-full overflow-x-auto scrollbar-hide mb-3">
                        <div className="flex flex-nowrap items-center gap-3 min-w-full">
                            {carouselButtons.map((label) => (
                                <button
                                    key={label}
                                    className={`px-4 h-8 rounded-lg cursor-pointer text-xs font-medium transition-colors whitespace-nowrap bg-[#2d2d31] text-gray-200 hover:bg-blue-500`}
                                    style={{ minWidth: 'fit-content' }}
                                    onClick={() => {
                                        setShowCarousel(false);
                                        setMessages(prev => [...prev, { sender: 'user', text: label }]);
                                        setIsThinking(true);
                                        axios.post('https://tejas-portfolio-website-server.vercel.app/rag/query', {
                                            history: [...messages, { sender: 'user', text: label }],
                                            query: label
                                        })
                                            .then(response => {
                                                speakText(response.data.message);
                                                setMessages(prev => [...prev, { sender: 'bot', text: response.data.message }]);
                                                setIsThinking(false);
                                            })
                                            .catch(error => {
                                                console.error('Error fetching response:', error);
                                                setMessages(prev => [...prev, { sender: 'bot', text: 'Sorry, I encountered an error. Please try again.' }]);
                                                setIsThinking(false);
                                            });
                                    }}
                                >
                                    {label}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
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
                            className={`ml-2 rounded-full w-8 h-8 flex items-center justify-center transition-colors ${speakerOn ? 'bg-[#AAFF00]/60' : 'bg-red-600/60'} cursor-pointer`}
                            onClick={() => setSpeakerOn((prev) => !prev)}
                            type="button"
                        >
                            <img src="/icons/chatmodal/speaker.svg" alt="Speaker" className="w-5 h-5" />
                        </button>
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