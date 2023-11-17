import React, { useState } from 'react';
import PostList from '../components/PostList';
import './PostPage.css';


function HomePage({ posts, onUpvote }) {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter posts based on the search term
  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search posts by title..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {filteredPosts.length > 0 ? (
        <PostList posts={filteredPosts} onUpvote={onUpvote} />
      ) : (
        <p>No matching posts found.</p>
      )}
    </div>
  );
}

export default HomePage;
