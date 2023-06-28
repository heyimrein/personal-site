import { motion } from "framer-motion";
import "./DebugCard.css";

export default function DebugCard() {
  const variants = {
    hidden: {
      scale: 0.5,
      opacity: 0.5,
      filter: "blur(4px)",
    },
    show: {
      scale: 1,
      opacity: 1,
      filter: "blur(0px)",
    },
  };

  return (
    <motion.div
      className="debug-card"
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ amount: "some" }}
      transition={{ duration: 0.5, type: "spring" }}
    >
      <p>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua."
      </p>
    </motion.div>
  );
}
