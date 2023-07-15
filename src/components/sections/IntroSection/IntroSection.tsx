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
    offset: ["start", "0.2 1"],
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
    <div className="intro">
      <div className="wrapper">
        <div className="logo">
          <motion.img
            className="logo-top"
            src={logoTop}
            alt="logo"
            initial={{ scale: 0, opacity: 0, rotateZ: "45deg", y: "-50vh" }}
            animate={{
              scale: 1,
              opacity: 1,
              rotateZ: `${scrollProgress * 90}deg`,
              x: `${scrollProgress * 75}vw`,
              y: 0,
            }}
            transition={{
              delay: 0,
              duration: 1,
            }}
          />
          <motion.img
            className="logo-bottom"
            src={logoBottom}
            alt="logo"
            initial={{ scale: 0, opacity: 0, rotateZ: "-45deg", y: "50vh" }}
            animate={{
              scale: 1,
              opacity: 1,
              rotateZ: `${scrollProgress * 45}deg`,
              y: `${scrollProgress * -20}vh`,
            }}
            transition={{
              duration: 1,
            }}
          />
        </div>
        <div className="text">
          <motion.span
            className="name"
            initial={{ scale: 0.9, opacity: 0, y: "1em" }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1.5 }}
          >
            rein
          </motion.span>
          <motion.span
            className="name-hint"
            initial={{ scale: 0.5, opacity: 0, y: "2em" }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            /ɹeɪn/
          </motion.span>
          <motion.p
            initial={{ scale: 0.9, opacity: 0, y: "1em" }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 1 }}
          >
            <span>Frontend Dev </span>
            from
            <span> Memphis, TN</span>
          </motion.p>
        </div>
      </div>
    </div>
  );
}
