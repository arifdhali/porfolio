import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios";

const Blog = () => {
    const [response, setResponse] = useState();
    const GetData = async () => {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}`);
        if (response?.data?.status) {
            setResponse(response?.data?.data);
        } else {
            console.log(response);
            setResponse(response?.data);
        }

    }
    useEffect(() => {
        GetData();
    }, [])

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-8">
                    {
                        response && response?.map((post, index) => (
                            <div className="card banner-card" key={index}>
                                <div className="card-body">                                    
                                    <img src={`${import.meta.env.VITE_API_URL}upload/post_img/${post.post_thumbnail}`} alt="" className="img-fluid" />
                                    <div className="banner-card-content">
                                        <span className="post-category text-uppercase">
                                            <i className="fa fa-circle" aria-hidden="true"></i>
                                            <Link href="">{post.post_category}</Link>                                                                                            </span>
                                        <h1 className="entry-title card-title">
                                            <Link to={post.post_slug}>
                                                {post.post_title}
                                            </Link>
                                        </h1>
                                        <span className="post-author text-uppercase">BY : Arif Dhali</span>
                                    </div>
                                </div>
                            </div>
                        ))
                    }

                </div>
                <div className="col-lg-4 ">
                </div>
            </div>

            <div className="section-heading d-flex align-items-center justify-content-between mt-5">
                <h2>Latest Stories</h2>
                <a href="" className="view-all">View All <i className="fa fa-angle-double-right"></i></a>
            </div>
            <div className="row gy-4 mt-1">
                <div className="col-lg-4">
                    <div className="card post-category-card h-100">
                        <div className="card-image">
                            <a href="">
                                <img src="https://www.actsnet.org/uploads/blog_images/thumb/1720776701-Depositphotos_11344236_XL_(1).jpg" alt="The Unsung Heroes of Church Life: The Underappreciated Ministry of Administration" />
                            </a>
                        </div>
                        <div className="card-body">
                            <span className="post-category text-uppercase">
                                <i className="fa fa-circle" aria-hidden="true"></i>
                                <a href="https://www.actsnet.org/blog/category/leadership">Leadership</a>,                                                                                    <a href="https://www.actsnet.org/blog/category/systems">Systems</a>                                                                            </span>
                            <p className="entry-title card-title h3-to-p l-height">
                                <a href="https://www.actsnet.org/blog/the-unsung-heroes-of-church-life-the-underappreciated-ministry-of-administration">The Unsung Heroes of Church Life: The Underappreciated Ministry of Administration</a>
                            </p>
                            <p>
                                As a seasoned pastor, I have had the privilege of seeing personally the amazing work that goes on inside the church. It is evident that God is at work in our midst
                            </p>
                        </div>
                        <div className="card-footer d-flex align-items-center justify-content-between post-meta">
                            <span className="post-date">
                                <i className="far fa-clock" aria-hidden="true"></i>
                                13th July, 2024                                </span>
                            <span className="post-author">
                                <i className="far fa-user" aria-hidden="true"></i>By
                                Timothy lee                                </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog
