import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import DescriptionCard from "../../DescriptionCard/DescriptionCard.tsx";
import "./CardSection.css";
import { useRef, useState } from "react";

export default function CardSection() {
  const target = useRef(null);
  const [initialOpacity, setInitialOpacity] = useState(0);
  const [finalOpacity, setFinalOpacity] = useState(0);

  const { scrollYProgress } = useScroll({
    target,
  });
  const cardScrollOffset = useTransform(
    scrollYProgress,
    [0, 1],
    ["120vh", "-85vh"]
  );

  const initialTransitionMotion = useTransform(
    scrollYProgress,
    [0, 0.2],
    [0, 1]
  );
  const finalTransitionMotion = useTransform(scrollYProgress, [0.8, 1], [0, 1]);

  const opacityDelta = 0.25;
  const initialOpacityMotion = useTransform(
    initialTransitionMotion,
    [0, 1],
    [0, opacityDelta]
  );
  const finalOpacityMotion = useTransform(
    finalTransitionMotion,
    [0, 1],
    [0, opacityDelta]
  );

  useMotionValueEvent(initialOpacityMotion, "change", (val) => {
    setInitialOpacity(val);
  });
  useMotionValueEvent(finalOpacityMotion, "change", (val) => {
    setFinalOpacity(val);
  });

  return (
    <motion.div
      className="card-section"
      ref={target}
      style={{
        opacity: 1 - opacityDelta + (initialOpacity - finalOpacity),
        scale: 1 - opacityDelta + (initialOpacity - finalOpacity),
      }}
    >
      <div className="card-backdrop">
        <motion.div className="card-container" style={{ y: cardScrollOffset }}>
          <DescriptionCard>He/him, 20 Years Old; Freelancer</DescriptionCard>
          <DescriptionCard>5+ years of Software Dev Experience</DescriptionCard>
          <DescriptionCard>
            Moderating a community of ≈10k members
          </DescriptionCard>
          <DescriptionCard>
            Currently working on a Live-Streaming tool suite written in
            Typescript + React
          </DescriptionCard>
        </motion.div>
        <div className="input-panel">
          <div className="input-field" />
          <div className="input-submit" />
        </div>
      </div>
    </motion.div>
  );
}
