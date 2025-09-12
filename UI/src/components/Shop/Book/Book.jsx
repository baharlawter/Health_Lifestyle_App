// import "./Book.css";

// function Books({ title, purchase, image, onAdd, onDelete }) {
//   return (
//     <div className="book">
//       <img src={image} alt={title} width="100" />
//       <h3>{title}</h3>
//       <p>{purchase}</p>

//       <div className="add-delete-buttons">
//         <button onClick={onAdd}>Add</button>
//         <button onClick={onDelete}>Delete</button>
//       </div>
//     </div>
//   );
// }

// export default Books;

import "./Book.css";

function Book({ title, author, price, image, onAdd, onDelete }) {
  return (
    <div className="book">
      <img src={image} width="100" />
      <h3>{title}</h3>
      <h4>{author} </h4>
      <p>{price}</p>
      <div className="add-delete-buttons">
        <button onClick={onAdd}>Add</button>
        <button onClick={onDelete}>Delete</button>
      </div>
    </div>
  );
}

export default Book;
