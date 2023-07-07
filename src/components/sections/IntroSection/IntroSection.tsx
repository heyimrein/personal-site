import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
} from "framer-motion";
import { useRef, useState } from "react";
import "./IntroSection.css";
import logoTop from "../../../assets/rein_logo_top.svg";
import logoBottom from "../../../assets/rein_logo_bottom.svg";

export default function IntroSection() {
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
    <motion.div className="intro">
      <motion.div className="wrapper">
        <motion.div className="logo">
          <img className="logo-top" src={logoTop} alt="logo" />
          <img className="logo-bottom" src={logoBottom} alt="logo" />
        </motion.div>
        <motion.div className="text">
          <span className="name">rein</span>
          <span className="name-hint">/ɹeɪn/</span>
          <p>
            <span>Frontend Dev </span>
            from
            <span> Memphis, TN</span>
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
