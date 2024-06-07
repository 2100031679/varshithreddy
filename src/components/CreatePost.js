import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './CreatePost.css';

const CreatePost = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('/api/posts', { title, content })
            .then(response => {
                console.log('Post created:', response.data);
                navigate('/');
            })
            .catch(error => console.error('Error creating post:', error));
    };

    return (
        <form className="create-post" onSubmit={handleSubmit}>
            <label>
                Title:
                <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
            </label>
            <label>
                Content:
                <textarea value={content} onChange={e => setContent(e.target.value)}></textarea>
            </label>
            <button type="submit">Create Post</button>
        </form>
    );
};

export default CreatePost;
