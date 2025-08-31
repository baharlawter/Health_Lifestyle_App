import "./Book.css";

function Books({ title, purchase, image, onAdd, onDelete }) {
  return (
    <div className="book">
      <img src={image} alt={title} width="100" />
      <h3>{title}</h3>
      <p>{purchase}</p>

      <div className="add-delete-buttons">
      <button  onClick={onAdd}>
        Add
      </button>
      <button onClick={onDelete}>
        Delete
      </button>
      </div>
    </div>
  );
}

export default Books;
