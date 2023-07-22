import "./App.css";
import IntroSection from "../sections/IntroSection/IntroSection.tsx";
import ChatSection from "../sections/ChatSection/ChatSection.tsx";
import ProjectsSection from "../sections/ProjectsSection/ProjectsSection.tsx";
import ContactSection from "../sections/ContactSection/ContactSection.tsx";
import FooterSection from "../sections/FooterSection/FooterSection.tsx";
import AboutMeSection from "../sections/AboutMeSection/AboutMeSection.tsx";

export default function App() {
  return (
    <>
      <div id="main-container">
        <IntroSection />
        <ChatSection />
        <AboutMeSection />
        <ProjectsSection />
        <ContactSection />
        <FooterSection />
      </div>
    </>
  );
}
