import React, { useState } from "react";
import video from "../data/video.js";
import VideoPlayer from "./VideoPlayer";
import CommentSection from "./CommentSection";

function App() {
  const [upvotes, setUpvotes] = useState(video.upvotes);
  const [downvotes, setDownvotes] = useState(video.downvotes);
  const [showComments, setShowComments] = useState(true);

  const handleUpvote = () => setUpvotes(upvotes + 1);
  const handleDownvote = () => setDownvotes(downvotes + 1);
  const toggleComments = () => setShowComments(!showComments);

  return (
    <div className="App">
      <VideoPlayer
        title={video.title}
        embedUrl={video.embedUrl}
        views={video.views}
        createdAt={video.createdAt}
        upvotes={upvotes}
        downvotes={downvotes}
        onUpvote={handleUpvote}
        onDownvote={handleDownvote}
      />
      <button onClick={toggleComments}>
        {showComments ? "Hide Comments" : "Show Comments"}
      </button>
      {showComments && (
        <CommentSection comments={video.comments} />
      )}
    </div>
  );
}

export default App;
