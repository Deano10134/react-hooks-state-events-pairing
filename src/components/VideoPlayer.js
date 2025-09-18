import React from "react";

function VideoPlayer({
  title,
  embedUrl,
  views,
  createdAt,
  upvotes,
  downvotes,
  onUpvote,
  onDownvote
}) {
  return (
    <div>
      <iframe
        width="919"
        height="525"
        src={embedUrl}
        frameBorder="0"
        allowFullScreen
        title={title}
      />
      <h1>{title}</h1>
      <p>{views} Views | Uploaded {createdAt}</p>
      <button onClick={onUpvote}>👍 {upvotes}</button>
      <button onClick={onDownvote}>👎 {downvotes}</button>
    </div>
  );
}

export default VideoPlayer;
