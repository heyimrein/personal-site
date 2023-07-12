import { motion } from "framer-motion";
import "./PullCard.css";
import { useState } from "react";

export default function PullCard(props: { children: string }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="card-wrapper">
        <motion.div
          onClick={() => setOpen(!open)}
          whileTap={{ scale: 0.95 }}
          whileHover={{}}
        />
        <motion.div
          className="card"
          animate={{ y: `${open ? -50 : -10}%` }}
          drag
        >
          <span>test</span>
          {props.children}
        </motion.div>
      </div>
    </>
  );
}
