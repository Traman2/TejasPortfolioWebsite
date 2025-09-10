import { useEffect, useState, useRef } from "react";
import { backendDomain } from "../lib/domainName";
import axios from "axios";

interface ChatbotModalProps {
    onClose: () => void;
}

interface Message {
    sender: string;
    text: string;
}

//Add Cards feature later

export default function ChatbotModal({ onClose }: ChatbotModalProps) {
    const [visible, setVisible] = useState(false);
    const [closing, setClosing] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputValue, setInputValue] = useState("");
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const [isThinking, setIsThinking] = useState(false);
    const thinkingTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    const [premadePrompts, setPrompts] = useState([
        "Summarize Tejas' Resume",
        "What Programming Languages does Tejas know?",
        "What organizations are Tejas apart of?",
        "Do any projects involve using Reactjs and TailwindCSS?"
    ]);

    useEffect(() => {
        const timeout = setTimeout(() => setVisible(true), 10);
        return () => clearTimeout(timeout);
    }, []);

    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'end'
            });
        }
    }, [messages, isThinking]);


    const handleClose = () => {
        setClosing(true);
        setTimeout(() => {
            onClose();
        }, 150);
    };

    //Helper function: Add new message to array useState
    const addMessage = (text: string, isUser: boolean) => {
        const newMessage: Message = {
            sender: (isUser ? "user" : "bot"),
            text
        };
        setMessages(prev => [...prev, newMessage]);
    };

    // Message Handler
    const handleSendMessage = (messageText: string) => {
        if (messageText.trim()) {
            addMessage(messageText, true);
            setInputValue("");

            // Start a delay for showing the thinking animation
            thinkingTimeoutRef.current = setTimeout(() => {
                setIsThinking(true);
            }, 200); // Delay in ms before showing "Jarvis is thinking..."

            axios
                .post(`${backendDomain}/rag/query`, {
                    history: (messages.length > 0 ? [{ sender: 'bot', text: "There is no history" }] : messages),
                    query: messageText
                })
                .then(response => {
                    clearTimeout(thinkingTimeoutRef.current!);
                    setIsThinking(false);
                    setPrompts(response.data.suggestions);
                    addMessage(response.data.answer, false,);
                })
                .catch(error => {
                    clearTimeout(thinkingTimeoutRef.current!);
                    setIsThinking(false);
                    console.error('Error fetching response:', error);
                    addMessage("Sorry, I encountered an error. Please try again.", false);
                });
        }
    };
    //Content in Input handler
    const handleInputSubmit = () => {
        handleSendMessage(inputValue);
    };

    //Premade Prompt handler
    const handlePromptClick = (promptText: string) => {
        handleSendMessage(promptText);
    };

    //Enable enter key
    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleInputSubmit();
        }
    };

    return (
        <div
            className={`fixed inset-0 z-50 flex items-center cursor-main justify-center bg-black/60 transition-opacity duration-100 backdrop-blur ${visible && !closing ? 'opacity-100' : 'opacity-0'}`}
            onClick={handleClose}
        >
            <div
                className="relative bg-background rounded-xl border border-[#fff]/10 shadow-2xl p-7 flex flex-col items-center justify-center h-[650px] w-[890px] overflow-y-auto"
                style={{}}
                onClick={e => e.stopPropagation()}
            >
                <div className="w-full flex flex-col items-start">
                    <div className="flex flex-row items-center gap-3 mb-3">
                        <img
                            src="/icons/Home/aiStars.svg"
                            alt="Logo 3"
                            className="w-7 h-7 mt-0.5"
                        />
                        <h2 className="text-lg font-semibold text-secondary font-heading tracking-wide mt-1">Jarvis AI</h2>
                    </div>

                    <div className="w-full border-b border-secondary" />
                </div>

                <div className="w-full pb-5 pt-4 mt-1 flex flex-col gap-4 mb-3 rounded-b-xl flex-1 overflow-y-auto scrollbar-hide">
                    {messages.length === 0 ? (
                        <div className="flex items-center justify-center h-full">
                            <p className="text-gray-500 text-sm font-footer">The conversation is empty. Please ask me something</p>
                        </div>
                    ) : (
                        <>
                            {messages.map((message, index) => (
                                <div key={index} className={`flex w-full ${message.sender === "user" ? 'justify-end' : 'justify-start'}`}>
                                    <div className={`max-w-[80%] p-3 rounded-lg ${message.sender === "user"
                                        ? 'bg-secondary text-white'
                                        : 'bg-accent text-gray-100'
                                        }`}>
                                        <p className="text-sm font-footer">{message.text}</p>
                                    </div>
                                </div>
                            ))}
                            {isThinking && (
                                <div className="flex w-full justify-start">
                                    <div className="max-w-[80%] p-3 rounded-lg bg-accent text-gray-100 animate-pulse">
                                        <p className="text-sm font-footer opacity-70">Jarvis is thinking...</p>
                                    </div>
                                </div>
                            )}
                        </>

                    )}
                    <div ref={messagesEndRef} />
                </div>

                <div className="w-full overflow-x-auto scrollbar-hide mb-3">
                    <div className="flex flex-nowrap items-center gap-3 min-w-full">
                        {premadePrompts.map((prompt, index) => (
                            <button
                                key={index}
                                className={`font-footer px-4 h-8 rounded-lg cursor-pointer text-xs font-medium transition-colors whitespace-nowrap bg-secondary text-gray-200 hover:bg-blue-500`}
                                style={{ minWidth: 'fit-content' }}
                                onClick={() => handlePromptClick(prompt)}
                            >
                                {prompt}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="w-full bg-accent rounded-2xl py-5 px-6 flex flex-col gap-2">
                    <div className="flex items-center w-full">
                        <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyDown={handleKeyPress}
                            placeholder="Ask Something Yourself. I can answer anything related to Tejas' Career"
                            className="font-footer flex-1 cursor-pointer bg-transparent outline-none text-white placeholder:text-gray-400 text-base"
                        />
                    </div>
                    <div className="border-b border-background w-full my-1" />
                    <div className="flex items-center w-full mt-1">
                        <button
                            className="mr-3 px-4 h-8 rounded-lg bg-[#525258] cursor-pointer text-white text-xs font-medium font-footer pt-0.5 transition-colors hover:bg-red-600"
                            onClick={handleClose}
                        >
                            Close
                        </button>
                        <div className="rounded-lg px-3 flex items-center justify-start mr-3 bg-[#525258]" style={{ height: '2rem', minWidth: 'fit-content' }}>
                            <img src="/icons/infoi.svg" alt="info" className="w-4 h-4 mr-2" />
                            <span className="text-xs text-white font-footer mt-0.5">Responses may be inaccurate, Still in Development</span>
                        </div>
                        <div className="flex-1" />
                        <button
                            className={`ml-2 bg-[#525258] rounded-full w-8 h-8 flex items-center justify-center transition-colors hover:bg-[#333] cursor-pointer`}
                            onClick={handleInputSubmit}
                        >
                            <img src="/icons/chatmodal/send.svg" alt="Send" className="w-5 h-5" />
                        </button>
                    </div>
                </div>
                <div className="w-full flex justify-start px-1 mt-2">
                    <span className="text-xs text-secondary font-footer font-semibold">Model: gemini-2.5-flash-lite. Vector Database: Pinecone. Text-embedding-model: NVIDIA llama-text-embed-v2</span>
                </div>
            </div>
        </div>
    );
};
