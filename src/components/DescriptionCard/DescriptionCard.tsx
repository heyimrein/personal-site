import { motion } from "framer-motion";
import "./DescriptionCard.css";

export default function DescriptionCard(props: { children: string }) {
  const variants = {
    hidden: {
      scale: 0.5,
      opacity: 0,
      filter: "blur(4px)",
    },
    show: {
      scale: 1,
      opacity: 1,
      boxShadow: "0 0 3em rgba(var(--gradient-color-left-rgb), 0.2)",
      filter: "blur(0px)",
    },
  };

  return (
    <motion.div
      className="desc-card"
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ amount: "some", margin: "-20% 0% -30% 0%" }}
      transition={{ duration: 0.5, type: "spring" }}
    >
      <p>{props.children}</p>
    </motion.div>
  );
}
