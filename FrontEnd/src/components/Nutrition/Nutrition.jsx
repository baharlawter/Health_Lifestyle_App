import { useState } from "react";
import "./Nutrition.css";

function Nutrition() {
  const [data, setData] = useState(null); // this holds API Response
  const [selectedFood, setSelectedFood] = useState("cheddar cheese"); //State for Selected Food

  const foodOptions = [
    "Cheddar cheese",
    "Apple",
    "Banana",
    "Grilled Chicken",
    "Peanut Butter",
    "Whole Milk",
    "Broccoli",
    "Oatmeal",
    "Almonds",
    "Yogurt",
  ];
  //Function that calls pulic API
  function getData() {
    fetch("https://trackapi.nutritionix.com/v2/natural/nutrients", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", //these are api key sad Post Method
        "x-app-id": "05ed2e8a",
        "x-app-key": "64a4ec7829202dcbbfa1a561b73e852b",
      },
      body: JSON.stringify({
        query: selectedFood,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        // console.log(result);
        setData(result); //Stores API response in this State(data state)
      })
      .catch((error) => console.error("Fetch error:", error));
  }

  return (
    <div className="nutrition-card">
      <label htmlFor="food-select">Lookup Ingredient:</label>
      <select
        id="food-select"
        value={selectedFood}
        onChange={(e) => setSelectedFood(e.target.value)}
      >
        {foodOptions.map(
          (
            food,
            idx //maping through foodOptions array
          ) => (
            <option key={idx} value={food}>
              {food}
            </option>
          )
        )}
      </select>
      {/* triggers getData function */}
      <button onClick={getData}>Get Nutrition</button>

      {data && (
        <div className="nutrition-stats">
          <h1>{data.foods?.[0]?.food_name}</h1>
          <p>Calories: {data.foods?.[0]?.nf_calories}</p>
          <p>Protein: {data.foods?.[0]?.nf_protein}g</p>
          <p>Fat: {data.foods?.[0]?.nf_total_fat}g</p>
        </div>
      )}
    </div>
  );
}

export default Nutrition;
