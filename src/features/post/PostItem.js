import { likePost, unLikePost } from "./postSlice"
import { useDispatch, useSelector } from "react-redux"

export default function PostItem({ data: { id, title, body } }) {
    const dispatch = useDispatch()
    const likePostList = useSelector(state => state.posts.likedPosts)

    return (
        <div className="posts__item">
            <h2>{title}</h2>
            <p>{body}</p>
            <button className="posts__like" onClick={() => dispatch(likePost(id))}>
                {likePostList.includes(id) ? "Liked!" : "Like"}
            </button>
        </div>
    )
}