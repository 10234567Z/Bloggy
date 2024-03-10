import { useDispatch, useSelector } from "react-redux";
import commentImage from "/comment.svg";
import "./blogs.sass";
import style from "./blogs.module.sass";
import { Link } from "react-router-dom";

export default function Main() {
    const dispatch = useDispatch();
    const blogs = useSelector((state) => state.blogs);
    return (
        <>
            <ul className={style.ul}>
                {
                    blogs.length === 0 ? <h1>No blogs...yet!</h1> :
                    blogs.blogs.map((blog, index) => {
                        return (
                            blog.public &&
                            <Link to={`blog/${blog._id}`} style={{ textDecoration: "none"}} key={"container" + index}>
                                <div className="blogContainer">
                                    <h3>{blog.title}</h3>
                                    <div className="infBlog">
                                        <div className="comments">
                                            <img src={commentImage} alt="comments" height="25px" width="25px"/>
                                            <p>{blog.comments.length}</p>
                                        </div>
                                        <h4>{blog.timeStamp}</h4>
                                        <h4>Written by {blog.user.userName}</h4>
                                    </div>
                                </div>
                            </Link>
                        )
                    })
                }
            </ul>
        </>
    );
}
