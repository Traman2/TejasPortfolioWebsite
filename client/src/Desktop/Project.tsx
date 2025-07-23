import Footer from "@/components/Desktop/Footer";
import ProjectMain from "@/components/Desktop/Projects/ProjectsMain";
import { useEffect } from "react";

export default function Project() {
    useEffect(() => {
        document.title = "Projects - Tejas Raman";
      }, []);
      
    return (
        <>
        <ProjectMain/>
        <Footer/>
        </>
    )
}