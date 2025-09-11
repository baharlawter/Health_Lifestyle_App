// import React, { useState } from "react";
// import "./Footer.css";

// function Footer() {
//   const [comment, setComment] = useState("");
//   const [error, setError] = useState("");
//   const [submitted, setSubmitted] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (comment.trim() === "") {
//       setError("Please enter a comment before submitting.");
//       setSubmitted(false);
//     } else {
//       setError("");
//       setSubmitted(true);
//       setComment("");
//     }
//   };

//   return (
//     <div className="contactDiv">
//       <h3>Leave Your Comments Below</h3>
//       <form onSubmit={handleSubmit}>
//         <textarea
//           id="comments"
//           value={comment}
//           onChange={(e) => setComment(e.target.value)}
//           placeholder="Comments"
//         />
//         <br />
//         <button type="submit">Submit</button>
//       </form>
//       {error && <p className="error">{error}</p>}
//       {submitted && <p className="thank-you">✅ Thank you for your comment!</p>}

//       <div>
//         <ul>
//           <h3>Please Contact Us</h3>
//           <li>123 Sloan lane, Las Vegas, NV, 66677</li>
//         </ul>
//         <p>Phone Number: 123-123-123</p>
//         <p>Email: example@gmail.com</p>
//       </div>
//     </div>
//   );
// }

// export default Footer;
