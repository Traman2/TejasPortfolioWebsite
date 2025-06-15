import MobileAbout from "../../components/MobileComponents/MobileAbout";
import MobileFooter from "../../components/MobileComponents/MobileFooter";
import MobileHero from "../../components/MobileComponents/MobileHero";
import MobileNavbar from "../../components/MobileComponents/MobileNavbar";
import MobileProjectPreview from "../../components/MobileComponents/MobileProjectPreview";

export default function MobileHome() {
  return (
    <div className="min-h-screen w-full bg-[#0F3462] flex flex-col">
      <MobileNavbar />
      <main className="flex flex-col items-center mt-29 px-4">
        <MobileHero/>
        <MobileAbout/>
        <MobileProjectPreview/>
      </main>
      <MobileFooter/>
    </div>
  );
}
