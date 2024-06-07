import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import PostList from './components/PostList';
import Post from './components/Post';
import CreatePost from './components/CreatePost';
import EditPost from './components/EditPost';
import Home from './components/Home'
import Contact from './components/Contact';
import About from './components/About';
import './App.css';

const App = () => (
    <Router>
        <div>
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<PostList />} exact />
                    <Route path="/posts/:id" element={<Post />} />
                    <Route path="/create" element={<CreatePost />} />
                    <Route path="/edit/:id" element={<EditPost />} />
                    <Route path="/Home" element={<Home />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/about" element={<About />} />

                </Routes>
            </main>
            <Footer />
        </div>
    </Router>
);

export default App;
