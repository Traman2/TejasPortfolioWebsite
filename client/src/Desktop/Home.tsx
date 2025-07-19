import Hero from "../components/Desktop/Home/Hero.tsx";
import Analytics from "../components/Desktop/Home/Analytics.tsx";
import Skillset from "../components/Desktop/Home/Skillsset.tsx";
import ProjectsPreview from "../components/Desktop/Home/ProjectsPreview.tsx";
import Footer from "../components/Desktop/Footer.tsx";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="flex gap-2 mt-2">
        <Skillset />
        <Analytics />
      </div>
      <ProjectsPreview />
      <Footer />
    </>
  );
}
