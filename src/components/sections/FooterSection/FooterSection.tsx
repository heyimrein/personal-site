import "./FooterSection.css";
import FooterLink from "../../FooterLink/FooterLink.tsx";

export default function FooterSection() {
  return (
    <div id="footer-section">
      <span>thanks for scrolling 😉</span>
      <div id="footer-links">
        <FooterLink href="mailto:heyimrein@gmail.com">Email</FooterLink>
        <FooterLink href="https://github.com/heyimrein">GitHub</FooterLink>
        <FooterLink href="https://heyimrein.itch.io">Games</FooterLink>
      </div>
    </div>
  );
}
