import "./CardSection.css";
import ScrollCard from "../../ScrollCard/ScrollCard.tsx";

export type Item = {
  key: number;
  leftContent: string;
  rightContent: string;
};

export default function CardSection() {
  return (
    <div id="card-section">
      <ScrollCard leftContent="Lorem Ipsum" rightContent="Lorem Ipsum" />
      <ScrollCard leftContent="Lorem Ipsum" rightContent="Lorem Ipsum" />
      <ScrollCard leftContent="Lorem Ipsum" rightContent="Lorem Ipsum" />
    </div>
  );
}
