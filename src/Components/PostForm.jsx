import MyInput from './UI/MyInput/MyInput';
import MyButton from './UI/MyButton/MyButton';
import {useState} from 'react';

function PostForm({create}) {
   const [post, setPost] = useState({
      title: '',
      body: '',
      id: '',
   });

   const addNewPost = (e) => {
      e.preventDefault();
      const newPost = {...post, id: Date.now()};
      create(newPost);
      setPost({title: '', body: '', id: ''});
   };

   return (
      <form>
         <MyInput
            type="text"
            placeholder="Название поста"
            value={post.title}
            onChange={(e) => setPost({...post, title: e.target.value})}
         />
         <MyInput
            type="text"
            placeholder="Описание поста"
            value={post.body}
            onChange={(e) => setPost({...post, body: e.target.value})}
         />
         <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>
   );
}

export default PostForm;
