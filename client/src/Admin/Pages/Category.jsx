import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Category = () => {
    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState({ category: "" });
    const [editCategory, setEditCategory] = useState({ category: "" });
    const [response, setResponse] = useState(null);
    const [selectedItem, setSelectedItem] = useState(null);

    const handleInput = (e) => {
        const { name, value } = e.target;
        setCategory(prevCat => ({
            ...prevCat,
            [name]: value
        }));
    };

    const handleEditInput = (e) => {
        const { name, value } = e.target;
        setEditCategory(prevCat => ({
            ...prevCat,
            [name]: value
        }));
    };

    const handleCategoryForm = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${import.meta.env.VITE_API_URL}admin/post/category`, category);
            const { status, message } = res.data;
            setResponse({ status, message });
            if (status) {
                setCategory({ category: "" });
                getCategory();
                document.querySelector("#createModal .btn-close").click();
            }
        } catch (err) {
            setResponse({ status: false, message: err.message });
        }
    };

    const getCategory = async () => {
        try {
            const res = await axios.get(`${import.meta.env.VITE_API_URL}admin/post/category`);
            if (res?.data?.status) {
                setCategories(res.data.data);
            }
        } catch (error) {
            setResponse({ status: false, message: error.message });
        }
    };
    useEffect(() => {
        getCategory();
    }, [])

    const handleDelete = async () => {
        try {
            const response = await axios.delete(`${import.meta.env.VITE_API_URL}admin/post/category/${selectedItem.category_id}`);
            if (response?.data?.status) {
                setCategories(categories.filter(cat => cat.category_id !== selectedItem.category_id));
                setSelectedItem(null);
                document.querySelector("#DeleteModal .btn-close").click();

            }
        } catch (error) {
            setResponse({ status: false, message: error.message });
        }
    };

    const handleEdit = async () => {
        try {
            const response = await axios.patch(`${import.meta.env.VITE_API_URL}admin/post/category/edit/${selectedItem.category_id}`, editCategory);
            console.log(response);
            const { status, message } = response.data;
            setResponse({ status, message });
            if (status) {
                setCategories(categories.map(cat => (cat.category_id === selectedItem.category_id ? { ...cat, ...editCategory } : cat)));
                setSelectedItem(null);
                document.querySelector("#EditModal .btn-close").click();

            }
        } catch (error) {
            setResponse({ status: false, message: error.message });
        }
    };
    return (
        <div>
            <div className="text-end my-3">
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#createModal">
                    Add Category
                </button>
            </div>
            <table className="table table-striped table-bordered bg-white rounded-1">
                <thead>
                    <tr>
                        <th style={{ width: "10%" }}>ID</th>
                        <th style={{ width: "40%" }}>Category Name</th>
                        <th style={{ width: "15%" }} className="text-center">No. of Posts</th>
                        <th style={{ width: "15%" }}>Date Created</th>
                        <th style={{ width: "10%" }}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {categories.length > 0 ? (
                        categories.map((item, index) => (
                            <tr key={item.category_id}>
                                <td valign='middle'>{index + 1}</td>
                                <td valign='middle'>{item.category}</td>
                                <td valign='middle' className="text-center">{item.post_count}</td>
                                <td valign='middle'>{new Date(item.create_date).toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' })}</td>
                                <td valign='middle' className="action-cont">
                                    <button
                                        onClick={() => {
                                            setSelectedItem(item);
                                            setEditCategory({ category: item.category });
                                        }}
                                        title="Edit"
                                        data-bs-toggle="modal"
                                        data-bs-target="#EditModal"
                                        className="btn btn-sm btn-outline-primary me-2"
                                    >
                                        <i className="fa-regular fa-pen-to-square"></i>
                                    </button>
                                    <button
                                        onClick={() => setSelectedItem(item)}
                                        data-bs-toggle="modal"
                                        data-bs-target="#DeleteModal"
                                        className="btn btn-sm btn-outline-danger"
                                    >
                                        <i className="fa-regular fa-trash-can"></i>
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td align="center" colSpan={5}>No Categories</td>
                        </tr>
                    )}
                </tbody>
            </table>

            {/* Create Category Modal */}
            <div className="modal fade" id="createModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="createModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <form className="modal-content" onSubmit={handleCategoryForm}>
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="createModalLabel">Category</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="form-item">
                                <label htmlFor="name" className="form-label">Category Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    name="category"
                                    value={category.category}
                                    onChange={handleInput}
                                />

                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="submit" className="btn btn-success">Submit</button>
                        </div>
                    </form>
                </div>
            </div>

            {/* Delete Category Modal */}
            <div className="modal fade" id="DeleteModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="DeleteModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="DeleteModalLabel">Confirmation</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <label className="form-label">Are you sure you want to delete this category?</label>
                        </div>
                        <div className="modal-footer justify-content-start">
                            <button type="button" className="btn btn-primary me-1 px-4" onClick={handleDelete}>Yes</button>
                            <button type="button" className="btn btn-outline-danger px-4" data-bs-dismiss="modal">No</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Edit Category Modal */}
            <div className="modal fade" id="EditModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="EditModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="EditModalLabel">Edit Category</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="form-item">
                                <label htmlFor="edit-name" className="form-label">Category Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="edit-name"
                                    name="category"
                                    value={editCategory.category}
                                    onChange={handleEditInput}
                                />
                            </div>
                        </div>
                        <div className="modal-footer justify-content-start">
                            <button type="button" className="btn btn-primary me-1 px-4" onClick={handleEdit}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>


    );
};

export default Category;
