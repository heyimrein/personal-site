import "./App.css";
import TitleBar from "../TitleBar/TitleBar.tsx";
import IntroSection from "../sections/IntroSection/IntroSection.tsx";
import CardSection from "../sections/CardSection/CardSection.tsx";

export default function App() {
  return (
    <>
      <TitleBar />
      <div id="main-container" className="pt-12">
        <IntroSection />
        <CardSection />
      </div>
    </>
  );
}
