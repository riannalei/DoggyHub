import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function PostPage({
  posts,
  onUpvote,
  onUpdatePost,
  onDeletePost,
  onAddComment,
}) {
  const { id: postId } = useParams();
  const [post, setPost] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    const foundPost = posts.find((p) => p.id.toString() === postId);
    if (foundPost) {
      setPost(foundPost);
      setTitle(foundPost.title);
      setContent(foundPost.content);
      setImageUrl(foundPost.imageUrl || "");
    }
  }, [postId, posts]);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    onAddComment(post.id, newComment); // Ensure that `onAddComment` is being called with the new comment
    setNewComment(""); // Reset the new comment state to clear the form
  };

  const handleUpvoteClick = () => {
    onUpvote(post.id);
  };

  const handleDeleteClick = () => {
    onDeletePost(post.id);
  };

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleSaveClick = () => {
    const updatedPost = {
      ...post,
      title,
      content,
      imageUrl,
    };
    onUpdatePost(updatedPost);
    setEditMode(false);
  };

  if (!post) return <div>Post not found.</div>;

  return (
    <article>
      {editMode ? (
        <div>
          <input value={title} onChange={(e) => setTitle(e.target.value)} />
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <input
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
          <button onClick={handleSaveClick}>Save</button>
        </div>
      ) : (
        <div>
          <h1>{post.title}</h1>
          {post.imageUrl && <img src={post.imageUrl} alt={post.title} />}
          <p>{post.content}</p>
          <p>Created at: {new Date(post.createdAt).toLocaleString()}</p>
          <p>Upvotes: {post.upvotes}</p>
          <button onClick={handleUpvoteClick}>Upvote</button>
          <button onClick={handleEditClick}>Edit</button>
          <button onClick={handleDeleteClick}>Delete</button>
        </div>
      )}
      {/* Comments form */}
      <form onSubmit={handleCommentSubmit}>
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Write a comment..."
        />
        <button type="submit">Add Comment</button>
      </form>

      {/* Comments display */}
      {post.comments &&
        post.comments.map((comment, index) => <div key={index}>{comment}</div>)}
    </article>
  );
}

export default PostPage;
