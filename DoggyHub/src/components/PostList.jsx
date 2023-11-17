import React from 'react';
import Post from './Post';

function PostList({ posts, onUpvote }) {
  return (
    <div>
      {posts.length > 0 ? (
        posts.map((post) => (
          <Post
            key={post.id}
            id={post.id}
            title={post.title}
            createdAt={post.createdAt}
            upvotes={post.upvotes}
            onUpvote={onUpvote}
          />
        ))
      ) : (
        <p>No posts to display.</p>
      )}
    </div>
  );
}

export default PostList;
