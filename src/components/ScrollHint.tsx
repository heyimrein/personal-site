import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import "./ScrollHint.css";
import icon from "../assets/scroll_hint.svg";
import { useState } from "react";

export default function ScrollHint() {
  const [firstShow, setFirstShow] = useState(true);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", () => {
    setFirstShow(false);
  });

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
        delay: firstShow ? 3 : 0,
        type: "spring",
      },
    },
  };

  return (
    <>
      <motion.img
        src={icon}
        alt="scroll hint"
        id="scroll-hint"
        variants={variants}
        initial="hidden"
        whileInView="showing"
        viewport={{ margin: "-40% 0% 0% 0%" }}
        // dragTransition={{ bounceDamping: 15, bounceStiffness: 2000 }}
        // dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
        // drag
      />
    </>
  );
}
