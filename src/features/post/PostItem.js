import { likePost, unLikePost } from "./postSlice"
import { useDispatch, useSelector } from "react-redux"

export default function PostItem({ data: { id, title, body, likeCounts } }) {
    const dispatch = useDispatch()
    const likePostList = useSelector(state => state.posts.likedPosts)

    const handleLike = () => {
        if (likePostList.includes(id)) {
            dispatch(unLikePost(id))
        } else {
            dispatch(likePost(id))
        }
    }

    return (
        <div className="posts__item">
            <h2>{title}</h2>
            <p>{body}</p>
            <button onClick={handleLike}>
                {likePostList.includes(id) ? "Liked!" : "Like"}
            </button>
        </div>
    )
}