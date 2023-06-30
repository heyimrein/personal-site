import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import "./IntroHeader.css";
import IntroSlideInText from "./IntroSlideInText.tsx";
import ScrollHint from "./ScrollHint.tsx";

export default function IntroHeader() {
  const { scrollYProgress } = useScroll();
  const [scrollProgress, setScrollProgress] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setScrollProgress(v * 1000);
  });

  return (
    <motion.div id="intro">
      <motion.span
        id="head"
        initial={{ opacity: 0, y: "-20vh" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.75, type: "spring" }}
        style={{ x: scrollProgress * 10 }}
      >
        I'm a
      </motion.span>
      <IntroSlideInText id="gradient-head" delay={0.25} exitMulti={12.5}>
        Fullstack Developer
      </IntroSlideInText>
      <IntroSlideInText id="head" delay={0.5} exitMulti={15}>
        from
      </IntroSlideInText>
      <IntroSlideInText id="gradient-head" delay={0.75} exitMulti={17.5}>
        Memphis, TN
      </IntroSlideInText>
      <ScrollHint />
    </motion.div>
  );
}
