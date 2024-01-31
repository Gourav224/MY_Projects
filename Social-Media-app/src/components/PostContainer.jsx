import React, { useContext } from "react";
import { PostListContext } from "../store/post-list-store";
import Post from "./Post";
import WelcomeMessage from "./WelcomeMessage";
import Loader from "./Loader";

const PostContainer = () => {
  const { postList, deletePost, fetched } = useContext(PostListContext);

  return (
    <>
      {!fetched && <Loader />}
      {fetched && postList.length === 0 && <WelcomeMessage />}
      {fetched && (
        <div className="post-container">
          {postList.map((item) => (
            <Post key={item.id} post={item} deletePost={deletePost} />
          ))}
        </div>
      )}
    </>
  );
};

export default PostContainer;
