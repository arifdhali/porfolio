import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import Breadcrumb from '../utils/Breadcrumb';
import axios from 'axios';

const Header = () => {
    const handelLogout = async () => {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}auth/logout`);
        console.log(res);
    }
    return (
        <header className="header py-0 px-4  bg-light border-bottom d-flex align-items-center justify-content-between">
            <Breadcrumb />
            <ul className="header-nav d-flex align-items-center justify-content-end m-0">
                <li>
                    <button className='btn btn-warning' onClick={handelLogout}>Log out</button>
                </li>
                <li className="nav-item">
                    <Link>Settings</Link>
                </li>
                <li className="nav-item">
                    <div className="avatar avatar-md">
                        <img src="https://coreui.io/demos/react/5.0/free/assets/8-CQnrj2m9.jpg"
                            className="avatar-img" />
                    </div>
                </li>
            </ul>


        </header >
    )
}

export default Header
