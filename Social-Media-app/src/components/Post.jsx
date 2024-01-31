import { MdDelete } from "react-icons/md";
import dummy from "../assets/download.png";

const Post = ({ post, deletePost }) => {
  return (
    <div className="card postCont" style={{ width: "25rem" }}>
      {/* <img src={dummy} className="card-img-top" alt="..." /> */}

      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.body}</p>
        <div className="alert alert-success" role="alert">
          This post has been reacted by {post.reactions} people.
        </div>
        {post.tags &&
          post.tags.map((item) => (
            <span key={item} className="badge text-bg-primary hashtag">
              {item}
            </span>
          ))}
      </div>
      <span
        className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
        onClick={() => {
          deletePost(post.id);
        }}
      >
        <MdDelete />
      </span>
    </div>
  );
};
export default Post;
