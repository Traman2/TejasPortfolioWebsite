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
      chunk_text: "Keywords: personal information, contact, identity, resume\nName: Tejas Raman\nPhone: 469-536-4873\nEmail: tejassraman@gmail.com\nWebsite: https://tejasraman.com",
      type: "personal information"
    },
    {
      _id: "chunk2",
      chunk_text: "Keywords: education, academic background, coursework, university, GPA\nUniversity of Texas at Dallas\nBachelor of Science in Computer Science (Aug 2024 - May 2027)\nGPA: 3.73\nHonors: Academic Excellence Scholar\nRelevant Coursework: Computer Science 2, Discrete Mathematics, Data Structures, Linear Algebra, UNIX Programming",
      type: "education"
    },
    {
      _id: "chunk3",
      chunk_text: "Keywords: experience, AI, teamwork, mentorship, student project, club, organization, extracurricular\nArtificial Intelligence Society - Mentee\nUT Dallas (Jan 2025 - May 2025)\nParticipated in the Artificial Intelligence Society, a student-led club focused on real-world AI applications. Worked in a team of 5 to build TaskMasterAI, an AI academic assistant using a Retrieval-Augmented Generation (RAG) pipeline. Used GitHub issues and branches to collaborate and manage tasks efficiently. Delivered a final demo to industry judges; project placed 2nd out of 13 for best AI solution enhancing student productivity.",
      type: "experience"
    },
    {
      _id: "chunk4",
      chunk_text: "Keywords: project, AI productivity, full-stack, RAG, React, MongoDB\nProject: TaskMasterAI\nTech Stack: React, TailwindCSS, Node.js, Express, MongoDB, Gemini API, RAG\nGitHub: https://github.com/NovaBoltSpider10/Taskmaster.ai\nCreated an AI student assistant that parses syllabi and generates study tools with sub-2ms RAG performance.",
      type: "project"
    },
    {
      _id: "chunk5",
      chunk_text: "Keywords: project, RAG assistant, productivity, full-stack, Pinecone\nProject: ElevAIte\nTech Stack: React, TailwindCSS, RAG, Pinecone, Node, Express, MongoDB, JWT\nGitHub: https://github.com/Traman2/ElevAIte\nProductivity app with AI assistant to manage tasks, internships, finances, and schedules using Pinecone vector search.",
      type: "project"
    },
    {
      _id: "chunk6",
      chunk_text: "Keywords: deep learning, computer vision, fashion AI, Grad-CAM, ResNet50\nProject: StyleScan\nTech Stack: Python, ResNet50, OpenCV, Matplotlib, NumPy, PIL, Grad-CAM\nGitHub: https://github.com/Traman2/StyleScan\nUsed CNN (ResNet50) for fashion image classification with Grad-CAM for visualization and explainability.",
      type: "project"
    },
    {
      _id: "chunk7",
      chunk_text: "Keywords: regression, data science, housing, Flask, Random Forest\nProject: House Prediction Model\nTech Stack: Python, Scikit-Learn, Flask, React, Random Forest\nGitHub: https://github.com/Traman2/CaliforniaHousePrediction\nBuilt and deployed a predictive regression model for house prices with React frontend and Flask backend.",
      type: "project"
    },
    {
      _id: "chunk8",
      chunk_text: "Keywords: finance, AI, document parsing, RAG, business data\nProject: Arkos - HackAI 2025\nTech Stack: React, TailwindCSS, Express, Flask, Python, RAG\nGitHub: https://github.com/Traman2/2025HackAI-Arkos\nAI tool using RAG to analyze financial reports, enabling users to extract revenue and profit information efficiently.",
      type: "project"
    },
    {
      _id: "chunk9",
      chunk_text: "Keywords: banking, finance, OCR, simulator, JWT, transactions\nProject: Bank Simulator\nTech Stack: React, MongoDB, TailwindCSS, Gemini API, Google Cloud, OCR, JWT\nGitHub: https://github.com/Traman2/Personal-Banker\nBanking app with JWT-auth, OCR for receipts, and transaction tracking. Uses real-time finance monitoring features.",
      type: "project"
    },
    {
      _id: "chunk10",
      chunk_text: "Keywords: machine learning, regression, insurance, healthcare, prediction\nProject: Insurance Prediction - FinHack 2025\nTech Stack: React, Python, TensorFlow, TailwindCSS, Flask\nGitHub: https://github.com/Traman2/25FinHack\nBuilt for FinHack 2025 to predict health insurance costs based on individual and regional data using regression.",
      type: "project"
    },
    {
      _id: "chunk11",
      chunk_text: "Keywords: AI, sign language, accessibility, computer vision, MobileNet\nProject: SignLangAI - HackUTD 2024\nTech Stack: HTML, CSS, JavaScript, TensorFlow.js, MobileNet\nGitHub: https://github.com/Traman2/SignlangAI\nBuilt a real-time AI sign language recognizer using webcam and MobileNet, focused on accessibility and education.",
      type: "project"
    },
    {
      _id: "chunk12",
      chunk_text: "Keywords: technical skills, programming languages, tools, machine learning, web development\nLanguages: Java, Python, C++, C#, JavaScript, TypeScript, HTML/CSS\nFrameworks: React, Node.js, Flask, Express, TailwindCSS\nLibraries: PyTorch, TensorFlow, Scikit-learn, NumPy, Pandas, OpenCV\nTools: GitHub, VS Code, IntelliJ, Eclipse, Figma\nModels: ResNet50, YOLOv9, Grad-CAM, RAG\nDatabases: MongoDB, Pinecone\nAuth: JWT\nCloud: Google Cloud",
      type: "technical skills"
    },
    {
      id: "chunk13",
      chunk_text: "Keywords: summary, data snapshot, portfolio contents, metadata, resume analysis\nThis portfolio vector store represents the professional profile of Tejas Raman. It includes 12 core data chunks across key domains:\n- Personal information: Full name, phone, email, and portfolio website.\n- Education: Computer Science degree at UT Dallas, GPA 3.73, honors, and relevant coursework.\n- Experience: Active participation in the Artificial Intelligence Society, a student club, where Tejas worked on a real-world AI assistant project and placed 2nd in a judged competition.\n- Projects: 9 in-depth AI, ML, and web development projects covering use cases like student productivity (TaskMasterAI), finance (Bank Simulator), health insurance prediction, accessibility (SignLangAI), and more.\n- Technical skills: Broad proficiency in languages (Java, Python, JS), frameworks (React, Flask, Node), ML libraries (TensorFlow, PyTorch), and tools (MongoDB, Pinecone, JWT).\nEach entry includes semantic tags and keywords to enable fine-grained vector search and retrieval.",
      type: "data summary"
    },
    {
      id: "chunk14",
      chunk_text: "Keywords: project summary, software engineering, AI applications, hackathons, full-stack development, web apps, ML, computer vision\nTejas Raman’s portfolio contains a diverse set of 9 technical projects built with a focus on innovation, usability, and performance. The projects span full-stack development, AI integration, and real-world use cases:\n\n- **TaskMasterAI**: An AI-powered academic assistant that uses RAG to analyze syllabi and generate study plans, flashcards, and quizzes. Sub-2ms latency achieved using Gemini API and MongoDB.\n- **ElevAIte**: A productivity platform integrating RAG with Pinecone for task management, internship tracking, and expense monitoring. Emphasized efficient token usage and optimized latency.\n- **StyleScan**: A computer vision-based fashion classifier using ResNet50 and Grad-CAM for interpretability.\n- **Bank Simulator**: A full-stack simulation of a banking app using OCR, JWT auth, and Google Cloud tools for secure finance management.\n- **Insurance Prediction Model**: Built for FinHack 2025 to forecast healthcare insurance costs using TensorFlow.\n- **SignLangAI**: A browser-based AI app that detects sign language in real time using webcam input and TensorFlow.js, built for accessibility.\n- **Arkos**: An AI tool built during HackAI 2025 that parses financial reports with RAG and presents business KPIs.\n- **House Prediction**: Regression models for predicting home prices using Random Forest and React-Flask deployment.\n\nAcross these projects, Tejas demonstrates strong command of both front-end (React, TailwindCSS) and back-end (Node.js, Flask, MongoDB) technologies, paired with machine learning models like ResNet50, YOLOv9, and MobileNet. Many of these projects were built for competitive hackathons and showcase practical AI and software solutions with real-world utility.",
      type: "project summary"
    },
    {
      id: "chunk15",
      chunk_text: "Keywords: clubs, extracurricular, organizations, student groups, teamwork, leadership\nThis portfolio showcases involvement in student organizations like the Artificial Intelligence Society at UT Dallas. These extracurricular activities provided collaborative project experiences in AI and software development. Participation included teamwork, mentorship, and presenting results to industry professionals—bridging technical and interpersonal skills in real-world contexts.",
      type: "organization summary"
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