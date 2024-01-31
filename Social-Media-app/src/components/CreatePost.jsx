import { useContext, useRef } from "react";
import { PostListContext } from "../store/post-list-store";
import { useNavigate } from "react-router-dom";
const CreatePost = () => {

  
  const userIdElement = useRef();
  const titleElement = useRef();
  const contentElement = useRef();
  const tagsElement = useRef();
  const reactionElement = useRef();
  const { addPost,successMessage } = useContext(PostListContext);
  const handleonSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const title = titleElement.current.value;
    const body = contentElement.current.value;
    const tags = tagsElement.current.value.split(" ");
    const reaction = reactionElement.current.value;
    addPost(userId, title, body, tags, reaction);
    tagsElement.current.value = "";
    userIdElement.current.value = "";
    titleElement.current.value = "";
    contentElement.current.value = "";
    reactionElement.current.value = "";
  };

  return (
    <>
     {successMessage && <div className="alert alert-success successMessage">{successMessage}</div>}
    <form className="form-post" onSubmit={handleonSubmit}>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          User Id
        </label>
        <input
          type="text"
          className="form-control"
          id="userId"
          ref={userIdElement}
          placeholder="Enter User Id"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          ref={titleElement}
          placeholder="Enter Title"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="content" className="form-label">
          Content
        </label>
        <textarea
          type="text"
          rows="4"
          className="form-control"
          id="content"
          placeholder="Enter Content"
          ref={contentElement}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="reaction" className="form-label">
          Recations
        </label>
        <input
          type="text"
          className="form-control"
          id="reaction"
          placeholder="Enter reactions"
          ref={reactionElement}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Tags
        </label>
        <input
          type="text"
          className="form-control"
          id="tags"
          ref={tagsElement}
          placeholder="e.g., tag1 tag2 tag3"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
    </>
  );
};

export default CreatePost;
