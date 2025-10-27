import { useState, useEffect } from "react";
import "./Comments.css";
import Register from "../AuthPage/Register/Register";

function Comments() {
  const [comments, setComments] = useState([]);
  const [form, setForm] = useState({
    name: "",
    email: "",
    content: "",
    rating: 5,
  });

  const [currentUserEmail, setCurrentUserEmail] = useState("user@example.com");
  const [editingComment, setEditingComment] = useState(null);

  // Load all comments when the page loads
  useEffect(() => {
    getAllComments();
  }, []);

  function getAllComments() {
    const promise = fetch("http://localhost:8081/api/comments");
    promise
      .then((response) => response.json())
      .then((data) => {
        setComments(data);
      })
      .catch((error) => {
        console.error("Error getting the comments:", error);
      });
    console.log(promise);
  }

  function addComment() {
    fetch("http://localhost:8081/api/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...form,
        userEmail: currentUserEmail,
      }),
    })
      .then((response) => response.json())
      .then((newComment) => {
        setComments([...comments, newComment]);
        resetForm();
      })
      .catch((error) => console.error("Error:", error));
  }

  function updateComment() {
    fetch(`http://localhost:8081/api/comments/${editingComment.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "User-Email": currentUserEmail,
      },
      body: JSON.stringify(form),
    })
      .then((response) => response.json())
      .then((updatedComment) => {
        setComments(
          comments.map((c) => (c.id === updatedComment.id ? updatedComment : c))
        );
        setEditingComment(null);
        resetForm();
      })
      .catch((error) => {
        console.error("Error updating comment:", error);
      });
  }
  function handleDeleteComment(id) {
    fetch(`http://localhost:8081/api/comments/${id}`, {
      method: "DELETE",
      headers: {
        "User-Email": currentUserEmail,
      },
    })
      .then((response) => {
        if (response.ok) {
          setComments(comments.filter((c) => c.id !== id));
        } else if (response.status === 403) {
          alert("You can only delete your own comments!");
        } else {
          throw new Error("Delete failed");
        }
      })
      .catch((error) => {
        console.error("Error deleting comment:", error);
        alert("Error deleting comment");
      });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (editingComment) {
      updateComment();
    } else {
      addComment();
    }
  }

  function startEdit(comment) {
    if (comment.userEmail !== currentUserEmail) {
      alert("You can only edit your own comments!");
      return;
    }

    setEditingComment(comment);
    setForm({
      name: comment.name,
      email: comment.email,
      content: comment.content,
      rating: comment.rating,
    });
  }

  function cancelEdit() {
    setEditingComment(null);
    resetForm();
  }

  function resetForm() {
    setForm({ name: "", email: "", content: "", rating: 5 });
  }

  function isCommentOwner(comment) {
    return comment.userEmail === currentUserEmail;
  }

  return (
    <div className="comments-section">
      <h3>Leave Your Comments</h3>

      {/* Comment Form */}
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
        <h4>Comments ({comments.length})</h4>
        {comments.length === 0 ? (
          <p>No comments yet. Be the first to comment!</p>
        ) : (
          comments.map((comment) => (
            <div className="comment-card" key={comment.id}>
              <strong>{comment.name}</strong>
              <div>{"⭐".repeat(comment.rating || 0)}</div>
              <p>{comment.content}</p>
              <small>By: {comment.email}</small>

              {isCommentOwner(comment) && (
                <div className="comment-actions">
                  <button onClick={() => startEdit(comment)}>Edit</button>
                  <button
                    onClick={() => handleDeleteComment(comment.id)}
                    style={{ backgroundColor: "#ff4444", color: "white" }}
                  >
                    Delete
                  </button>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Comments;
