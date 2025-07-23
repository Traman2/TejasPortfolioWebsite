import MobileFooter from "@/components/Mobile/Footer";
import MobileBottomNav from "@/components/Mobile/Home/BottomNav";
import MobileHero from "@/components/Mobile/Home/Hero";
import MobileSkills from "@/components/Mobile/Home/Skills";
import { useEffect } from "react";
import useMobileViewportHeight from "../hooks/useViewportHeight";

export default function Home() {
    useEffect(() => {
      document.title = "Home - Tejas Raman";
    }, []);

    useMobileViewportHeight();
  
    return (
      <div style={{ height: "calc(var(--vh, 1vh) * 100)" }} className="min-h-screen bg-[#0C1313] p-3 pb-18">
        <MobileHero/>
        <MobileSkills/>
        <MobileFooter/>
        {/* Bottom Nav Bar */}
        <MobileBottomNav/>
      </div>
    );
}
