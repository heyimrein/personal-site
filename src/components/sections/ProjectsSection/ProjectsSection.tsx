import ProjectCard from "../../ProjectCard/ProjectCard.tsx";
import RustLogo from "../../../assets/rust_logo.svg";
import "./ProjectsSection.css";

export default function ProjectsSection() {
  return (
    <div className="projects-section">
      <div className="projects-group">
        <ProjectCard
          text="Rust Example Projects for Beginners"
          href="https://github.com/heyimrein/rs-examples"
          iconSrc={RustLogo}
          iconAlt="rust logo"
        />
        <ProjectCard
          text="Games made for Game Jams"
          href="https://heyimrein.itch.io"
          iconSrc={RustLogo}
          iconAlt="rust logo"
        />
        <ProjectCard
          text="Text-bubble generator for content-creators"
          href="https://github.com/heyimrein"
          iconSrc={RustLogo}
          iconAlt="rust logo"
        />
      </div>
      <div className="projects-intro">
        <span>Projects</span>
      </div>
    </div>
  );
}
