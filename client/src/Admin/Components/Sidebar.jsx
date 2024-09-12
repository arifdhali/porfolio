import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className='sidebar position-fixed start-0 h-100 bg-dark p-3'>
            <ul className='nav flex-column'>
                <li className='nav-item'>
                    <Link to={`/admin`} className='nav-link'>Logo</Link>
                </li>

                <li className='nav-item' >
                    <p  data-bs-toggle='collapse'
                        data-bs-target='#blogDropdown'
                        aria-expanded='false'
                        aria-controls='blogDropdown' 
                        className='text-white'
                        >
                        Blog
                    </p>

                    <div id='blogDropdown' className='collapse'>
                        <ul className='nav flex-column'>
                            <li className='nav-item'>
                                <NavLink to='post' className='nav-link' >
                                    Post
                                </NavLink>
                            </li>
                            <li className='nav-item'>
                                <NavLink to='post/category' className='nav-link'>
                                    Category
                                </NavLink>
                            </li>
                            <li className='nav-item'>
                                <NavLink to='post/comment' className='nav-link'>
                                    Comment
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
