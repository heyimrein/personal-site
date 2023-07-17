import { motion, useMotionValue } from "framer-motion";
import React from "react";

export default function ProjectsIntro() {
  const degrees = 22.5;

  const rect = document
    .getElementById("projects-intro")
    ?.getBoundingClientRect();
  const x = useMotionValue(rect ? rect.left : 0);
  const y = useMotionValue(rect ? rect.top : 0);

  function handleMouse(event: React.MouseEvent) {
    const rect = event.currentTarget.getBoundingClientRect();

    x.set(((event.clientX - rect.left) / rect.width) * (degrees * 2) - degrees);
    y.set(
      -(((event.clientY - rect.top) / rect.height) * (degrees * 2) - degrees)
    );
  }

  return (
    <motion.div
      className="projects-intro-wrapper"
      onMouseMove={handleMouse}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.1, type: "spring", stiffness: 200 }}
    >
      <motion.div id="projects-intro" style={{ rotateX: y, rotateY: x }}>
        <motion.span>Recent</motion.span>
        <motion.span>Projects</motion.span>
      </motion.div>
    </motion.div>
  );
}
