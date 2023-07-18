import "./FooterLink.css";

interface Props {
  children: string;
  href: string;
}

export default function FooterLink({ children, href }: Props) {
  return (
    <a className="footer-link" href={href} target="_blank">
      {children}
    </a>
  );
}
