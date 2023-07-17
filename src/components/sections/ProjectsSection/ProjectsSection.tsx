import ProjectCard from "../../ProjectCard/ProjectCard.tsx";
import RustLogo from "../../../assets/rust_logo.svg";
import ItchLogo from "../../../assets/itch_logo.svg";
import BubblesIcon from "../../../assets/bubbles_icon.svg";
import "./ProjectsSection.css";
import ProjectsIntro from "../../ProjectsIntro/ProjectsIntro.tsx";

export default function ProjectsSection() {
  return (
    <div className="projects-section">
      <ProjectsIntro />
      <div className="projects-group">
        <ProjectCard
          text="Text-bubble generator for content-creators"
          href="https://github.com/heyimrein/bubbles"
          iconSrc={BubblesIcon}
          iconAlt="rust logo"
        />
        <ProjectCard
          text="Rust Example Projects for Beginners"
          href="https://github.com/heyimrein/rs-examples"
          iconSrc={RustLogo}
          iconAlt="rust logo"
        />
        <ProjectCard
          text="Games made for Game Jams"
          href="https://heyimrein.itch.io"
          iconSrc={ItchLogo}
          iconAlt="rust logo"
        />
      </div>
      {/*<ProjectsIntro />*/}
    </div>
  );
}
