import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Create = () => {
    const [response, setResponse] = useState(null);
    const [postInfo, setPostInfo] = useState({
        title: '',
        featured_img: null,
        category: '0',
        excerpt: '',
        content: ''
    });
    const [categories, setCategories] = useState([]);
    const [previewImg, setPreviewImg] = useState(null);
    const [loading, setLoading] = useState(false);

    // Fetch categories
    const getCategory = async () => {
        try {
            const res = await axios.get(`${import.meta.env.VITE_API_URL}admin/post/category`);
            if (res?.data?.status) {
                setCategories(res?.data?.data);
            }
        } catch (error) {
            setResponse({ status: false, message: error.message });
        }
    };

    useEffect(() => {
        getCategory();
    }, []);

    // Handle form input changes
    const handleForm = (e) => {
        const { value, name, type, files } = e.target;
        setPostInfo(prev => ({
            ...prev,
            [name]: type === 'file' ? files[0] : value
        }));

        if (name === 'featured_img' && files.length > 0) {
            let reader = new FileReader();
            reader.onload = () => setPreviewImg(reader.result);
            reader.readAsDataURL(files[0]);
        }
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        let formData = new FormData();
        for (const key in postInfo) {
            if (postInfo[key]) {
                formData.append(key, postInfo[key]);
            }
        }

        try {
            let res = await axios.post(`${import.meta.env.VITE_API_URL}admin/post/create`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            if (res?.data?.status) {
                setResponse(res?.data);
                // Reset form fields
                setPostInfo({
                    title: '',
                    featured_img: null,
                    category: '0',
                    excerpt: '',
                    content: ''
                });
                setPreviewImg(null);
            } else {
                setResponse(res?.data);
            }
        } catch (error) {
            setResponse({ status: false, message: error.message });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='pt-5'>
            <form onSubmit={handleSubmit} >
                {/* Post Title */}
                <div className="mb-3">
                    <label htmlFor="postTitle" className="form-label">Post Title</label>
                    <input
                        type="text"
                        className="form-control"
                        id="postTitle"
                        placeholder="Enter your post title"
                        name='title'
                        value={postInfo.title}
                        onChange={handleForm}
                    />
                </div>

                {/* Featured Image */}
                <div className="mb-3">
                    <label htmlFor="featuredImage" className="form-label">Featured Image</label>
                    <div className='position-relative'>
                        <input
                            type="file"
                            className="form-control h-100"
                            id="featuredImage"
                            name='featured_img'
                            onChange={handleForm}
                        />
                        <p className='btn btn-primary position-absolute top-0 end-0 pe-none' style={{ width: "250px" }}>
                            {`${previewImg ? "Re-" : ""}Upload`}
                        </p>
                        <p className={`text-${response?.status ? 'success' : 'danger'}`}>
                            {response?.message || ""}
                        </p>
                    </div>
                    {/* Preview Image Section */}
                    {previewImg && (
                        <div className="mt-2" id="imagePreview">
                            <img src={previewImg} alt="Preview" className="img-fluid img-thumbnail" />
                        </div>
                    )}
                </div>

                {/* Select Category */}
                <div className="mb-3">
                    <label htmlFor="categorySelect" className="form-label">Select Category</label>
                    <select className="form-select" id="categorySelect" name='category' value={postInfo.category} onChange={handleForm}>
                        {categories.length > 0 ? (
                            categories.map((cat) => (
                                <option value={cat.category_id} key={cat.category_id}>{cat.category}</option>
                            ))
                        ) : (
                            <option value="0">No Category</option>
                        )}
                    </select>
                </div>

                {/* Excerpt */}
                <div className="mb-3">
                    <label htmlFor="excerptTextarea" className="form-label">Excerpt</label>
                    <textarea
                        className="form-control"
                        id="excerptTextarea"
                        rows="3"
                        placeholder="Enter your excerpt here"
                        name='excerpt'
                        value={postInfo.excerpt}
                        onChange={handleForm}
                    ></textarea>
                </div>

                {/* Content */}
                <div className="mb-3">
                    <label htmlFor="contentTextarea" className="form-label">Content</label>
                    <textarea
                        className="form-control"
                        id="contentTextarea"
                        rows="3"
                        placeholder="Enter your content here"
                        name='content'
                        value={postInfo.content}
                        onChange={handleForm}
                    ></textarea>
                </div>

                {/* Submit Button */}
                <div className="mb-3">
                    <button type="submit" className="btn btn-primary w-100" disabled={loading}>
                        {loading ? 'Submitting...' : 'Submit'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Create;
