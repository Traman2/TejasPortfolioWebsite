import Hero from "../components/Desktop/Home/Hero.tsx";
import Analytics from "../components/Desktop/Home/Analytics.tsx";
import Skillset from "../components/Desktop/Home/Skillsset.tsx";
import ProjectsPreview from "../components/Desktop/Home/ProjectsPreview.tsx";
import Footer from "../components/Desktop/Footer.tsx";

interface HomeProps {
  openModal?: () => void;
}

export default function Home({ openModal }: HomeProps) {
  return (
    <>
      <Hero openModal={openModal} />
      <div className="flex gap-2 mt-2">
        <Skillset openModal={openModal} />
        <Analytics />
      </div>
      <ProjectsPreview />
      <Footer />
    </>
  );
}
