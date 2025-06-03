import { IBM_Plex_Mono } from "next/font/google";
import LandingPage from "@/components/LandingPage";
import Image from "next/image";
import AboutMe from "@/components/AboutMe";
import MyProjects from "@/components/MyProjects";

export default function Home() {
  return (
    <main className="scroll-smooth">
      <div>
        <LandingPage />
        <AboutMe />
        <MyProjects />
      </div>
    </main>
  );
}
