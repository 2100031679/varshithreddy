import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className="home-container">
            <div className="blog-info">
                <h2>Welcome to Our Blog!</h2>
                <p>Explore the latest articles, news, and insights in our blog.</p>
            </div>
            <div className="featured-posts">
                <h3>Featured Posts</h3>
                <div className="post">
                    <h4>Post Title 1</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla felis nunc, suscipit sed magna ut, aliquet vehicula arcu.</p>
                </div>
                <div className="post">
                    <h4>Post Title 2</h4>
                    <p>Curabitur sit amet erat eu arcu placerat ultricies. Nullam viverra volutpat quam a ornare.</p>
                </div>
                {/* Add more featured posts as needed */}
            </div>
        </div>
    );
}

export default Home;
