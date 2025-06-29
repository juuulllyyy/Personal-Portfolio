import LandingPage from "@/components/LandingPage";
import AboutMe from "@/components/AboutMe";
import MyProjects from "@/components/MyProjects";

export default function Home() {
  return (
    <main>
      <div>
        <LandingPage />
        <AboutMe />
        <MyProjects />
      </div>
    </main>
  );
}
