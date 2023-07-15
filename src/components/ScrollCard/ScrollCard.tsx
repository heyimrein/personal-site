import { motion } from "framer-motion";
import "./ScrollCard.css";

export default function ScrollCard(props: {
  leftContent: string;
  rightContent: string;
}) {
  const cardVariants = {
    whileHover: {
      y: "-0.25em",
      transition: {
        duration: 0.25,
        stiffness: 200,
        bounce: 1000,
      },
    },
  };

  return (
    <div className="scroll-card">
      <motion.div
        className="scroll-card-left"
        variants={cardVariants}
        whileHover="whileHover"
      >
        <span>{props.leftContent}</span>
      </motion.div>
      <motion.div
        className="scroll-card-right"
        variants={cardVariants}
        whileHover="whileHover"
      >
        <span>{props.rightContent}</span>
      </motion.div>
    </div>
  );
}
