import { useState } from "react";
import PostForm from "../Components/PostForm";
import Posts from "../Components/Posts";
import MyInput from "../Components/UI/MyInput/MyInput";
import MySort from "../Components/UI/MySort/MySort";

function Home() {
  const [postsList, setPostsList] = useState([
    { id: 1, title: "First post", description: "22 description" },
    { id: 2, title: "Second post", description: "11 description" },
    { id: 3, title: "Thrid post", description: "55 description" },
  ]);
  const [selectedValue, setSelectedValue] = useState("title");
  const [sortOptions, setSortOptions] = useState([
    { value: "title", name: "По названию" },
    { value: "description", name: "По содержанию" },
  ]);

  const addPost = (newPost) => {
    setPostsList([...postsList, newPost]);
  };

  const removePost = (removedPost) => {
    setPostsList(postsList.filter((p) => p.id !== removedPost.id));
  };

  const sortPosts = (sortBy) => {
    setSelectedValue(sortBy);

    setPostsList(
      [...postsList].sort((a, b) => a[sortBy].localeCompare(b[sortBy]))
    );
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
      <MyInput placeholder="Поиск..." />
      <MySort
        value={selectedValue}
        defaultValue="По умолчанию"
        options={sortOptions}
        onChange={sortPosts}
      />
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
