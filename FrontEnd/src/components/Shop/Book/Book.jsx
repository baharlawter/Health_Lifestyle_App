import "./Book.css";

function Book({ title, author, price, image, onAdd, onDelete }) {
  return (
    <div className="book">
      <div className="bookInfo">
        <img src={image} width="100" />
        <h3>{title}</h3>
        <h4>{author} </h4>
      </div>
      <p>${Number(price).toFixed(2)}</p>
      <div className="add-delete-buttons">
        <button onClick={onAdd}>Add</button>
        <button onClick={onDelete}>Delete</button>
      </div>
    </div>
  );
}

export default Book;
