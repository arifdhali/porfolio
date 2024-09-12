import React from 'react'
import Header from '../frontend/Components/Header'
import { Outlet } from 'react-router-dom'

const PublicLayout = () => {
    return (
        <div className="wrapper">
            <Header />

            <main>
                {/* all child under the PublicLayout Route on App.jsx */}
                <Outlet />
            </main>
        </div>
    )
}

export default PublicLayout;
