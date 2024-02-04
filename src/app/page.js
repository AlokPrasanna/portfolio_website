import AboutSection from "./Components/AboutSection";
import AchievementsSection from "./Components/AchievementsSection";
import EmailSection from "./Components/EmailSection";
import Footer from "./Components/Footer";
import HeroSection from "./Components/HeroSection";
import NavigationBar from "./Components/NavigationBar";
import ProjectSection from "./Components/ProjectSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <NavigationBar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection/>
        <AchievementsSection />
        <AboutSection />
        <ProjectSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
