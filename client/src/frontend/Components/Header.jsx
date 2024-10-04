import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header className='header position-sticky  w-100 mb-3 frontend'>
            <div className="container">
                <nav className='d-flex align-items-center justify-content-between p-3 rounded-4  start-0'>
                    <Link to={'/'}>
                        {import.meta.env.VITE_SITE_TITLE}
                    </Link>
                    <ul className='d-flex gap-3 m-0 nav-list'>
                        <li>
                            <NavLink to="/">
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/blog">
                                Blog
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/github">
                                Git
                            </NavLink>
                        </li>
                    </ul>
                    <div>
                        <Link className='btn btn-primary text-white' to={'/login'}>Login</Link>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;
