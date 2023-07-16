import "./ProjectCard.css";

interface Props {
  text: string;
  href: string;
  iconSrc: string;
  iconAlt: string;
}

export default function ProjectCard({ text, href, iconSrc, iconAlt }: Props) {
  return (
    <a className="project-card" id={text} href={href}>
      <img src={iconSrc} alt={iconAlt} />
      <span>{text}</span>
    </a>
  );
}
