import { useMemo, useState } from "react";
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
  const [selectedValue, setSelectedValue] = useState("");
  const [sortOptions, setSortOptions] = useState([
    { value: "title", name: "По названию" },
    { value: "description", name: "По содержанию" },
  ]);
  const [searchValue, setSearchValue] = useState("");

  const getSortedPosts = () => {
    console.log("getSortedPosts rabotaem");
    if (selectedValue) {
      return [...postsList].sort((a, b) =>
        a[selectedValue].localeCompare(b[selectedValue])
      );
    }
    return postsList;
  };

  const sortedPosts = useMemo(() => getSortedPosts());
  // const searchedPosts = useMemo(() => {
  //   return sortedPosts.filter((post) =>
  //     post.title.toLowerCase().includes(searchValue.toLowerCase())
  //   );
  // }, [searchValue]);

  const addPost = (newPost) => {
    setPostsList([...postsList, newPost]);
  };

  const removePost = (removedPost) => {
    setPostsList(postsList.filter((p) => p.id !== removedPost.id));
  };

  const sortPosts = (sortBy) => {
    setSelectedValue(sortBy);
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
      <MyInput
        placeholder="Поиск..."
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <MySort
        value={selectedValue}
        defaultValue="По умолчанию"
        options={sortOptions}
        onChange={sortPosts}
      />
      {postsList.length !== 0 ? (
        <Posts postsList={sortedPosts} removePost={removePost} />
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
