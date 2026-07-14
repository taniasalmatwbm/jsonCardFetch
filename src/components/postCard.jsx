 import "./PostCard.css";

const PostCard = ({ post }) => {

  return (

    <div className="card">

      <img
        src={`https://picsum.photos/300/200?random=${post.id}`}
        alt=""
      />

      <div className="content">

        <span>User {post.userId}</span>

        <h2>{post.title}</h2>

        <p>{post.body}</p>

        <button>Read More</button>

      </div>

    </div>

  );

};

export default PostCard;