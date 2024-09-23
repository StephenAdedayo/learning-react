import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'




const Create = () => {
  const [Title, setTitle] = useState("")
  const [Body, setBody] = useState("")
  const [Author, setAuthor] = useState("")
  const [isPending, setIsPending] = useState(false)
  const navigate = useNavigate()
  


  const handleSubmit = (e) => {
    e.preventDefault()

    const blog = {Title, Body, Author}

    
    
    
   setIsPending(true)
      fetch('http://localhost:8001/blogs', {
        method:'POST',
        headers:{"Content-Type" : "application/json" },
        body:JSON.stringify(blog)
      }).then(() => {
        console.log("new blog added");
        // setIsPending(false)
        setTimeout(() => {
          navigate('/')
        }, 2000);

      })

  }



  return (

    <div className='create'>
    <Navbar />  

   <form className='form' onSubmit={handleSubmit}>
    <label>Title:</label>
    <input 
    value={Title}
    required
    onChange={(e) => setTitle(e.target.value)}
    />


<label>Body:</label>
    <input 
    value={Body}
    required
    onChange={(e) => setBody(e.target.value)}
    />
 

 <select
 value={Author}
 onChange={(e) => setAuthor(e.target.value)}
 >
    <option value="steve">Steve</option>
    <option value="ay">ay</option>
 </select>

{!isPending && <button>Add Blog</button>}
{isPending && <button disabled>Adding Blog....</button>}


   </form>

  


   

    </div>
  )
}

export default Create
