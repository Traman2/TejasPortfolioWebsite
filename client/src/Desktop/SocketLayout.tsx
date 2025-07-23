import { useEffect, useState, useRef } from "react";
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
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setActivePage(page);
  }, [page]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }
  }, [activePage]);

  function renderPage() {
    switch (activePage) {
      case "Project":
        return <Project />

      default:
        return <Home openModal={() => setModalOpen(true)} />
    }
  }

  return (
    <>
      <div className="bg-[#090419] h-screen w-screen p-2 flex gap-2">
        <Sidebar activePage={activePage} openModal={() => setModalOpen(true)} />

        <div ref={scrollRef} className="flex-1 rounded-md overflow-y-auto scrollbar-hide h-full">
          {renderPage()}
        </div>
      </div>
      {modalOpen && (
        <ChatbotModal onClose={() => setModalOpen(false)} />
      )}
    </>
  );
}
