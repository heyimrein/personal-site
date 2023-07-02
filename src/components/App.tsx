import "./App.css";
import TitleBar from "./TitleBar.tsx";
import DescriptionCard from "./DescriptionCard.tsx";
import IntroHeader from "./IntroHeader.tsx";

export default function App() {
  return (
    <>
      <TitleBar />
      <div id="main-container" className="pt-12">
        <IntroHeader />
        <div id="card-container">
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
        </div>
      </div>
    </>
  );
}
