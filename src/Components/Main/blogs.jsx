import { useDispatch, useSelector } from "react-redux";
import commentImage from "/comment.svg";
import "./blogs.sass";
import style from "./blogs.module.sass";

export default function Main() {
    const dispatch = useDispatch();
    const blogs = useSelector((state) => state.blogs);
    return (
        <>
            <ul className={style.ul}>
                {
                    blogs.blogs.map((blog, index) => {
                        return (
                            <div className="blogContainer" key={"container" + index}>
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
                        )
                    })
                }
            </ul>
        </>
    );
}