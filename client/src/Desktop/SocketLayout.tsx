import Sidebar from "../components/Desktop/Home/Sidebar.tsx";
import Home from "./Home.tsx";
export default function SocketLayout() {
  return (
    <>
      <div className="bg-[#090419] h-screen w-screen p-2 flex gap-2">
        <Sidebar />

        <div className="flex-1 rounded-md overflow-y-auto scrollbar-hide h-full">
          <Home/>
        </div>
      </div>
    </>
  );
}
