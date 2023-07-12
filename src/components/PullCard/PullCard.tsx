import { motion } from "framer-motion";
import "./PullCard.css";
import { useState } from "react";

export default function PullCard(props: { children: string }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="card-wrapper">
        <motion.div onClick={() => setOpen(!open)} whileTap={{ scale: 0.95 }} />
        <motion.div
          className="card"
          initial={{ y: "-10%" }}
          animate={{ y: "-10%" }}
          drag="y"
        >
          <span>test</span>
          {props.children}
        </motion.div>
        <div className="" />
      </div>
    </>
  );
}
