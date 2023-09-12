// components/Comments.js
import React from 'react';

const Comments = ({ comments }) => {
  return (
    <div>
      <h2>Comments</h2>
      <ul>
        {comments.map((comment: any) => (
          <li key={comment.id}>
            <p>{comment.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Comments;
