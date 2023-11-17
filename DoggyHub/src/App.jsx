import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CreatePostPage from './pages/CreatePostPage'; 
import PostPage from './pages/PostPage';
import Navbar from './components/Navbar';
import './App.css';


function App() {
  const [posts, setPosts] = useState([]);

  const onPostCreate = (newPost) => {
    setPosts([...posts, { ...newPost, id: Date.now(), comments: [], upvotes: 0, createdAt: new Date().toISOString() }]);
  };
  

  const onUpvote = (postId) => {
    const updatedPosts = posts.map((post) =>
      post.id === postId ? { ...post, upvotes: post.upvotes + 1 } : post
    );
    setPosts(updatedPosts);
  };

  const onDeletePost = (postId) => {
    setPosts(posts.filter(post => post.id !== postId));
  };

  const onUpdatePost = (updatedPost) => {
    setPosts(posts.map(post => post.id === updatedPost.id ? updatedPost : post));
  };

  const onAddComment = (postId, comment) => {
    const updatedPosts = posts.map((post) =>
      post.id === postId ? { ...post, comments: [...post.comments, comment] } : post
    );
  
    console.log(updatedPosts); // Log the updated posts to see if the comments are updated
    setPosts(updatedPosts);
  };
  
  
  


  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage posts={posts} onUpvote={onUpvote} />} />
        <Route path="/create-post" element={<CreatePostPage onPostCreate={onPostCreate} />} />
        <Route path="/post/:id" element={
          <PostPage 
            posts={posts} 
            onUpvote={onUpvote} 
            onUpdatePost={onUpdatePost} 
            onDeletePost={onDeletePost} 
            onAddComment={onAddComment} 
          />
        } />
        {/* Remove the duplicate route */}
      </Routes>
    </Router>
  );
}

export default App;
