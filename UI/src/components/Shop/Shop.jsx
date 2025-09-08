// import "./Shop.css";
// import Book from "./Book/Book";
// import { BooksArray } from "../../data/mockData";
// import { useState } from "react";

// function Shop() {
//   const [cart, setCart] = useState([]);

//   function addToCart(book) {
//     setCart([...cart, book]);
//   }

//   function deleteCart(book) {
//     setCart(cart.filter((item) => item.title !== book.title));
//   }

//   return (
//     <>
//       <h2 className="h2-element">Purchase Online Books</h2>
//       <div className="book-container">
//         {BooksArray.map((book, index) => (
//           <Book
//             key={index}
//             title={book.title}
//             link={book.link}
//             purchase={book.purchase}
//             image={book.image}
//             onAdd={() => addToCart(book)}
//             onDelete={() => deleteCart(book)}
//             // onClick={book.onClick}
//           />
//         ))}
//       </div>
//       <div>
//         <h3 className="cart-element">🛒 Cart: {cart.length} </h3>
//         <button>CheckOut</button>
//       </div>
//     </>
//   );
// }

// export default Shop;
//   );

import "./Shop.css";
import Book from "./Book/Book";
import { useState, useEffect } from "react";

function Shop() {
  const [books, setBooks] = useState([]);
  const [cart, setCart] = useState([]);

  // Fetch books from your API when the component mounts
  // useEffect(() => {
  //   fetch("http://localhost:8081/api/books")
  //     .then((res) => res.json())
  //     .then((data) => setBooks(Array.isArray(data) ? data : data.books || []))
  //     .catch((err) => console.error("Error fetching books", err));
  // }, []);
  useEffect(() => {
    fetch("http://localhost:8081/api/books")
      .then((res) => res.json())
      .then((data) => {
        console.log("API data:", data); // <-- Add this line
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
