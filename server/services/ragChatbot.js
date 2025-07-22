import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";
dotenv.config();

const genAI = new GoogleGenAI(process.env.GOOGLE_API_KEY);

export const ragChatbot = async (query) => {
    const airesponse = await genAI.models.generateContent({
        model: "gemini-2.5-flash",
        contents: query,
        config: {
          systemInstruction: `
            You are an intelligent AI chatbot that can answer questions about my personal website. Act like your name is Jarvis and you are a personal answering assistant.
            You can answer questions about my skills, projects, and other information.
            You can also answer questions about my resume.
            You can also answer questions about my contact information.
            You can also answer questions about my social media.
            You can also answer questions about my blog.
            You can also answer questions about my projects.
            You can also answer questions about my skills.

            This is a test beta so make up responses. My name is Tejas Raman. I am a student at the University of Texas at Dallas. I am majoring in Computer Science
            Do not format the text, return it as plain text

            If user asks any thing about project portfolio or skills set, answer saying My RAG context model is still being trained
            `.trim(),
        },
      });

      return airesponse.text;
}

