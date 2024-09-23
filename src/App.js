import React from 'react'
import Navbar from './Navbar'
import Home from './Home'
import Create from './Create'
// import SingleProducts from './SingleProducts'
// import MyBlog from './MyBlog'

const App = () => {
  return (
    <div className='App'>
      <Navbar/>
      
      <div className="content">
      <Home/>
      </div>
      
      <div>
        <Create />
      </div>
    {/* <SingleProducts /> */}
    </div>
  )
}

export default App
