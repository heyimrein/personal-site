import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
} from "framer-motion";
import { useRef, useState } from "react";
import "./IntroHeader.css";
import IntroSlideInText from "./IntroSlideInText.tsx";
import ScrollHint from "./ScrollHint.tsx";

export default function IntroHeader() {
  const target = useRef(null);
  const { scrollYProgress } = useScroll({
    target,
    offset: ["0 0.2", "0.2 0.1"],
  });
  const scrollYProgressSpring = useSpring(scrollYProgress, {
    stiffness: 1000,
    damping: 100,
  });
  const [scrollProgress, setScrollProgress] = useState(0);

  useMotionValueEvent(scrollYProgressSpring, "change", (v) => {
    setScrollProgress(v);
  });

  return (
    <motion.div id="intro">
      <motion.span
        ref={target}
        id="head"
        initial={{ opacity: 0, y: "-20vh" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.75, type: "spring" }}
        style={{ x: `${scrollProgress * 80}vw` }}
      >
        I'm a
      </motion.span>
      <IntroSlideInText id="gradient-head" delay={0.25} scrollOffset={0}>
        Frontend Developer
      </IntroSlideInText>
      <IntroSlideInText id="head" delay={0.5} scrollOffset={0}>
        from
      </IntroSlideInText>
      <IntroSlideInText id="gradient-head" delay={0.75} scrollOffset={0}>
        Memphis, TN
      </IntroSlideInText>
      <ScrollHint />
    </motion.div>
  );
}
