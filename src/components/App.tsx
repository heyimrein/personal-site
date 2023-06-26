import "./App.css";
import TitleBar from "./TitleBar.tsx";
import DebugCard from "./DebugCard.tsx";

export default function App() {
  return (
    <>
      <TitleBar />
      <div id="debug-div" className="pt-12">
        <DebugCard />
      </div>
    </>
  );
}
