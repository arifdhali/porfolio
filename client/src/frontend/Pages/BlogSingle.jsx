import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BlogSingle = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [error, setError] = useState(null);

  const getBlogDetails = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}blog/${slug}`);
      if (response.status === 200) {
        setBlog(response?.data?.post[0]);
      }
    } catch (error) {
      setError('Failed to fetch blog details');
    }
  };

  useEffect(() => {
    getBlogDetails();
  }, [slug]);

  if (error) {
    return <div className="container py-5">Error: {error}</div>;
  }

  if (!blog) {
    return <div className="container py-5">Loading...</div>;
  }



  return (
    <div className='container py-5 px-3'>
      <>
        <img src={`${import.meta.env.VITE_API_URL}upload/post_img/${blog.post_thumbnail}`} alt="" className="img-fluid" />
        <h1>{blog && blog.post_title}</h1>
        <div className="blog-description mt-4">
          <p>{blog.post_content}</p>
        </div>
      </>
    </div>
  );
};

export default BlogSingle;
