import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { Pinecone } from '@pinecone-database/pinecone';
import { z } from "zod";

import dotenv from "dotenv";
dotenv.config();

//Structured output
const ResponseFormatter = z.object({
  answer: z.string().describe("The answer to the user's question"),
  suggested_replies: z
    .array(z.string())
    .describe("An array of suggested replies for the user's next message"),
});

//Vector Database Store
const pc = new Pinecone({
  apiKey: process.env.PINECONE_API_KEY
});

//Stringify history -- helper function
function historyToString(history) {
  return history
    .map(item => `${item.sender}: ${item.text}`)
    .join('\n');
}

export const ragChatbot = async (query, history = []) => {

  //Search vector store
  const indexName = "vectordb";
  const namespace = "portfolio-store-9817";
  const index = pc.index(indexName).namespace(namespace);

  const vectordbResponse = await index.searchRecords({
    query: {
      topK: 100,
      inputs: { text: query },
    },
    fields: ["chunk_text", "type"],
  });

  const hits = vectordbResponse.result.hits.filter((hit) => hit._score > 0.2);

  const context = hits
    .map((chunk, index) => {
      return `# Record ${index + 1}\nType: ${chunk.fields.type}\nName: ${chunk.fields.name
        }\nContent: ${chunk.fields.chunk_text}`;
    })
    .join("\n\n");

  // Langchain structured output LLM Call 
  const model = new ChatGoogleGenerativeAI({
    model: "gemini-2.5-flash-lite",
    temperature: 0
  });

  //Bind formating tool with model
  const modelWithStructure  = model.withStructuredOutput(ResponseFormatter);

  const systemInstruction = `
    Hey! You're Jarvis — a friendly, intelligent AI assistant who acts like Tejas Raman's personal chatbot and close friend of the user.

    Your job is to help users who visit Tejas's website and want to learn more about:
    - His **resume** and background
    - His **contact information**
    - His **coding projects** and portfolio
    - What **skills each project applies or demonstrates**

    You know Tejas well because you've read his resume and projects. When the user asks a question, use the context provided below to give helpful, clear answers.
    However, **if the user asks specifically about a project or how a skill applies to a project, respond with a richer, more detailed explanation

    Always answer in **plain text** — no formatting, no HTML, no Markdown.  
    Be **friendly and conversational** like you're chatting with someone you know.  
    If you're not sure or the info isn't in the context, say so politely.

    ---

    Example Responses:
    - “Tejas is currently majoring in Computer Science at UTD — he's into full-stack dev and AI stuff.”
    - “Looks like I don't have that info yet, but I'll let Tejas know to add it!”

    ---

    Always answer in one paragraph — no formatting, no HTML, no Markdown
    Use the following context to answer the user's questions, also look at the history and answer if users response is chained:

    === CONTEXT ===
    ${context}

    ===History ===
    ${historyToString(history)}`
  .trim()

  const llmRes = await modelWithStructure .invoke([
    { role: "system", content: systemInstruction },
    { role: "user", content: query }
  ])

  console.log(llmRes);

  return llmRes;
}

