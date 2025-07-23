import MobileFooter from "@/components/Mobile/Footer";
import MobileHero from "@/components/Mobile/Home/Hero";
import MobileSkills from "@/components/Mobile/Home/Skills";
import { useEffect } from "react";

export default function Home() {
    useEffect(() => {
      document.title = "Home - Tejas Raman";
    }, []);
  
    return (
      <div className="min-h-screen bg-[#0C1313] p-3">
        <MobileHero/>
        <MobileSkills/>
        <MobileFooter/>
      </div>
    );
}
