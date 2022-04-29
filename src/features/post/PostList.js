import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import PostItem from "./PostItem"
import { fetchPosts } from "./postSlice";
import './Post.scss'

export default function PostList() {
    const dispatch = useDispatch();
    const { postList, isFetching } = useSelector(state => state.posts)

    useEffect(() => {
        dispatch(fetchPosts())
    }, [dispatch])

    return (
        <div className="posts">
            {
                isFetching ?
                    <h2>Loading...</h2> :
                    postList.map(item => (
                        <PostItem
                            key={item.id}
                            data={item}
                        />
                    ))
            }
        </div>
    )
}