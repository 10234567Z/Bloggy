import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    async function FetchBlogs() {
      try {
        const data = await fetch(import.meta.env.VITE_URL)
        const json = await data.json()
        setBlogs(prevBlogs => [...prevBlogs, ...json])
        setLoading(false)
      } catch (error) {
        throw new Error(error)
      }
    }
    if(blogs.length === 0){
      FetchBlogs()
    }
  }, [])
  return (
    <>
      {
        loading ? "loading..." : blogs.map((blog, index) => {
          return <p>{blog.title}</p>
        })
      }
    </>
  )
}

export default App
