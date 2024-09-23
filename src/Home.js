// import React, { useEffect } from 'react'
// import { useState } from 'react'
import { useParams } from 'react-router-dom'
import BlogList from './BlogList'
import Navbar from './Navbar'
import useFetch from './useFetch'

const Home = () => {
  const {id} = useParams()
   
// const [age, setAge] = useState(25)

    // const handlleClick = () => {
        // setName("stephen")
        // setAge(40)
        
        
    // }

    // const handleClickAgain = (name) => {
    //     alert(`you clicked me ${name}`)
    // }

    // const name = "click me"

    

    // const [Age, setAge] = useState("steve")

    
  //  const handleDelete = (id) => {
  //   const setBlog = blogs.filter(blog => blog.id !== id)
  //   setBlogs(setBlog)
  //  }


  //  useEffect(() =>{
  //   console.log("i ran")
  //   console.log(Age)
  //  }, [Age])
const {data:blogs, isPending, error} = useFetch('http://localhost:8001/blogs')





  return (
    <div className='home'>
      <Navbar />
        {/* <p>{nami} is {age} years old</p> */}
      
      {/* <button onClick={handlleClick}>{name}</button> */}
      {/* <button onClick={() => handleClickAgain()}>{name}</button> */}
      {error && <div> { error } </div>}
      {isPending && <div> loading.... </div>}
      {blogs && <BlogList blogs={blogs} title = "Title" />}
      
      <BlogList blogs={blogs.filter(blog => blog.Author === "Temmy")} title = "Steve's blog" />
        {/* <BlogList blogs={blogs.filter(blog => blog.id === 2)} handleDelete={handleDelete}/> */}
      {/* <button onClick={() => {setAge("stephen")}}>change name</button> */}
      {/* <p>{Age}</p> */}

   
     

    </div>
  )
}

export default Home
