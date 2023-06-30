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
          <DescriptionCard>He/him, 20 Years Old</DescriptionCard>
          <DescriptionCard>5+ years of Software Dev Experience</DescriptionCard>
          <DescriptionCard>
            Constantly Making Beautiful Websites and Efficient Back-Ends
          </DescriptionCard>
          <DescriptionCard>
            Non-Stop Improvement, Always looking for a New Challenge
          </DescriptionCard>
        </div>
      </div>
    </>
  );
}
