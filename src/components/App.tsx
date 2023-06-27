import "./App.css";
import TitleBar from "./TitleBar.tsx";
import DebugCard from "./DebugCard.tsx";
import IntroHeader from "./IntroHeader.tsx";

export default function App() {
  return (
    <>
      <TitleBar />
      <div id="main-container" className="pt-12">
        <IntroHeader />
        <DebugCard />
      </div>
    </>
  );
}
