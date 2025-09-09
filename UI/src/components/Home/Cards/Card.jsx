import Exercise from "./../../../assets/Exercize.jpg";
import "./Card.css";
// import { useState } from "react";
import { useNavigate } from "react-router-dom";

// function Card({
//   id,
//     title = "",
//     image = "",
//     alt = "",
//     description = "",
// }) {
//   let [cardState, setCardState] = useState(true);

//     return (
//       <div
//         className="card"
//         onClick={() => {
//           setCardState(!cardState);
//         }}
//       >
//         <h2 className="title">{title}</h2>
//         <img
//           className="images exercize"
//           src={image}
//           alt={alt}
//           width={200}
//           height={200}
//         ></img>
//         <div className="description-box">
//         <p className="paragraph">
//           {description}
//         </p>
//         </div>
//       </div>
//     );
function Card({ id, title = "", image = "", alt = "", description = "" }) {
  const navigate = useNavigate();

  return (
    <div
      className="card"
      onClick={() => {
        navigate(`/blog/${id}`);
      }}
    >
      <h2 className="title">{title}</h2>
      <img
        className="images exercize"
        src={image}
        alt={alt}
        width={200}
        height={200}
      />
      <div className="description-box">
        <p className="paragraph">{description}</p>
      </div>
    </div>
  );
}
export default Card;
