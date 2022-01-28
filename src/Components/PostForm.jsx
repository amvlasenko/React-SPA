import MyInput from "./UI/MyInput/MyInput";
import MyButton from "./UI/MyButton/MyButton";
import { useState } from "react";

function PostForm({ create }) {
  const [post, setPost] = useState({ id: 0, title: "", description: "" });

  const addNewPost = (e) => {
    e.preventDefault();
    create(post);
    setPost({ id: 0, title: "", description: "" });
  };

  return (
    <form>
      <MyInput
        type="text"
        placeholder="Название поста"
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
      />
      <MyInput
        type="text"
        placeholder="Описание поста"
        value={post.description}
        onChange={(e) => setPost({ ...post, description: e.target.value })}
      />
      <MyButton onClick={addNewPost}>Создать пост</MyButton>
    </form>
  );
}

export default PostForm;
