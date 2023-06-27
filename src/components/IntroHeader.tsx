import { motion } from "framer-motion";
import "./IntroHeader.css";

function SlideInText(props: { children: string; id: string; delay: number }) {
  const slideInText = {
    hidden: {
      opacity: 0,
      x: "-50vw",
    },
    show: {
      opacity: 1,
      x: 0,
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
    >
      {props.children}
    </motion.span>
  );
}

export default function IntroHeader() {
  return (
    <div id="intro">
      <motion.span
        id="head"
        initial={{ opacity: 0, y: "-5em" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.75, type: "spring" }}
      >
        I'm a
      </motion.span>
      <SlideInText id="gradient-head" delay={0.25}>
        Fullstack Developer
      </SlideInText>
      <SlideInText id="head" delay={0.5}>
        from
      </SlideInText>
      <SlideInText id="gradient-head" delay={0.75}>
        Memphis, TN
      </SlideInText>
    </div>
  );
}
