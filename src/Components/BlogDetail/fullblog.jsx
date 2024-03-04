import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import loadingGif from '../../assets/loading.svg'

export default function FullBlog() {
    const [loading , setLoading] = useState(true)
    const [blog , setBlog] = useState({})
    const {id} = useParams()
    useEffect(()=> {
        async function FetchBlog(){
            try {
                const data = await axios.get(`${import.meta.env.VITE_URL}/blogs/${id}`).then(res => res.data)
                setBlog(data.blog)
                setLoading(false)
            } catch (error) {
                throw new Error(error)
            }
        
        }
        FetchBlog()
    } , [])
    return (
        <>

        </>
    )
}