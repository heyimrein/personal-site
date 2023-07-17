import { motion } from "framer-motion";
import "./ProjectCard.css";
import LinkIcon from "../../assets/link_icon.svg";

interface Props {
  text: string;
  href: string;
  iconSrc: string;
  iconAlt: string;
}

export default function ProjectCard({ text, href, iconSrc, iconAlt }: Props) {
  const variants = {
    hidden: {
      opacity: 0,
      scale: 0.75,
    },
    showing: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 2,
        type: "spring",
        stiffness: 200,
      },
    },
  };

  return (
    <motion.div
      className="project-card"
      id={text}
      variants={variants}
      initial="hidden"
      whileInView="showing"
      dragSnapToOrigin={true}
      dragTransition={{ bounceStiffness: 200, bounceDamping: 20 }}
      drag
    >
      <img src={iconSrc} alt={iconAlt} draggable="false" />
      <span>{text}</span>
      <a className="project-link" href={href} target="_blank">
        <img className="link-icon" src={LinkIcon} alt="Open link in new tab" />
      </a>
    </motion.div>
  );
}
