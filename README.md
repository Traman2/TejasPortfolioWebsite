# Tejas Portfolio Website

Web Portfolio to show my personal projects. Frontend uses React.js and TailwindCSS. Backend uses Node.js, Express,js, MongoDB, and NodeMailer. Website is hosted on Vercel for easier management of hosting and better insights on site activity. RAG Server uses LangChain for LLM Orchestration and gemini-2.5-flash-lite for the NLP Processing. Text embedding model is NVIDIA's llama-text-embed-v2. 

## Technologies Used

- **React** - Frontend library for building user interfaces with easier DOM Manupulation
- **TypeScript** - Type safe JavaScript to reduce errors in dev phase
- **Tailwind CSS** - CSS framework
- **Vite** - Development Server to provide faster and more efficient dev expierence
- **React Router** - Client side routing for different pages
- **Nodemailer** - Securely send email notificatons using SMTP about when visitor fills out contact form
- **Express** - Backend Web Application Framework for handling API requests
- **LangChain** - RAG Orchestration Framework to vectorize my resume, projects and the chat history

## Project Structure

```
├── .gitignore
├── README.md
├── client/
│   ├── .dockerignore
│   ├── .gitignore
│   ├── Dockerfile
│   ├── README.md
│   ├── eslint.config.js
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   ├── public/
│   │   ├── Tejas_Resume.pdf
│   │   ├── icons/
│   │   │   ├── infoi.svg
│   │   │   ├── mainHero.svg
│   │   │   └── techstack/
│   │   ├── projectImages/
│   │   ├── robots.txt
│   │   └── sitemap.xml
│   ├── src/
│   │   ├── lib/
│   │   ├── modals/
│   │   ├── pages/
│   │   └── vite-env.d.ts
├── docker-compose.yml
└── server/
    ├── .dockerignore
    ├── Dockerfile
    ├── api/
    ├── controllers/
    ├── models/
    ├── package-lock.json
    ├── package.json
    ├── routes/
    ├── services/
    └── vercel.json

```

## Getting Started

### Prerequisites

- Node.js (Latest LTS version recommended)
- npm or yarn

### Using Docker for fast preview on local machine

1. Run the cmd:
   ```bash
   docker compose up --build
   ```

2. That's it

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Traman2/TejasPortfolioWebsite.git
   cd TejasPortfolioWebsite
   ```

2. Install dependencies:
   ```bash
   cd client
   npm install
   cd ../server
   npm install
   ```

3. Start the client server:
   ```bash
   npm run dev
   ```

4. Start the backend server:
   ```bash
   cd api
   node index
   ```

The application will be available at `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Author

Tejas