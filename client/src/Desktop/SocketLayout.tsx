import { useEffect, useState } from "react";
import Sidebar from "../components/Desktop/Sidebar.tsx";
import Home from "./Home.tsx";
import Project from "./Project.tsx";
import ChatbotModal from "./ChatbotModal";

interface Props {
  page: string;
}
export default function SocketLayout({ page }: Props) {
  const [activePage, setActivePage] = useState(page);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    setActivePage(page);
  }, [page]);

  function renderPage() {
    switch (activePage) {
      case "Project":
        return <Project />

      default:
        // Pass openModal to Home
        return <Home openModal={() => setModalOpen(true)} />
    }
  }

  return (
    <>
      <div className="bg-[#090419] h-screen w-screen p-2 flex gap-2">
        <Sidebar activePage={activePage} openModal={() => setModalOpen(true)} />

        <div className="flex-1 rounded-md overflow-y-auto scrollbar-hide h-full">
          {renderPage()}
        </div>
      </div>
      {modalOpen && (
        <ChatbotModal onClose={() => setModalOpen(false)} />
      )}
    </>
  );
}
