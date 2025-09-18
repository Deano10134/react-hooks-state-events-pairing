import React from "react";

function CommentSection({ comments }) {
  return (
    <div>
      <h2>{comments.length} Comments</h2>
      <ul>
        {comments.map(comment => (
          <li key={comment.id}>
            <b>{comment.user}</b>
            <p>{comment.comment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CommentSection;
