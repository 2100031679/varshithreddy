import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './Post.css';

const Post = () => {
    const { id } = useParams();
    const [post, setPost] = useState({});

    useEffect(() => {
        axios.get(`/api/posts/${id}`)
            .then(response => setPost(response.data))
            .catch(error => console.error('Error fetching post:', error));
    }, [id]);

    return (
        <div className="post">
            <h2>{post.title}</h2>
            <p>{post.content}</p>
        </div>
    );
};

export default Post;
