import React, { useState } from 'react';

const CommentSection = () => {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');

    const handleInputChange = (e) => {
        setNewComment(e.target.value);
    };

    const handleAddComment = () => {
        if (newComment.trim() !== '') {
            setComments([...comments, newComment]);
            setNewComment('');
        }
    };

    return (
        <div>
            <h2>Comments</h2>
            <ul>
                {comments.map((comment, index) => (
                    <li key={index}>{comment}</li>
                ))}
            </ul>
            <textarea value={newComment} onChange={handleInputChange}></textarea>
            <button onClick={handleAddComment}>Add Comment</button>
        </div>
    );
};

export default CommentSection;
