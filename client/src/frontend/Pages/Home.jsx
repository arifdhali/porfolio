import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="card banner-card">
                            <div className="overlap-link">
                                <Link href="https://www.actsnet.org/blog/the-dangers-of-relying-solely-on-cognitive-transformation-over-spirit-led-change"></Link>
                            </div>
                            <div className="card-body">
                                <img src="https://www.actsnet.org/uploads/blog_images/1723221793-Depositphotos_112241784_XL.jpg" alt="The Dangers of Relying Solely on Cognitive Transformation Over Spirit-Led Change" className="img-fluid" />
                                <div className="banner-card-content">
                                    <span className="post-category text-uppercase">
                                        <i className="fa fa-circle" aria-hidden="true"></i>
                                        <Link href="https://www.actsnet.org/blog/category/relational-discipleship">Discipleship</Link>                                                                                            </span>
                                    <h1 className="entry-title card-title">
                                        <Link href="https://www.actsnet.org/blog/the-dangers-of-relying-solely-on-cognitive-transformation-over-spirit-led-change">
                                            The Dangers of Relying Solely on Cognitive Transformation Over Spirit-Led Change                                            </Link>
                                    </h1>
                                    <span className="post-author text-uppercase">BY : Timothy Lee</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 ">

                    </div>
                </div>
            </div>
            <div className="container">
                <div className="section-heading d-flex align-items-center justify-content-between mt-5">
                    <h2>Latest Stories</h2>
                    <a href="https://www.actsnet.org/blog/listing/latest-stories" className="view-all">View All <i className="fa fa-angle-double-right"></i></a>
                </div>
                <div className="row gy-4 mt-1">
                    <div className="col-lg-4">
                        <div className="card post-category-card h-100">
                            <div className="card-image">
                                <a href="https://www.actsnet.org/blog/the-unsung-heroes-of-church-life-the-underappreciated-ministry-of-administration">
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
        </>
    )
}

export default Home
