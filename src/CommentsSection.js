import React, { useState, useEffect } from 'react';
import { onSnapshot, addDoc, deleteDoc, updateDoc, doc} from 'firebase/firestore';
import { commentsCollection } from './firebase';

const CommentSection = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    const unsubscribe = onSnapshot(commentsCollection, (snapshot) => {
      const commentsData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setComments(commentsData);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleAddComment = async () => {
    if (newComment.trim() !== '') {
      try {
        const commentRef = await addDoc(commentsCollection, {
          text: newComment,
          date: new Date().toLocaleString(),
        });

        const comment = {
          id: commentRef.id,
          text: newComment,
          date: new Date().toLocaleString(),
        };

        setComments([...comments, comment]);
        setNewComment('');
      } catch (error) {
        console.error('Помилка при додаванні коментаря:', error);
      }
    }
  };

  const handleDeleteComment = async (commentId) => {
    try{
      await deleteDoc(doc(commentsCollection, commentId));
      setComments(comments.filter((comment) => comment.id !== commentId));
    } catch (error) {
      console.error('Помилка при видалені коментаря:', error);
    }
  };

  const handleEditComment = async (commentId, newText) => {
    const commentDoc = doc(commentsCollection, commentId);
    try {
      await updateDoc(commentDoc, { text: newText });
      setComments(
        comments.map((comment) =>
          comment.id === commentId ? { ...comment, text: newText } : comment
        )
      );
    } catch (error) {
      console.error('Помилка при видалені коментаря:', error);
    }
  };

  return (
    <div>
      <h2>Коммнтарії:</h2>
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

export default CommentSection;
