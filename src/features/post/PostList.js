import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import PostItem from "./PostItem"
import { fetchPosts } from "./postSlice";
import './Post.scss'

export default function PostList() {
    const dispatch = useDispatch();
    const list = useSelector(state => state.posts.postList)

    useEffect(() => {
        dispatch(fetchPosts())
    }, [dispatch])

    return (
        <div className="posts">
            {
                list.map(item => (
                    <PostItem
                        key={item.id}
                        data={item}
                    />
                ))
            }
        </div>
    )
}