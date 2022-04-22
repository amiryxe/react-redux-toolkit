import { useEffect } from "react";
import PostItem from "./PostItem"
import { useDispatch, useSelector } from "react-redux"
import { fetchPosts } from "./postSlice";

export default function PostList() {
    const dispatch = useDispatch();
    const list = useSelector(state => state.postList)

    useEffect(() => {
        dispatch(fetchPosts())
    }, [])

    return (
        <div className="posts">
            {
                list && list.map(item => (
                    <PostItem
                        key={item.id}
                        title={item.title}
                        body={item.body}
                    />
                ))
            }
        </div>
    )
}