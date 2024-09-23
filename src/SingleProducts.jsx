import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useFetch from './useFetch'


const SingleProducts = () => {

    const {id} = useParams()  
    const navigate = useNavigate()
   const {data:blogs, error, isPending} = useFetch(`http://localhost:8001/blogs/${id}`)
  
   const handleDelete = async () => {
    fetch(`http://localhost:8001/blogs/${id}`, {
      method:"DELETE"
    }).then((res) => {
           if(!res.ok){
            throw new Error('failed')
           }        
           return res.json()                  
    }).then(() => {
      navigate('/')
    }).catch(err => {
      console.log(err.message);
    })
  }
  const { Title, Body, Author} = blogs  

  return (
    <div>
      {/* <img src={image} alt="" />
      <p>{title}</p>
      <p>{body}</p>
      <p>{author}</p> */}
      {error && <div> {error} </div>}
      {isPending && <div> loading... </div>}
      {blogs && (
        <article>
          <h2>{Title}</h2>
          <p>{Body}</p>
          <p>{Author}</p>
        <button onClick={handleDelete}>Delete</button>
        </article>
      )}
      {/* <h1>Blog details -{id}</h1> */}
    </div>
  )
}

export default SingleProducts
