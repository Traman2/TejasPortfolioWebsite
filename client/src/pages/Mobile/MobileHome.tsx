import MobileAbout from "../../components/MobileComponents/MobileHome/MobileAbout";
import MobileFooter from "../../components/MobileComponents/MobileFooter";
import MobileHero from "../../components/MobileComponents/MobileHome/MobileHero";
import MobileNavbar from "../../components/MobileComponents/MobileNavbar";
import MobileProjectPreview from "../../components/MobileComponents/MobileHome/MobileProjectPreview";
import MobileConnect from "../../components/MobileComponents/MobileHome/MobileConnect";
import { useEffect } from "react";

export default function MobileHome() {
  useEffect(() => {
    document.title = "Home - Tejas";
  }, []);

  return (
    <div className="min-h-screen w-full bg-[#0F3462] flex flex-col">
      <MobileNavbar />
      <main className="flex flex-col items-center mt-29 px-4">
        <MobileHero />
        <MobileAbout />
        <hr className="w-[60%] mx-auto border-t-1 border-white mt-26" />
        <MobileConnect />
        <hr className="w-[60%] mx-auto border-t-1 border-white mb-8 mt-26" />
        <MobileProjectPreview />
      </main>
      <MobileFooter />
    </div>
  );
}
