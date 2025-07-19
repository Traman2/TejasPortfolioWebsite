import Sidebar from "../components/Desktop/Sidebar.tsx";
import Hero from "../components/Desktop/Hero.tsx";
import Analytics from "../components/Desktop/Analytics.tsx";
import Skillset from "../components/Desktop/Skillsset.tsx";
import Project from "../components/Desktop/Projects.tsx";

export default function SocketLayout() {
  return (
    <>
      <div className="bg-[#090419] h-screen w-screen p-2 flex gap-2">
        {/* Sidebar */}
        <Sidebar />

        <div className="flex-1 rounded-md overflow-y-auto scrollbar-hide h-full">
          <Hero />
          <div className="flex gap-2 mt-2">
            <Skillset />
            <Analytics />
          </div>
          {/* Projects Section */}
          <Project/>
        </div>
      </div>
    </>
  );
}
