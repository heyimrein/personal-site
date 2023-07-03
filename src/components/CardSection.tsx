import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import DescriptionCard from "./DescriptionCard.tsx";
import "./CardSection.css";
import { useRef, useState } from "react";

export default function CardSection() {
  const target = useRef(null);
  const [initialTransition, setInitialTransition] = useState(0.75);
  const [finalTransition, setFinalTransition] = useState(0);
  const { scrollYProgress } = useScroll({
    target,
  });
  const initialTransitionMotion = useTransform(
    scrollYProgress,
    [0, 0.2],
    [0.75, 1]
  );
  const finalTransitionMotion = useTransform(
    scrollYProgress,
    [0.8, 1],
    [0, 0.25]
  );
  const cardScrollProgress = useTransform(
    scrollYProgress,
    [0, 1],
    ["120vh", "-85vh"]
  );

  useMotionValueEvent(initialTransitionMotion, "change", (val) => {
    setInitialTransition(val);
  });
  useMotionValueEvent(finalTransitionMotion, "change", (val) => {
    setFinalTransition(val);
  });

  return (
    <motion.div
      className="card-section"
      ref={target}
      style={{ scale: initialTransition - finalTransition }}
    >
      <div className="card-backdrop">
        <motion.div
          className="card-container"
          style={{ y: cardScrollProgress }}
        >
          <DescriptionCard>
            He/him, 20 Years Old; Currently freelancing
          </DescriptionCard>
          <DescriptionCard>5+ years of Software Dev Experience</DescriptionCard>
          <DescriptionCard>
            Moderating a community of ≈10k members
          </DescriptionCard>
          <DescriptionCard>
            Currently working on a Live-Streaming tool suite written in
            Typescript + React
          </DescriptionCard>
        </motion.div>
      </div>
    </motion.div>
  );
}
