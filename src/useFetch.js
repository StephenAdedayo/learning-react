import React, { useEffect, useState } from 'react'


const useFetch = (url) => {
    const [data, setData] = useState([
        // {title : "My new Website", body: "lorem ipsum .......", author: "stephen", id: 1},
        // {title : "Welcome Party", body: "lorem ipsum .......", author: "skimma", id: 2},
        // {title : "web Dev tools", body: "lorem ipsum .......", author: "Mary", id: 3}
    ])
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(true)




    useEffect(() => {
  const abortCont = new AbortController()


        setTimeout(() => {
          fetch(url, {signal: abortCont.signal})
        .then(res => {
          if(!res.ok){
            throw Error('cannot load')
          }
          return res.json()
        })
        .then(data => {
         setData(data)
          setIsPending(false)
          setError(null)
        })
        .catch(err => {
            if(err.name === 'AbortError'){
                console.log('fetch aborted');
            } else{
                setIsPending(false)
                setError(err.message)
            }

        })
      
        }, 1000)
      
      return () => abortCont.abort()
      }, [url]) 
      
      return (
      
      {data, isPending, error}
      
    
    )

}

export default useFetch
