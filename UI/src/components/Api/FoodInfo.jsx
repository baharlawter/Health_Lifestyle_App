import { useState } from "react";
import "./Api.css";
function FoodInfo() {
  const [data, setData] = useState(null);
  const [selectedFood, setSelectedFood] = useState("cheddar cheese");

  const foodOptions = [
    "cheddar cheese",
    "apple",
    "banana",
    "grilled chicken",
    "peanut butter",
    "whole milk",
    "broccoli",
    "oatmeal",
    "almonds",
    "yogurt",
  ];

  function getData() {
    fetch("https://trackapi.nutritionix.com/v2/natural/nutrients", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-app-id": "05ed2e8a",
        "x-app-key": "64a4ec7829202dcbbfa1a561b73e852b",
      },
      body: JSON.stringify({
        query: selectedFood,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setData(result);
      })
      .catch((error) => console.error("Fetch error:", error));
  }

  return (
    <div className="nutrition-card">
      <label htmlFor="food-select">Lookup ingredient:</label>
      <select
        id="food-select"
        value={selectedFood}
        onChange={(e) => setSelectedFood(e.target.value)}
      >
        {foodOptions.map((food, idx) => (
          <option key={idx} value={food}>
            {food}
          </option>
        ))}
      </select>

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

export default FoodInfo;
