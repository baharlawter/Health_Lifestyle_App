// import React from "react";
// import Card from "./Cards/Card";
// import { CardArray } from "../../data/mockData";

// function Home() {
//   return (
//     <div className="cards">
//       {CardArray.map((card, index) => (
//         <Card
//           key={index}
//           image={card.image}
//           title={card.title}
//           description={card.description}
//         />
//       ))}
//     </div>
//   );
// }

// export default Home;

import React, { useEffect, useState } from "react";
import Card from "./Cards/Card";

function Home() {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8081/api/blogs")
      .then((response) => response.json())
      .then((data) => setCards(data))
      .catch((error) => console.error("Error fetching blog", error));
  }, []);
  return (
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
