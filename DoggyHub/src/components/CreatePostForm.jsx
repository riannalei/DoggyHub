import React, { useState } from 'react';

function CreatePostForm({ onPostCreate }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Call the onPostCreate function passed via props with the new post data
    onPostCreate({
      title,
      content,
      imageUrl,
      createdAt: new Date().toISOString(),
      upvotes: 0
    });

    // Reset the form fields
    setTitle('');
    setContent('');
    setImageUrl('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="content">Content:</label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="imageUrl">Image URL:</label>
        <input
          id="imageUrl"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
      </div>
      <button type="submit">Create Post</button>
    </form>
  );
}

export default CreatePostForm;
