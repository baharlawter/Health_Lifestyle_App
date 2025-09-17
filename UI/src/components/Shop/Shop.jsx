// import "./Shop.css";
// import Book from "./Book/Book";
// import { useState, useEffect } from "react";

// function Shop() {
//   const [books, setBooks] = useState([]);
//   const [cart, setCart] = useState([]);
//   const[showPayment, setShowPayment]=useState(false);
//   const [cardInfo, setCardInfo]=useState({name: " ", number: " ", exp:""};)

//   useEffect(() => {
//     fetch("http://localhost:8081/api/books")
//       .then((res) => res.json())
//       .then((data) => {
//         setBooks(Array.isArray(data) ? data : data.books || []);
//       })
//       .catch((err) => console.error("Error fetching books", err));
//   }, []);
//   //this adds to the cart
//   function addToCart(book) {
//     setCart([...cart, book]);
//   }
//   //this function removes
//   function removeFromCart(book) {
//     const index = cart.findIndex((item) => item.title === book.title);
//     if (index !== -1) {
//       setCart([...cart.slice(0, index), ...cart.slice(index + 1)]);
//     }
//   }

//   const total = cart.reduce((sum, book) => sum + Number(book.price), 0);
// function handleFakeCheckout(e){
// e.preventDefault();
// alert ("Payment was successfu! Thank you fro your purchase!");
// setCart([]);
// setShowPayment(false);
// setCardInfo({name;"",number:"", exp: ""});
// }
//   return (
//     <>
//       <h2 className="h2-element">Purchase Online Books</h2>
//       <div className="book-container">
//         {books.map((book, index) => (
//           <Book
//             key={book.id || index}
//             title={book.title}
//             author={book.author}
//             image={book.urlImage}
//             price={book.price}
//             onAdd={() => addToCart(book)}
//             onDelete={() => removeFromCart(book)}
//           />
//         ))}
//       </div>
//       <div className="cart-section">
//         <h3 className="cart-element">🛒 Cart: {cart.length}</h3>
//         <ul className="cart-list">
//           {cart.map((book, idx) => (
//             <li key={idx}>
//               <div>
//                 <strong>{book.title}</strong> by {book.author} —{" "}
//                 <span>${Number(book.price).toFixed(2)}</span>
//                 <button onClick={() => removeFromCart(book)}>Remove</button>
//               </div>
//             </li>
//           ))}
//         </ul>
//         <div className="checkout-section">
//           <h4>Total: ${total.toFixed(2)}</h4>
//           <button onClick={() => alert("Checkout coming soon!")}>
//             CheckOut
//           </button>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Shop;
import "./Shop.css";
import Book from "./Book/Book";
import { useState, useEffect } from "react";

function Shop() {
  const [books, setBooks] = useState([]);
  const [cart, setCart] = useState([]);
  const [showPayment, setShowPayment] = useState(false);
  const [cardInfo, setCardInfo] = useState({ name: "", number: "", exp: "" });

  useEffect(() => {
    fetch("http://localhost:8081/api/books")
      .then((res) => res.json())
      .then((data) => {
        setBooks(Array.isArray(data) ? data : data.books || []);
      })
      .catch((err) => console.error("Error fetching books", err));
  }, []);

  function addToCart(book) {
    setCart([...cart, book]);
  }

  function removeFromCart(book) {
    const index = cart.findIndex((item) => item.title === book.title);
    if (index !== -1) {
      setCart([...cart.slice(0, index), ...cart.slice(index + 1)]);
    }
  }

  const total = cart.reduce((sum, book) => sum + Number(book.price), 0);

  function handleFakeCheckout(e) {
    e.preventDefault();
    alert("Payment successful! Thank you for your purchase.");
    setCart([]);
    setShowPayment(false);
    setCardInfo({ name: "", number: "", exp: "" });
  }

  return (
    <>
      <h2 className="h2-element">Purchase Online Books</h2>
      <div className="shop-main">
        <div className="book-container">
          {books.map((book, index) => (
            <Book
              key={book.id || index}
              title={book.title}
              author={book.author}
              image={book.urlImage}
              price={book.price}
              onAdd={() => addToCart(book)}
              onDelete={() =>
                cart.some((item) => item.title === book.title)
                  ? removeFromCart(book)
                  : null
              }
            />
          ))}
        </div>
      </div>
      <div className="cart-section">
        <h3 className="cart-element">🛒 Cart: {cart.length}</h3>
        <ul className="cart-list">
          {cart.map((book, idx) => (
            <li key={idx}>
              <div>
                <strong>{book.title}</strong> by {book.author} —{" "}
                <span>${Number(book.price).toFixed(2)}</span>
                <button onClick={() => removeFromCart(book)}>Remove</button>
              </div>
            </li>
          ))}
        </ul>
        <div className="checkout-section">
          <h4>Total: ${total.toFixed(2)}</h4>
          <button onClick={() => setShowPayment(true)}>CheckOut</button>
          {showPayment && (
            <form onSubmit={handleFakeCheckout}>
              <input
                type="text"
                placeholder="Name on Card"
                value={cardInfo.name}
                onChange={(e) =>
                  setCardInfo({ ...cardInfo, name: e.target.value })
                }
                required
              />
              <input
                type="text"
                placeholder="Card Number"
                value={cardInfo.number}
                onChange={(e) =>
                  setCardInfo({ ...cardInfo, number: e.target.value })
                }
                required
              />
              <input
                type="text"
                placeholder="MM/YY"
                value={cardInfo.exp}
                onChange={(e) =>
                  setCardInfo({ ...cardInfo, exp: e.target.value })
                }
                required
              />
              <button type="submit">Pay</button>
              <button type="button" onClick={() => setShowPayment(false)}>
                Cancel
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  );
}

export default Shop;
