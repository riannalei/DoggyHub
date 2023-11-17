// CreatePostPage.jsx
import React from 'react';
import CreatePostForm from '../components/CreatePostForm';

function CreatePostPage({ onPostCreate }) {
  return (
    <div>
      <h1>Create a New Post</h1>
      <CreatePostForm onPostCreate={onPostCreate} />
    </div>
  );
}

export default CreatePostPage;
