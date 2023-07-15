import "./CardSection.css";
import ScrollCard from "../../ScrollCard/ScrollCard.tsx";
import { useState } from "react";

export type Item = {
  key: number;
  leftContent: string;
  rightContent: string;
};

export default function CardSection() {
  const [items, setItems] = useState<Item[]>([
    { key: 0, leftContent: "Lorem Ipsum", rightContent: "Lorem Ipsum" },
    { key: 1, leftContent: "Lorem Ipsum", rightContent: "Lorem Ipsum" },
  ]);

  return (
    <div id="card-section">
      <ScrollCard leftContent="Lorem Ipsum" rightContent="Lorem Ipsum" />
      <ScrollCard leftContent="Lorem Ipsum" rightContent="Lorem Ipsum" />
      <ScrollCard leftContent="Lorem Ipsum" rightContent="Lorem Ipsum" />
    </div>
  );
}
