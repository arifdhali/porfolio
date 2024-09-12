import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import axios from 'axios';

import PublicLayout from './Layout/PublicLayout';
import AdminLayout from './Layout/AdminLayout';


// public
import { Blog, BlogSingle, Home } from './frontend/Pages';
// admin
import { Admin_Home, Category, Comment, Create, Edit, Post } from './Admin/Pages';

// Auth
import { Login } from './Auth';



import "./App.css";
import { AdminContext } from './Auth/AuthContext';

const App = () => {
    axios.defaults.withCredentials = true;

    return (
        <Router>
            <Routes>
                {/* Authuntication */}
                <Route path='/login' element={<Login />} />
                {/* Public Page */}
                <Route element={<PublicLayout />}>
                    <Route path='/' element={<Home />} />
                    <Route path='/blog' element={<Blog />} />
                    <Route path='/blog/:id' element={<BlogSingle />} />
                </Route>

                {/* Admin Page */}
                <Route element={<AdminContext><AdminLayout /></AdminContext>} path='/admin'>
                    <Route index element={<Admin_Home />} />
                    <Route path='post' element={<Post />} />
                    <Route path='post/:id' element={<Create />} />
                    <Route path='post/:id/edit' element={<Edit />} />
                    <Route path='post/category' element={<Category />} />
                    <Route path='post/create' element={<Create />} />
                    <Route path='post/comment' element={<Comment />} />
                    <Route path='post/comment/create' element={<Comment />} />
                </Route>

                {/* Error */}
                <Route path='*' element={<h1>Error page</h1>} />
            </Routes>
        </Router>
    );
}

export default App;
