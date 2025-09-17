import { useState, useEffect } from "react";
import "./Comments.css";

function Comments() {
  const [comments, setComments] = useState([]);
  const [form, setForm] = useState({ name: "", email: "", content: "" });

  useEffect(() => {
    fetch("http://localhost:8081/api/comments")
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:8081/api/comments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .then((newComment) => {
        setComments([...comments, newComment]);
        setForm({ name: "", email: "", content: "" });
      });
  }

  return (
    <div className="comments-section">
      <h3>Comments</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />
        <textarea
          placeholder="Your comment"
          value={form.content}
          onChange={(e) => setForm({ ...form, content: e.target.value })}
          required
        />
        <button type="submit">Post Comment</button>
      </form>
      <div className="comments-list">
        {comments.map((c, idx) => (
          <div className="comment-card" key={c.id || idx}>
            <strong>{c.name}</strong>
            <p>{c.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Comments;
