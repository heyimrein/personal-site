import ProjectCard from "../../ProjectCard/ProjectCard.tsx";
import RustLogo from "../../../assets/rust_logo.svg";
import "./ProjectsSection.css";

export default function ProjectsSection() {
  return (
    <div className="projects-section">
      <div className="projects-group">
        <ProjectCard
          text="Rust Example Projects for Beginners"
          href="https://github.com/heyimrein"
          iconSrc={RustLogo}
          iconAlt="rust logo"
        />
      </div>
      <div>
        <span>Projects</span>
      </div>
    </div>
  );
}
