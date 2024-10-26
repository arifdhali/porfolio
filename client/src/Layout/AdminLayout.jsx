import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Sidebar, Header } from '../Admin/Components';
import "../Admin/css/Style.min.css";
import { useAuthContext } from '../Auth/AuthContext';

const AdminLayout = () => {
    const isAuthenticated = useAuthContext();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuthenticated) {
            navigate("/login");
        }
    }, [isAuthenticated, navigate]);



    return (
        <div className="wrapper admin">
            <Sidebar />
            <main className='admin-panel'>
                <Header />
                <div className="admin-content py-0 px-4">
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default AdminLayout;
