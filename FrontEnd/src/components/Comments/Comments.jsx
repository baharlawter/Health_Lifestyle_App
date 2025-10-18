import { useState, useEffect } from "react";
import "./Comments.css";

function Comments() {
  // State for all comments
  const [comments, setComments] = useState([]);
  // State for the form fields
  const [form, setForm] = useState({
    name: "",
    email: "",
    content: "",
    rating: 5,
  });

  const [editingComment, setEditingComment] = useState(null);
  // Load all comments when the page loads
  useEffect(() => {
    getAllComments();
  }, []);

  // Get all comments from the api
  function getAllComments() {
    fetch("http://localhost:8081/api/comments")
      .then((res) => res.json())
      .then((data) => setComments(data));
  }

  // Add a new comment
  function addComment() {
    fetch("http://localhost:8081/api/comments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .then((newComment) => {
        setComments([...comments, newComment]);
        resetForm();
      });
  }

  // Update an existing comment
  function updateComment() {
    fetch(`http://localhost:8081/api/comments/${editingComment.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form), // form includes email
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("You can only edit your own comment");
        }
        return res.json();
      })
      .then((updatedComment) => {
        setComments(
          comments.map((c) => (c.id === updatedComment.id ? updatedComment : c))
        );
        setEditingComment(null);
        resetForm();
      })
      .catch((err) => alert(err.message));
  }

  // Delete a comment
  function deleteComment(id, email) {
    fetch(`http://localhost:8081/api/comments/${id}?email=${email}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (!res.ok) throw new Error("You can only delete your own comment");
        return res.text();
      })
      .then(() => {
        setComments(comments.filter((c) => c.id !== id));
        if (editingComment && editingComment.id === id) {
          setEditingComment(null);
          resetForm();
        }
      })
      .catch((err) => alert(err.message));
  }

  // When the form is submitted
  function handleSubmit(e) {
    e.preventDefault();
    if (editingComment) {
      updateComment();
    } else {
      addComment();
    }
  }

  // When the "Edit" button is clicked
  function startEdit(comment) {
    setEditingComment(comment);
    setForm({
      name: comment.name,
      email: comment.email,
      content: comment.content,
      rating: comment.rating,
    });
  }

  // Cancel editing and reset the form
  function cancelEdit() {
    setEditingComment(null);
    resetForm();
  }

  // Reset the form fields to empty/default
  function resetForm() {
    setForm({ name: "", email: "", content: "", rating: 5 });
  }

  // Render the component
  return (
    <div className="comments-section">
      <h3>Leave Your Comments</h3>
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
          <button type="button" onClick={cancelEdit}>
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
            <button onClick={() => startEdit(c)}>Edit</button>
            <button onClick={() => deleteComment(c.id, c.email)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Comments;
