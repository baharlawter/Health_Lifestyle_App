import React from "react";
import Card from "./Cards/Card";
import { CardArray } from "../../data/mockData";

function Home() {
  return (
    <div className="cards">
      {CardArray.map((card, index) => (
        <Card
          key={index}
          image={card.image}
          title={card.title}
          description={card.description}
        />
      ))}
    </div>
  );
}

export default Home;
