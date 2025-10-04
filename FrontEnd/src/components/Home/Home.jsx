import React, { useEffect, useState } from "react";
import Card from "./Cards/Card";

//parent Home gets the data from api and saves to cards[]
function Home() {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8081/api/blogs")
      .then((response) => response.json())
      .then((data) => setCards(data))
      .catch((error) => console.error("Error fetching blog", error));
  }, []);
  return (
    //fetches blog, sotres in cards, loops through array with .map()
    // and renders one <Card/> for each blog

    <div className="cards">
      {cards.map((card, index) => (
        <Card
          key={card.id || index}
          id={card.id}
          image={card.imageUrl}
          title={card.title}
          description={card.blogContent}
        />
      ))}
    </div>
  );
}
export default Home;
