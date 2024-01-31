import { createContext, useReducer, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export const PostListContext = createContext({
  postList: [],
  fetched: false,
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = [...currPostList];
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (item) => item.id !== action.payload.postId
    );
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  } else if (action.type === "ADD_INITIAL_POST") {
    newPostList = action.payload.posts;
  }

  return newPostList;
};

const PostListProvider = ({ children }) => {
  const navigate=useNavigate();
  const [postList, dispatchPostList] = useReducer(postListReducer, []);
  const addInitialPost = (posts) => {
    dispatchPostList({
      type: "ADD_INITIAL_POST",
      payload: {
        posts,
      },
    });
  };
  const [successMessage, setSuccessMessage] = useState("");
  const addPost = async (userId, title, body, tags, reactions) => {
    
    try {
      const response = await fetch("https://dummyjson.com/posts/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId,
          title,
          body,
          tags,
          reactions,
        }),
      });

      const data = await response.json();
      if (response.status === 200) {
        dispatchPostList({
          type: "ADD_POST",
          payload: data,
        });
        navigate("/");

       
      }
    } catch (error) {}
  };
  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };
  const [fetched, setFetched] = useState(false);
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const handleonFetch = async () => {
      const response = await fetch("https://dummyjson.com/posts", signal);
      const data = await response.json();
      addInitialPost(data.posts);
      setFetched(true);
    };
    handleonFetch();
    return () => {
      controller.abort();
    };
  }, []);
  return (
    <PostListContext.Provider
      value={{ postList, addPost, deletePost, fetched }}
    >
      {children}
    </PostListContext.Provider>
  );
};
export default PostListProvider;
