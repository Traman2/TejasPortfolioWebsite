import { Pinecone } from '@pinecone-database/pinecone';
import dotenv from "dotenv";
dotenv.config();

const pc = new Pinecone({
  apiKey: process.env.PINECONE_API_KEY
});

const indexName = "vectordb";
const namespace = "portfolio-store-9817";

async function uploadChunks() {
  const index = pc.index(indexName).namespace(namespace);

  const records = [
    {
      _id: "chunk1",
      chunk_text: "Name: Tejas Raman\nPhone: 469-536-4873\nEmail: tejassraman@gmail.com\nWebsite: https://tejasraman.com",
      type: "personal information"
    },
    {
      _id: "chunk2",
      chunk_text: "University of Texas at Dallas\nBachelor of Science in Computer Science (Aug 2024 - May 2027)\nGPA: 3.73\nHonors: Academic Excellence Scholar\nRelevant Coursework:\n- Computer Science 2\n- Discrete Mathematics for Computing\n- Data Structures and Algorithms\n- Linear Algebra\n- UNIX Programming",
      type: "education"
    },
    {
      _id: "chunk3",
      chunk_text: "Artificial Intelligence Society - Mentee\nUT Dallas (Jan 2025 - May 2025)\n- Worked in a team of 5 to build TaskMasterAI, an AI academic assistant using a Retrieval-Augmented Generation (RAG) pipeline.\n- Used GitHub issues and branches to collaborate and manage tasks efficiently.\n- Delivered a final demo to industry judges; project placed 2nd out of 13 for best AI solution enhancing student productivity.",
      type: "experience"
    },
    {
      _id: "chunk4",
      chunk_text: "Project: TaskMasterAI\nTech Stack: React, TailwindCSS, Node.js, Express, MongoDB, Gemini API, RAG\nGitHub: https://github.com/NovaBoltSpider10/Taskmaster.ai\n- Built an AI-powered student productivity platform.\n- Parses syllabi to generate study plans, flashcards, and quizzes.\n- Achieved sub-2ms latency using optimized RAG model and MongoDB CRUD.\n- Built with a full MERN stack and Gemini API integration.",
      type: "project"
    },
    {
      _id: "chunk5",
      chunk_text: "Project: ElevAIte\nTech Stack: React, TailwindCSS, RAG, Pinecone, Node, Express, MongoDB, JWT\nGitHub: https://github.com/Traman2/ElevAIte\n- Full-stack AI productivity app with RAG assistant.\n- Allows users to create tasks, track internships, monitor expenses, and manage schedules.\n- Uses Pinecone for vector embeddings and natural language understanding.\n- Reduced Gemini API token usage by 80%, with query latency optimized to 4s.",
      type: "project"
    },
    {
      _id: "chunk6",
      chunk_text: "Project: StyleScan\nTech Stack: Python, ResNet50, OpenCV, Matplotlib, NumPy, PIL, Grad-CAM\nGitHub: https://github.com/Traman2/StyleScan\n- Deep learning fashion classifier for 15 categories using ResNet50.\n- Achieved 57% validation accuracy and F1 score of 0.78.\n- Utilized Grad-CAM to visualize key feature areas.\n- Built end-to-end ML pipeline: preprocessing, training, visualization.",
      type: "project"
    },
    {
      _id: "chunk7",
      chunk_text: "Project: House Prediction Model\nTech Stack: Python, Scikit-Learn, Flask, React, Random Forest\nGitHub: https://github.com/Traman2/CaliforniaHousePrediction\n- Regression model to predict house prices using Random Forest and Linear Regression.\n- Emphasized data preprocessing, feature engineering, and hyperparameter tuning.\n- Deployed using Flask backend connected to a React frontend.",
      type: "project"
    },
    {
      _id: "chunk8",
      chunk_text: "Project: Arkos - HackAI 2025\nTech Stack: React, TailwindCSS, Express, Flask, Python, RAG\nGitHub: https://github.com/Traman2/2025HackAI-Arkos\n- Web app that uses RAG AI to parse financial reports.\n- Allows fast lookup of revenue, profit margins, and related business data.",
      type: "project"
    },
    {
      _id: "chunk9",
      chunk_text: "Project: Bank Simulator\nTech Stack: React, MongoDB, TailwindCSS, Gemini API, Google Cloud, OCR, JWT\nGitHub: https://github.com/Traman2/Personal-Banker\n- Full-stack banking simulator with JWT-based authentication.\n- Features OCR integration and Google Cloud services.\n- Manages transactions and personal finance records with real-time UI updates.",
      type: "project"
    },
    {
      _id: "chunk10",
      chunk_text: "Project: Insurance Prediction - FinHack 2025\nTech Stack: React, Python, TensorFlow, TailwindCSS, Flask\nGitHub: https://github.com/Traman2/25FinHack\n- Built for FinHack 2025.\n- Predicts health insurance costs using linear regression based on personal and geographic data.",
      type: "project"
    },
    {
      _id: "chunk11",
      chunk_text: "Project: SignLangAI - HackUTD 2024\nTech Stack: HTML, CSS, JavaScript, TensorFlow.js, MobileNet\nGitHub: https://github.com/Traman2/SignlangAI\n- Real-time AI sign language recognizer using webcam input.\n- Uses MobileNet and TensorFlow.js to identify hand gestures.\n- Built for accessibility and interactive learning.",
      type: "project"
    },
    {
      _id: "chunk12",
      chunk_text: "Languages: Java, Python, C++, C#, JavaScript, TypeScript, HTML/CSS\nFrameworks: React/ReactNative, Node.js, Flask, Express.js, TailwindCSS\nLibraries: PyTorch, TensorFlow, Scikit-learn, NumPy, Pandas, Matplotlib, OpenCV\nTools: GitHub, VS Code, IntelliJ, Eclipse, Figma, C-Lion, Visual Studio\nML Models: ResNet50, YOLOv9, Grad-CAM, RAG\nDatabases: MongoDB, Pinecone\nAuth: JWT\nCloud: Google Cloud",
      type: "technical skills"
    }
  ];

  try {
    const response = await index.upsertRecords(records);
    console.log("✅ Successfully uploaded records to Pinecone.");
    console.log("Response:", response);
  } catch (error) {
    console.error("❌ Failed to upload records to Pinecone.");
    console.error(error);
  }
}

uploadChunks();