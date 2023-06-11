import React, { useState } from 'react';

const CommentsSection = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleAddComment = () => {
    if (newComment.trim() !== '') {
      const comment = {
        id: Date.now(),
        text: newComment,
        date: new Date().toLocaleString(),
      };
      setComments([...comments, comment]);
      setNewComment('');
    }
  };

  const handleDeleteComment = (commentId) => {
    setComments(comments.filter((comment) => comment.id !== commentId));
  };

  const handleEditComment = (commentId, newText) => {
    setComments(
      comments.map((comment) =>
        comment.id === commentId ? { ...comment, text: newText } : comment
      )
    );
  };

  return (
    <div>
      <h2>Коментарії:</h2>
      {comments.map((comment) => (
        <div key={comment.id}>
          <h3>{comment.text}</h3>
          <p>{comment.date}</p>
          <button onClick={() => handleDeleteComment(comment.id)}>Видалити</button>
          <button
            onClick={() => {
              const newText = prompt('Введіть новий текст коментаря:', comment.text);
              if (newText) {
                handleEditComment(comment.id, newText);
              }
            }}
          >
            Редагувати
          </button>
        </div>
      ))}

      <textarea value={newComment} onChange={handleCommentChange}></textarea>
      <br />
      <button onClick={handleAddComment}>Додати коментар</button>
    </div>
  );
};

export default CommentsSection;