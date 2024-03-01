import { useEffect, useState } from 'react'
import loadingGif from './assets/loading.svg'
import './assets/def_styles/main.sass'
import Navbar from './Components/Nav'

function App() {
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    async function FetchBlogs() {
      try {
        const data = await fetch(import.meta.env.VITE_URL)
        const json = await data.json()
        setBlogs(prevBlogs => [...prevBlogs, ...json])
        setTimeout(() => {
          setLoading(false)
        }, 1000)
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
        loading ? 
        <div className='loading'>
        <img src={loadingGif} alt='Loading..'></img> 
        </div>
        : 
        <>
          <Navbar></Navbar>
        </>
      }
    </>
  )
}

export default App
