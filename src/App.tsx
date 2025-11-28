import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { BackgroundElements } from "./components/BackgroundElements";

export default function App() {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#121212] text-[#EAEAEA] relative">
      <BackgroundElements />
      <div className="relative z-10">
        <Navigation />
        <Hero onViewWork={scrollToProjects} />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}