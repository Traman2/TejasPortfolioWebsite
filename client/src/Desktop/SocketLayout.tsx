import { useEffect, useState } from "react";
import Sidebar from "../components/Desktop/Sidebar.tsx";
import Home from "./Home.tsx";
import Project from "./Project.tsx";

interface Props {
  page: string;
}
export default function SocketLayout({ page } : Props) {
  const [activePage, setActivePage] = useState(page);

  useEffect(() => {
    setActivePage(page);
  }, [page]);

  function renderPage() {
    switch (activePage) {
      case "Project" :
        return <Project/>

      default:
        return <Home/>
    }
  }
  return (
    <>
      <div className="bg-[#090419] h-screen w-screen p-2 flex gap-2">
        <Sidebar activePage={activePage} />

        <div className="flex-1 rounded-md overflow-y-auto scrollbar-hide h-full">
          {renderPage()}
        </div>
      </div>
    </>
  );
}
