import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";
import Breadcrumb from '../utils/Breadcrumb';
import axios from 'axios';

const Header = () => {
    const [logout, setLogOut] = useState(null);
    const navigate = useNavigate();
    const handelLogout = async () => {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}auth/logout`);
        if (res?.data?.status) {
            setLogOut(res?.data?.status);
        }
    }
    useEffect(() => {        
        if (logout) {
            navigate("/");
        }
    }, [logout, navigate])
    return (
        <>
            <header className="header py-2 px-4  bg-light border-bottom d-flex align-items-center justify-content-between">
                <Breadcrumb />
                <ul className="header-nav d-flex align-items-center justify-content-end m-0">
                    <li>
                        <button className='btn btn-warning' data-bs-toggle="modal"
                            data-bs-target="#LogOutModal">Log out</button>
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


            {/* Log out Modal */}
            <div className="modal fade" id="LogOutModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="LogOutModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="LogOutModalLabel">Confirmation</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <p className='m-0'>Are you sure?</p>
                        </div>
                        <div className="modal-footer justify-content-start">
                            <button type="button" className="btn btn-outline-danger me-1 px-4" data-bs-dismiss="modal" aria-label="Close">No</button>
                            <button type="button" className="btn btn-success me-1 px-4" data-bs-dismiss="modal" aria-label="Close" onClick={handelLogout}>Yes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
