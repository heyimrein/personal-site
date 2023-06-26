import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import "./DebugCard.css";
import { useState } from "react";

export default function DebugCard() {
  const { scrollYProgress } = useScroll();
  const [scrollProgress, setScrollProgress] = useState(scrollYProgress.get());

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setScrollProgress(latest);
  });

  return (
    <motion.div
      className="debug-card"
      style={{ translateX: (scrollProgress - 0.15) * 3600 }}
      transition={{ duration: 2, type: "spring" }}
    >
      <p>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua."
      </p>
    </motion.div>
  );
}
