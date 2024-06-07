import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './PostList.css';

const PostList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('/api/posts')
            .then(response => setPosts(response.data))
            .catch(error => console.error('Error fetching posts:', error));
    }, []);

    return (
        <div className="post-list">
            {posts.map(post => (
                <div key={post.id}>
                    <h2><Link to={`/posts/${post.id}`}>{post.title}</Link></h2>
                    <p>{post.excerpt}</p>
                </div>
            ))}
        </div>
    );
};

export default PostList;
