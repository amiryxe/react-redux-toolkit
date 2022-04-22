export default function PostItem({ title, body, likeCounts }) {
    return (
        <div className="post__item">
            <h2>{title}</h2>
            <p>{body}</p>
            {/* <button>{likeCounts} Like</button> */}
        </div>
    )
}