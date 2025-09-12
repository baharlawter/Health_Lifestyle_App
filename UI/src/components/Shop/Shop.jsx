import "./Shop.css";
import Book from "./Book/Book";
import { useState, useEffect } from "react";

function Shop() {
  const [books, setBooks] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8081/api/books")
      .then((res) => res.json())
      .then((data) => {
        console.log("API data:", data);
        setBooks(Array.isArray(data) ? data : data.books || []);
      })
      .catch((err) => console.error("Error fetching books", err));
  }, []);

  function addToCart(book) {
    setCart([...cart, book]);
  }

  function deleteCart(book) {
    setCart(cart.filter((item) => item.title !== book.title));
  }

  return (
    <>
      <h2 className="h2-element">Purchase Online Books</h2>
      <div className="book-container">
        {books.map((book, index) => (
          <Book
            key={book.id || index}
            title={book.title}
            author={book.author}
            image={book.urlImage}
            price={book.price}
            // I can add more props later
            onAdd={() => addToCart(book)}
            onDelete={() => deleteCart(book)}
          />
        ))}
      </div>
      <div>
        <h3 className="cart-element">🛒 Cart: {cart.length} </h3>
        <button>CheckOut</button>
      </div>
    </>
  );
}

export default Shop;
