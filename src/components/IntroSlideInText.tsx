import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";

export default function IntroSlideInText(props: {
  children: string;
  id: string;
  delay: number;
  exitMulti: number;
}) {
  const { scrollYProgress } = useScroll();
  const [scrollProgress, setScrollProgress] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setScrollProgress(v * 1000);
  });

  const slideInText = {
    hidden: {
      opacity: 0,
      translateX: "-50vw",
    },
    show: {
      opacity: 1,
      translateX: 0,
      transition: {
        delay: props.delay,
        duration: 1.5,
        ease: [0.33, 1, 0.68, 1],
      },
    },
  };

  return (
    <motion.span
      id={props.id}
      variants={slideInText}
      initial="hidden"
      animate="show"
      style={{
        x: scrollProgress * props.exitMulti,
      }}
    >
      {props.children}
    </motion.span>
  );
}
