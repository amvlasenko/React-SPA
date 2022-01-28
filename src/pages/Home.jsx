import { useState } from "react";
import PostForm from "../Components/PostForm";
import Posts from "../Components/Posts";

function Home() {
  const [postsList, setPostsList] = useState([
    { id: 1, title: "First post", description: "Post description" },
    { id: 2, title: "Second post", description: "Post description" },
    { id: 3, title: "Thrid post", description: "Post description" },
  ]);

  const addPost = (newPost) => {
    setPostsList([...postsList, newPost]);
  };

  const removePost = (removedPost) => {
    setPostsList(postsList.filter((p) => p.id !== removedPost.id));
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "20px",
        textAlign: "left",
      }}
    >
      <span>Its Home</span>
      <PostForm create={addPost} />
      {postsList.length !== 0 ? (
        <Posts postsList={postsList} removePost={removePost} />
      ) : (
        <>
          <span>Постов нет</span>
          <div class="progress">
            <div class="indeterminate"></div>
          </div>
        </>
      )}
    </div>
  );
}

export default Home;
