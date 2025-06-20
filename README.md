# Tejas Portfolio Website

Web Portfolio to show my personal projects. Frontend uses React.js and TailwindCSS. Backend uses Node.js, Express,js, MongoDB, and NodeMailer. Website is hosted on Vercel for easier management of hosting and better insights on site activity

## Technologies Used

- **React** - Frontend library for building user interfaces with easier DOM Manupulation
- **TypeScript** - Type safe JavaScript to reduce errors in dev phase
- **Tailwind CSS** - CSS framework
- **Vite** - Development Server to provide faster and more efficient dev expierence
- **React Router** - Client side routing for different pages
- **Nodemailer** - Securely send email notificatons using SMTP about when visitor fills out contact form
- **Express** - Backend Web Application Framework for handling API requests

## Project Structure

```
client/
├── src/
│   ├── pages/                       # Page components
│   ├── App.tsx                      # Main application component
│   ├── main.tsx                     # Application entry point
│   └── index.css                    # Global styles
├── public/                          # Static assets
└── package.json                     # Project dependencies and scripts
server/
├── api/
│   └── index.js                     # Express server
├── controllers/
│   └── mailServerController.js      # Controller Logic
├── models/
│   └── formRecord.js                # Form Schema
├── routes/
│   └── mailServerRoutes.js          # Mailserver Routes
└── package.json                     # Project dependencies and scripts
```

## Getting Started

### Prerequisites

- Node.js (Latest LTS version recommended)
- npm or yarn

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
