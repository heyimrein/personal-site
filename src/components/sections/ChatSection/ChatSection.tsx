import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import ChatMessage from "../../ChatMessage/ChatMessage.tsx";
import "./ChatSection.css";
import { useRef, useState } from "react";

export default function ChatSection() {
  const target = useRef(null);
  // const [initialOpacity, setInitialOpacity] = useState(0);
  // const [finalOpacity, setFinalOpacity] = useState(0);

  const { scrollYProgress } = useScroll({ target });
  const [scrollProgress, setScrollProgress] = useState(0);
  useMotionValueEvent(scrollYProgress, "change", (val) => {
    setScrollProgress(val);
  });

  const cardScrollOffset = useTransform(
    scrollYProgress,
    [0, 1],
    ["85vh", "-60vh"]
  );

  // const initialTransitionMotion = useTransform(
  //   scrollYProgress,
  //   [0, 0.1],
  //   [0, 1]
  // );
  // const finalTransitionMotion = useTransform(scrollYProgress, [0.8, 1], [0, 1]);
  //
  // const opacityDelta = 0.25;
  // const initialOpacityMotion = useTransform(
  //   initialTransitionMotion,
  //   [0, 1],
  //   [0, opacityDelta]
  // );
  // const finalOpacityMotion = useTransform(
  //   finalTransitionMotion,
  //   [0, 1],
  //   [0, opacityDelta]
  // );
  //
  // useMotionValueEvent(initialOpacityMotion, "change", (val) => {
  //   setInitialOpacity(val);
  // });
  // useMotionValueEvent(finalOpacityMotion, "change", (val) => {
  //   setFinalOpacity(val);
  // });

  return (
    <motion.div
      className="chat-section"
      ref={target}
      // style={{
      //   opacity: 1 - opacityDelta + (initialOpacity - finalOpacity),
      //   scale: 1 - opacityDelta + (initialOpacity - finalOpacity),
      // }}
    >
      <div className="chat-backdrop">
        <div className="progress">
          <motion.div
            className="progress-bar"
            style={{ width: `${scrollProgress * 100}%` }}
          />
        </div>
        <motion.div className="message-wrapper" style={{ y: cardScrollOffset }}>
          <ChatMessage>He/him, 20 Years Old; Freelancer</ChatMessage>
          <ChatMessage>5+ years of Software Dev Experience</ChatMessage>
          <ChatMessage>Moderating a community of ≈10k members</ChatMessage>
          <ChatMessage>
            Currently working on a Live-Streaming tool suite written in
            Typescript + React
          </ChatMessage>
        </motion.div>
        <div className="input-panel">
          <div className="input-field" />
          <div className="input-submit" />
        </div>
      </div>
    </motion.div>
  );
}
