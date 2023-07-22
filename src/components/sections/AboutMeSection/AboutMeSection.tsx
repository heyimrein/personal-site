import "./AboutMeSection.css";

export default function AboutMeSection() {
  return (
    <div id="about-me-section">
      <header className="about-me-header">About Me</header>
      <span className="about-me-content">
        👋 Hi! I'm Rein, and I'm a 20 year old fontend dev from Memphis, TN!
      </span>
      <br />
      <span className="about-me-content">
        Self taught for the last 5 years, I've developed many games, websites,
        desktop apps, etc, but now I'm looking for longer-term projects to work
        on 😁
      </span>
      <br />
      <span className="about-me-content">
        I'm currently working on commissioned portfolio websites, and a CMS to
        accompany them. If you would like a custom site, contact me!
      </span>
      <div className="about-me-divider" />
      <header className="about-me-header">Current Projects</header>
      <ul className="about-me-content">
        <li>CMS for my commissioned portfolio sites</li>
        <li>Online content-creation tool suite</li>
      </ul>
      <div className="about-me-divider" />
      <header className="about-me-header">Interests</header>
      <ul className="about-me-content">
        <li>Online Content-Creation</li>
        <li>Music Production</li>
        <li>Open Source Software</li>
      </ul>
    </div>
  );
}
