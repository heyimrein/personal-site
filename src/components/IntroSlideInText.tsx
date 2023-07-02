import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
} from "framer-motion";
import { useRef, useState } from "react";

export default function IntroSlideInText(props: {
  children: string;
  id: string;
  delay: number;
  scrollOffset: number;
}) {
  const target = useRef(null);
  const { scrollYProgress } = useScroll({
    target,
    offset: [`${props.scrollOffset} 0.3`, "0.2 0.1"],
  });
  const scrollYProgressSpring = useSpring(scrollYProgress, {
    stiffness: 1000,
    damping: 100,
  });
  const [scrollProgress, setScrollProgress] = useState(0);

  useMotionValueEvent(scrollYProgressSpring, "change", (v) => {
    setScrollProgress(v);
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
      ref={target}
      variants={slideInText}
      initial="hidden"
      animate="show"
      style={{
        x: `${scrollProgress * 100}vw`,
      }}
    >
      {props.children}
    </motion.span>
  );
}
