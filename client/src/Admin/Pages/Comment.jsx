import React, { useState } from 'react'
import axios from "axios";
import { Link, NavLink } from 'react-router-dom';

const Category = () => {
    const [category, setCategory] = useState({
        category: "",
    })
    const handelInput = (e) => {
        const { name, value } = e.target;

        setCategory((prev) => ({
            ...prev,
            [name]: value
        }));

    }

    const handleCategoryForm = async (e) => {
        e.preventDefault();
        let response = await axios.post(`${import.meta.env.VITE_API_URL}blog/category`);
        console.log(response);
    };

    return (
        <div>
            <div className='text-end my-3'>
                <ul className='text-end my-3'>
                    <li>
                        <NavLink to={`create`} className="btn btn-primary">
                            Add Comment
                        </NavLink>
                    </li>
                </ul>
            </div>
            <table className="table table-striped table-bordered booking_container pt-0 bg-white rounded-1">
                <thead>
                    <tr>
                        <th style={{ width: "20%" }}>Post</th>
                        <th style={{ width: "25%" }}>Comment</th>
                        <th style={{ width: "15%" }}>Submitted By</th>
                        <th style={{ width: "15%" }}>Submitted On</th>
                        <th style={{ width: "10%" }}>Status</th>
                        <th style={{ width: "15%" }}>Actions</th>
                    </tr>
                </thead>


                <tbody>
                    <tr>

                        <td>API Development</td>
                        <td>This post details the API development process.</td>
                        <td>John Doe</td>
                        <td>08/02/2024</td>
                        <td>
                            <form>
                                <div className="form-item">
                                    <select name="status" id="status" className="form-select">
                                        <option value="1">Active</option>
                                        <option value="2">Deactive</option>
                                    </select>
                                </div>
                            </form>
                        </td>

                        <td className="action-cont">
                            <button title="Edit" className="btn btn-sm btn-outline-primary">
                                <i className="fa-regular fa-pen-to-square d-flex align-items-center justify-content-center"></i>
                            </button>
                            <button
                                title="Delete"
                                className="btn btn-sm btn-outline-danger confirmation"
                                data-action="http://example.com/delete"
                                data-button="Yes"
                                data-html="Are you sure you want to delete this post?"
                            >
                                <i className="fa-regular fa-trash-can d-flex align-items-center justify-content-center"></i>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>


            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <form className="modal-content" onSubmit={handleCategoryForm}>
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Category</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="form-item">
                                <label htmlFor="name">Category Name</label>
                                <input type="text" className='form-control' id='name' name='category' onChange={handelInput} />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="submit" className="btn btn-success">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Category
