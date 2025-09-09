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
import React, { useState } from "react";

import "./Footer.css";

function Footer() {
  const [form, setForm] = useState({ name: "", email: "", comment: "" });
  const [msg, setMsg] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.comment) {
      setMsg("Please fill out all fields.");
      return;
    }
    try {
      const res = await fetch("http://localhost:8081/api/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          content: form.comment,
        }),
      });
      setMsg(
        res.ok ? " Thank you for your comment!" : "Failed to submit comment."
      );
      if (res.ok) setForm({ name: "", email: "", comment: "" });
    } catch {
      setMsg("Failed to submit comment.");
    }
  };

  return (
    <div className="footer-flex-container">
      <div className="footer-box comment-box">
        <h3>Leave Your Comments Below</h3>
        <form onSubmit={handleSubmit}>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
          />
          <br />
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
          />
          <br />
          <textarea
            name="comment"
            value={form.comment}
            onChange={handleChange}
            placeholder="Comments"
          />
          <br />
          <button type="submit">Submit</button>
        </form>
        {msg && <p>{msg}</p>}
      </div>
      <div className="footer-box contact-box">
        <h3>Please Contact Us</h3>
        <ul>
          <li>123 Sloan lane, Las Vegas, NV, 66677</li>
        </ul>
        <p>Phone Number: 123-123-123</p>
        <p>Email: example@gmail.com</p>
      </div>
    </div>
  );
}

export default Footer;
