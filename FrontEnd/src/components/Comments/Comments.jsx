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

  // Current user email (you'll need to get this from your auth system)
  const [currentUserEmail, setCurrentUserEmail] = useState("user@example.com"); // Replace with actual user email
  const [editingComment, setEditingComment] = useState(null);

  // Load all comments when the page loads
  useEffect(() => {
    getAllComments();
  }, []);

  // Get all comments from the API
  async function getAllComments() {
    try {
      const response = await fetch("http://localhost:8081/api/comments");
      const data = await response.json();
      setComments(data);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  }

  // Add a new comment
  async function addComment() {
    try {
      const response = await fetch("http://localhost:8081/api/comments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          userEmail: currentUserEmail, // Add userEmail for ownership tracking
        }),
      });

      if (response.ok) {
        const newComment = await response.json();
        setComments([...comments, newComment]);
        resetForm();
      } else {
        alert("Error creating comment");
      }
    } catch (error) {
      console.error("Error adding comment:", error);
      alert("Error adding comment");
    }
  }

  // Update an existing comment
  async function updateComment() {
    try {
      const response = await fetch(
        `http://localhost:8081/api/comments/${editingComment.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "User-Email": currentUserEmail,
          },
          body: JSON.stringify(form),
        }
      );

      if (response.status === 403) {
        alert("You can only update your own comments!");
        return;
      }

      if (response.ok) {
        const updatedComment = await response.json();
        setComments(
          comments.map((c) => (c.id === updatedComment.id ? updatedComment : c))
        );
        setEditingComment(null);
        resetForm();
      }
    } catch (error) {
      console.error("Error updating comment:", error);
      alert("Error updating comment");
    }
  }

  // Delete a comment
  async function handleDeleteComment(id) {
    try {
      const response = await fetch(`http://localhost:8081/api/comments/${id}`, {
        method: "DELETE",
        headers: {
          "User-Email": currentUserEmail,
        },
      });

      if (response.status === 403) {
        alert("You can only delete your own comments!");
        return;
      }

      if (response.ok) {
        setComments(comments.filter((c) => c.id !== id));
      }
    } catch (error) {
      console.error("Error deleting comment:", error);
      alert("Error deleting comment");
    }
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
    // Check if user owns the comment
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

  // Cancel editing and reset the form
  function cancelEdit() {
    setEditingComment(null);
    resetForm();
  }

  // Reset the form fields to empty/default
  function resetForm() {
    setForm({ name: "", email: "", content: "", rating: 5 });
  }

  // Check if user owns the comment
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

      {/* Comments List */}
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

              {/* Only show edit/delete buttons for comment owner */}
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
