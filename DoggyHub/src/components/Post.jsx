import React from 'react';
import { Link } from 'react-router-dom';
import './Post.css';

function Post({ id, title, createdAt, upvotes, onUpvote }) {
  // Format the date
  const formattedDate = new Date(createdAt).toLocaleDateString("en-US", {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <div className="post">
      <h3>{title}</h3>
      <p>{formattedDate}</p>
      <p>Upvotes: {upvotes}</p>
      <button onClick={() => onUpvote(id)}>Upvote</button>
      <Link to={`/post/${id}`}>Read More</Link>
    </div>
  );
}

export default Post;
