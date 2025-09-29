import { useState, useEffect } from "react";
import "./Comments.css";

function Comments() {
  const [comments, setComments] = useState([]);
  const [form, setForm] = useState({
    name: "",
    email: "",
    content: "",
    rating: 5,
  });
  const [editingComment, setEditingComment] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8081/api/comments")
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    if (editingComment) {
      // Edit mode
      fetch(`http://localhost:8081/api/comments/${editingComment.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
        .then((res) => res.json())
        .then((updatedComment) => {
          setComments(
            comments.map((c) =>
              c.id === updatedComment.id ? updatedComment : c
            )
          );
          setEditingComment(null);
          setForm({ name: "", email: "", content: "", rating: 5 });
        });
    } else {
      // Add mode
      fetch("http://localhost:8081/api/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
        .then((res) => res.json())
        .then((newComment) => {
          setComments([...comments, newComment]);
          setForm({ name: "", email: "", content: "", rating: 5 });
        });
    }
  }

  function handleEdit(comment) {
    setEditingComment(comment);
    setForm({
      name: comment.name,
      email: comment.email,
      content: comment.content,
      rating: comment.rating,
    });
  }

  function handleDelete(id) {
    fetch(`http://localhost:8081/api/comments/${id}`, {
      method: "DELETE",
    }).then((res) => {
      if (res.ok) {
        setComments(comments.filter((c) => c.id !== id));
        if (editingComment && editingComment.id === id) {
          setEditingComment(null);
          setForm({ name: "", email: "", content: "", rating: 5 });
        }
      }
    });
  }

  function handleCancelEdit() {
    setEditingComment(null);
    setForm({ name: "", email: "", content: "", rating: 5 });
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
        <label>
          Rating:
          <select
            value={form.rating}
            onChange={(e) =>
              setForm({ ...form, rating: Number(e.target.value) })
            }
            required
          >
            {[1, 2, 3, 4, 5].map((star) => (
              <option key={star} value={star}>
                {star} ⭐
              </option>
            ))}
          </select>
        </label>
        <button type="submit">
          {editingComment ? "Update Comment" : "Post Comment"}
        </button>
        {editingComment && (
          <button type="button" onClick={handleCancelEdit}>
            Cancel Edit
          </button>
        )}
      </form>
      <div className="comments-list">
        {comments.map((c) => (
          <div className="comment-card" key={c.id}>
            <strong>{c.name}</strong>
            <div>{"⭐".repeat(c.rating || 0)}</div>
            <p>{c.content}</p>
            <button onClick={() => handleEdit(c)}>Edit</button>
            <button onClick={() => handleDelete(c.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Comments;
