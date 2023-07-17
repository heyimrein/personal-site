import "./App.css";
import IntroSection from "../sections/IntroSection/IntroSection.tsx";
import ChatSection from "../sections/ChatSection/ChatSection.tsx";
import ProjectsSection from "../sections/ProjectsSection/ProjectsSection.tsx";

export default function App() {
  return (
    <>
      <div id="main-container">
        <IntroSection />
        <ChatSection />
        <ProjectsSection />
      </div>
    </>
  );
}
