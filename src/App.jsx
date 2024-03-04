import loadingGif from './assets/loading.svg'
import './assets/def_styles/main.sass'
import Navbar from './Components/Nav'
import Main from './Components/Main/blogs'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchBlogs } from './Components/Reducers/blogsReducer'

function App() {
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blogs);

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  return (
    <>
      {
        blogs.loading && !blogs.error
          ?
          <div className='loading'>
            <img src={loadingGif} alt='Loading..'></img>
          </div>
          :
          (blogs.error ? <h1>{blogs.error}</h1> :
            <>
              <Navbar></Navbar>
              <Main></Main>
            </>
          )
      }
    </>
  )
}

export default App
