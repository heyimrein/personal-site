import { motion } from "framer-motion";
import "./TitleBar.css";
import logo from "../../assets/rein_logo_clip.svg";
import TitleLinks from "../TitleLinks/TitleLinks.tsx";

export default function TitleBar() {
  // const { scrollYProgress } = useScroll();

  return (
    <>
      <div id="title-bar">
        <div id="title-container">
          <a href="http://192.168.12.208:5173/" id="title-name">
            <motion.img
              src={logo}
              alt="logo"
              initial={{ y: -100, rotateZ: "270deg" }}
              animate={{ y: 0, rotateZ: "0" }}
              transition={{ delay: 1, duration: 0.5, type: "spring" }}
            />
            <span>rein</span>
          </a>
          <TitleLinks />
        </div>
        {/*<motion.div id="title-progress" style={{ scaleX: scrollYProgress }} />*/}
      </div>
    </>
  );
}
