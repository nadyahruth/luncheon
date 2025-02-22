import "./ImageCards.css";
import ImageCard from "./ImageCard.jsx";
import { CARDS } from "../../data.js";
export default function ImageCards() {
  return (
    <section className="cards">
      <ul>
        {CARDS.map((cardItem) => (
          <ImageCard key={cardItem.title} {...cardItem} />
        ))}
      </ul>
    </section>
  );
}
