import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import axios from "axios"
import loadingGif from '../../assets/loading.svg'
import commentImage from "/comment.svg";
import style from "./fullblog.module.sass";
import Navbar from "../Nav";
import deleteImage from '../../assets/delete.svg'
import editImage from '../../assets/edit.svg'
import { useDispatch, useSelector } from "react-redux";
import '../popup.sass'
import { fetchUser } from "../Reducers/usersReducer";

export default function FullBlog() {
    const [loading, setLoading] = useState(true)
    const [blog, setBlog] = useState({})
    const [comment, setComment] = useState('')
    const [show, setShow] = useState(false)
    const [editing, setEditing] = useState('')
    const { id } = useParams()
    const user = useSelector(state => state.user.username)
    const dispatch = useDispatch()
    useEffect(() => {
        async function FetchBlog() {
            try {
                const data = await axios.get(`${import.meta.env.VITE_URL}/blogs/${id}`).then(res => res.data)
                setBlog(data.blog)
                setLoading(false)
            } catch (error) {
                throw new Error(error)
            }
        }
        FetchBlog()
        dispatch(fetchUser());
    }, [blog])

    const handleCommentSubmit = (e) => {
        e.preventDefault()
        axios.post(`${import.meta.env.VITE_URL}/blogs/${id}/comments`, { text: comment }, {
            headers: {
                'Authorization': `${localStorage.getItem('token')}`
            },
        })
            .then(res => {
                setBlog({ ...blog, comments: [...blog.comments, res.data.comment] })
                setComment('')
            })
            .catch(err => console.log(err))
    }

    const handleEditSubmit = (e) => {
        e.preventDefault()
        axios.put(`${import.meta.env.VITE_URL}/blogs/${id}/comments/${editing}`, { text: comment }, {
            headers: {
                'Authorization': `${localStorage.getItem('token')}`
            },
        })
            .then(res => {
                setBlog({ ...blog, comments: blog.comments.map(c => c._id === editing ? res.data.comment : c) })
                setComment('')
            })
            .catch(err => console.log(err))
        setShow(false)
    }
    return (
        <>
            <div className={`Popup ${show ? "show" : ""}`}>
                <div className='PopupContent'>
                    <form action="#" onSubmit={handleEditSubmit}>
                        <textarea placeholder='Content' value={comment} onChange={(e) => setComment(e.target.value)}  minLength={1} required></textarea>
                        <div className="buttons">
                            <button type='submit'>Edit</button>
                            <button type="button" onClick={() => {setShow(false); setEditing(''); }}>Close</button>
                        </div>
                    </form>
                </div>
            </div>
            {
                loading ?
                    <div className='loading'>
                        <img src={loadingGif} alt='Loading..'></img>
                    </div>
                    :
                    <>
                        <Navbar></Navbar>
                        <main className={style.main}>
                            <div className={style.blogInf}>
                                <h4>{blog.timeStamp}</h4>
                                <h4>Written by {blog.user.userName}</h4>
                            </div>
                            <h1>{blog.title}</h1>
                            <div className={style.blogContent}>
                                <p>{blog.text}</p>
                            </div>
                            <div className={style.commentContainer}>
                                <h3>Comments</h3>
                                {localStorage.getItem('token') ?
                                    <div>
                                        <form className={style.commentForm} method="POST" onSubmit={handleCommentSubmit}>
                                            <textarea placeholder="Write your comment here.." value={comment} onChange={e => setComment(e.target.value)} minLength={1} required></textarea>
                                            <button>Comment</button>
                                        </form>
                                    </div>
                                    :
                                    <div className={style.commentLogin}>
                                        <Link to="/login">Login To Comment</Link>
                                    </div>
                                }
                                {
                                    blog.comments.length === 0 ? <h4>No comments..yet!</h4> :
                                        blog.comments.map((comment, index) => {
                                            return (
                                                <div className={style.blogComments} key={index}>
                                                    <h4>{comment.user.userName}</h4>
                                                    <p>{comment.text}</p>
                                                    {
                                                        comment.user.userName === user &&
                                                        <div className="commentControl">
                                                            <img src={deleteImage} alt="delete" height='20px' width='20px' style={{ cursor: "pointer" }} onClick={(e) => {
                                                                axios.delete(`${import.meta.env.VITE_URL}/blogs/${id}/comments/${comment._id}`, {
                                                                    headers: {
                                                                        'Authorization': `${localStorage.getItem('token')}`
                                                                    }
                                                                })
                                                                    .then(res => {
                                                                        setBlog({ ...blog, comments: blog.comments.filter(c => c._id !== comment._id) })
                                                                    })
                                                                    .catch(err => console.log(err))
                                                            }} />
                                                            <img src={editImage} alt="edit" height='20px' width='20px' style={{ cursor: "pointer" }} onClick={() => {
                                                                setShow(true)
                                                                setEditing(comment._id)
                                                            }} />
                                                        </div>
                                                    }
                                                </div>
                                            )
                                        })
                                }
                            </div>
                        </main>
                    </>
            }
        </>
    )
}