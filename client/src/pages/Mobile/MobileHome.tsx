import MobileAbout from "../../components/MobileComponents/MobileHome/MobileAbout";
import MobileFooter from "../../components/MobileComponents/MobileFooter";
import MobileHero from "../../components/MobileComponents/MobileHome/MobileHero";
import MobileNavbar from "../../components/MobileComponents/MobileNavbar";
import MobileProjectPreview from "../../components/MobileComponents/MobileHome/MobileProjectPreview";
import MobileConnect from "../../components/MobileComponents/MobileHome/MobileConnect";
import { useEffect } from "react";
import axios from "axios";
import Bowser from "bowser";

export default function MobileHome() {
  useEffect(() => {
    document.title = "Home - Tejas";
  }, []);

  
  useEffect(() => {
    const alreadySent = sessionStorage.getItem("clickLogged");

  if (alreadySent) return;
  sessionStorage.setItem("clickLogged", "true");
    const browser = Bowser.getParser(window.navigator.userAgent);
    const deviceInfo = browser.getResult();
    axios
      .post(
        `https://tejas-portfolio-mail-server.vercel.app/click`,
        {
          deviceType: `Browser: ${deviceInfo.browser.name}, Version: ${deviceInfo.browser.version},  OS: ${deviceInfo.os.name}`,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then(() => {
      })
      .catch((error) => {
        console.error("Upload error: ", error);
      });
  }, []);

  return (
    <div className="min-h-screen w-full bg-[#0F3462] flex flex-col">
      <MobileNavbar />
      <main className="flex flex-col items-center mt-29 px-4">
        <MobileHero />
        <MobileAbout />
        <hr className="w-[60%] mx-auto border-t-1 border-white mt-26" />
        <MobileConnect />
        <hr className="w-[60%] mx-auto border-t-1 border-white mb-8 mt-22" />
        <MobileProjectPreview />
      </main>
      <MobileFooter />
    </div>
  );
}
