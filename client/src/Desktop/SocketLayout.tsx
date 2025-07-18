import Sidebar from "../../components/Desktop/Sidebar.tsx"

export default function SocketLayout() {
  return (
    <>
      <div className="bg-[#252525] h-screen w-screen p-2 flex gap-2">
        {/* Sidebar */}
        <Sidebar/>

        <div className="flex-1 rounded-md bg-black">
            Main area    
        </div>
      </div>
    </>
  );
}
