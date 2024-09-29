import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'


const Post = () => {
    const [getposts, setGetPosts] = useState(null);
    const [response, setResponse] = useState(null);
    const [deleteId, setDeleteId] = useState(null);

    const getPost = async () => {
        try {
            const res = await axios.get(`${import.meta.env.VITE_API_URL}admin/post`);
            if (res.status === 200) {
                setGetPosts(res.data.response);
            }
        } catch (error) {
            setResponse({ status: false, message: error.message });
        }
    };
    const deletePostHandle = async () => {        
        try {
            const res = await axios.delete(`${import.meta.env.VITE_API_URL}admin/post/${deleteId}`);
            if (res.status === 200) {
                setGetPosts(getposts.filter(post => post.id !== deleteId));
                document.querySelector("#DeleteModal .btn-close").click();
            }
        } catch (error) {
            console.error('Error deleting post:', error);
        }
    };


    useEffect(() => {
        getPost();
    }, [])
    return (
        <div >
            <div className='text-end my-3'>
                <NavLink to={`create`} className="btn btn-primary">
                    Add Post
                </NavLink>
            </div>
            <table className="table table-striped table-bordered booking_container pt-0 bg-white rounded-1">
                <thead>
                    <tr>
                        <th style={{ width: "8%" }}>ID</th>
                        <th style={{ width: "25%" }}>Post Name</th>
                        <th style={{ width: "25%" }} className="text-center">Post Excerpt</th>
                        <th style={{ width: "15%" }}>Date Created</th>
                        <th className='text-center' style={{ width: "10%" }}>Status</th>
                        <th className='text-center' style={{ width: "8%" }}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        getposts && getposts.length > 0 ? (
                            getposts.map((post, index) => (
                                <tr key={post.id}>

                                    <td>{index + 1}</td>
                                    <td>{post.post_title}</td>
                                    <td className="text-center page-url">
                                        {post.post_excerpt}
                                    </td>
                                    <td>{new Date(post.post_publish_date).toLocaleDateString()}</td>
                                    <td className="action-cont text-center ">
                                        <i className={` fa-solid fa-circle text-${post.post_status == 1 ? "success" : "danger blink"}`} ></i>
                                    </td>
                                    <td className="action-cont text-center">
                                        <Link to={`${post.id}/edit`} className='btn btn-sm btn-outline-primary me-2'>
                                            <i className="fa-regular fa-pen-to-square"></i>
                                        </Link>
                                        <button onClick={() => setDeleteId(post.id)} data-bs-toggle="modal" data-bs-target="#DeleteModal" className="btn btn-sm btn-outline-danger">
                                            <i className="fa-regular fa-trash-can"></i>
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td align="center" colSpan={6}>No Post</td>
                            </tr>
                        )
                    }

                </tbody>
            </table>
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
                            <button type="button" className="btn btn-primary me-1 px-4" onClick={deletePostHandle} >Yes</button>
                            <button type="button" className="btn btn-outline-danger px-4" data-bs-dismiss="modal">No</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post
