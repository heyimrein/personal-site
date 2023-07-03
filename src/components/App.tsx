import "./App.css";
import TitleBar from "./TitleBar.tsx";
import IntroHeader from "./IntroHeader.tsx";
import CardSection from "./CardSection.tsx";

export default function App() {
  return (
    <>
      <TitleBar />
      <div id="main-container" className="pt-12">
        <IntroHeader />
        <CardSection />
      </div>
    </>
  );
}
