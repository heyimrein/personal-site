import "./App.css";
import IntroSection from "../sections/IntroSection/IntroSection.tsx";
import ChatSection from "../sections/ChatSection/ChatSection.tsx";
import CardSection from "../sections/CardSection/CardSection.tsx";

export default function App() {
  return (
    <>
      <div id="main-container">
        <IntroSection />
        <ChatSection />
      </div>
    </>
  );
}
