import "./App.css";
import IntroSection from "../sections/IntroSection/IntroSection.tsx";
import CardSection from "../sections/CardSection/CardSection.tsx";

export default function App() {
  return (
    <>
      <div id="main-container">
        <IntroSection />
        <CardSection />
      </div>
    </>
  );
}
