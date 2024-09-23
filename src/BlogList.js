import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const BlogList = ({blogs, title, handleDelete}) => {
    // const blogs = props.blogs 
    // const title = props.title


  return (
    <div className=''>
      
      {blogs.map((blog) => (
        
        <div className="blog-preview" key={blog.id}>
            <h2 style={{
                color: "black"
            }}>{title} </h2>
            <Link to={`/shop/${blog.id}`}>
           
         <h2>{blog.Title}</h2>
         <p>{blog.Body}</p>
         </Link>
         <p>Written by: {blog.Author}</p>
         {/* <button onClick={() => handleDelete(blog.id)}>Delete blog</button> */}
         <button onClick={() => handleDelete()}>Delete</button>
        </div>
      ))}

    </div>
  )
}

export default BlogList
