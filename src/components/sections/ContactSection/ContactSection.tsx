import "./ContactSection.css";
import { useRef, FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import SendIcon from "../../../assets/send_icon.svg";
import CheckIcon from "../../../assets/check_icon.svg";

export default function ContactSection() {
  const form = useRef(null);
  const [sent, setSent] = useState(false);

  const buttonVariants = {
    initial: {
      marginTop: "1em",
    },
    hovering: {
      scale: 1.1,
    },
    tapping: {
      scale: 0.95,
      transition: {
        duration: 0.1,
      },
    },
    hidden: {
      marginTop: "-2em",
      scale: 0,
      transition: {
        delay: 1,
        duration: 0.5,
        ease: [0.68, -0.6, 0.32, 1.6],
      },
    },
  };

  function onSubmit(e: FormEvent) {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_ww4n95s",
        "template_8kt453u",
        form.current,
        "WjnH8Sd9NEGaz1eEF"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    setSent(true);
  }

  return (
    <div id="contact-section">
      <form ref={form} id="contact-form" onSubmit={onSubmit}>
        <span id="contact-label">Contact Me!</span>
        <div className="input-group">
          <input
            className="contact-input"
            placeholder="Full Name"
            name="name"
            type="text"
            required
          />
          <input
            className="contact-input"
            placeholder="Email"
            name="email"
            type="text"
            required
          />
        </div>
        <input
          className="contact-input"
          placeholder="Reason for Contacting"
          name="reason"
          type="text"
          required
        />
        <textarea
          className="contact-input extra-notes"
          placeholder="Extra Notes 😁 (Optional)"
          name="message"
          wrap="hard"
        />
        <motion.button
          id="contact-submit"
          variants={buttonVariants}
          initial="initial"
          animate={sent ? "hidden" : ""}
          whileHover="hovering"
          whileTap="tapping"
          transition={{ duration: 0.1, type: "spring", stiffness: 400 }}
        >
          <motion.img
            src={SendIcon}
            alt="Send"
            initial={{ scale: 1 }}
            animate={sent ? { scale: 0 } : {}}
            transition={{ duration: 0.1 }}
          />
          <motion.img
            src={CheckIcon}
            alt="Send"
            initial={{ scale: 0 }}
            animate={sent ? { scale: 1 } : {}}
            transition={{
              delay: 0.1,
              duration: 0.25,
              type: "spring",
              stiffness: 300,
            }}
          />
        </motion.button>
      </form>
    </div>
  );
}
