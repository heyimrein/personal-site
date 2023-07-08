import {
  motion,
  useInView,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import "./ScrollHint.css";
import icon from "../../assets/scroll_hint.svg";
import { useRef, useState } from "react";

export default function ScrollHint() {
  const ref = useRef(null);
  const view = useInView(ref, { margin: "-40% 0% 0% 0%" });

  const variants = {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    showing: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.25,
        delay: 0,
        type: "spring",
      },
    },
  };

  return (
    <>
      <motion.img
        src={icon}
        alt="scroll hint"
        ref={ref}
        className="scroll-hint"
        variants={variants}
        initial="hidden"
        animate={view ? "showing" : "hidden"}
        // dragTransition={{ bounceDamping: 15, bounceStiffness: 2000 }}
        // dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
        // drag
      />
    </>
  );
}
