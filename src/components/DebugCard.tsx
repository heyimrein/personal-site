import {
  motion,
  motionValue,
  useMotionValueEvent,
  useScroll,
  useSpring,
} from "framer-motion";
import "./DebugCard.css";

export default function DebugCard() {
  let { scrollY } = useScroll();
  const springScrollY = useSpring(scrollY);
  let deg = motionValue(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    deg = motionValue(latest * 10000);
  });

  return (
    <motion.div
      className="debug-card"
      style={{ rotateZ: deg }}
      transition={{ duration: 2, type: "spring" }}
    >
      <p>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua."
      </p>
    </motion.div>
  );
}
