import axios from 'axios'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const BlogSingle = () => {
  const {slug} = useParams();

  const getBlogDetails = async () => {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}blog/${slug}`);
    console.log(slug)
  }
  useEffect(() => {
    getBlogDetails();
  }, [slug])

  return (
    <div className='container py-5 px-3'>
      <h1>Blog title</h1>

      <div className="blog-description">

      </div>
    </div>
  )
}

export default BlogSingle
