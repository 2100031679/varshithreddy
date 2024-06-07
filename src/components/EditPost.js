import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import './EditPost.css';

const EditPost = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`/api/posts/${id}`)
            .then(response => {
                setTitle(response.data.title);
                setContent(response.data.content);
            })
            .catch(error => console.error('Error fetching post data:', error));
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`/api/posts/${id}`, { title, content })
            .then(response => {
                console.log('Post updated:', response.data);
                navigate(`/posts/${id}`);
            })
            .catch(error => console.error('Error updating post:', error));
    };

    return (
        <form className="edit-post" onSubmit={handleSubmit}>
            <label>
                Title:
                <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
            </label>
            <label>
                Content:
                <textarea value={content} onChange={e => setContent(e.target.value)}></textarea>
            </label>
            <button type="submit">Update Post</button>
        </form>
    );
};

export default EditPost;
