import { useMemo, useState } from 'react';
import PostForm from '../Components/PostForm';
import Posts from '../Components/Posts/Posts';
import PostsFilter from '../Components/PostsFilter';
import MyButton from '../Components/UI/MyButton/MyButton';
import MyModal from '../Components/UI/MyModal/MyModal';
import { usePosts } from '../hooks/usePosts';

function Home() {
   const [postsList, setPostsList] = useState([
      { id: 1, title: 'First post', description: '22 description' },
      { id: 2, title: 'Second post', description: '11 description' },
      { id: 3, title: 'Thrid post', description: '55 description' },
   ]);
   const [filter, setFilter] = useState({ sort: '', query: '' });
   const [modal, setModal] = useState(false);

   const sortedAndSearchedPosts = usePosts(
      postsList,
      filter.sort,
      filter.query
   );

   const addPost = (newPost) => {
      setPostsList([...postsList, newPost]);
      setModal(false);
   };

   const removePost = (removedPost) => {
      setPostsList(postsList.filter((p) => p.id !== removedPost.id));
   };

   return (
      <div
         style={{
            display: 'flex',
            flexDirection: 'column',
            padding: '20px',
            textAlign: 'left',
         }}
      >
         <span>Its Home</span>
         <MyButton style={{ width: '150px' }} onClick={() => setModal(true)}>
            Создать пост
         </MyButton>
         <MyModal visible={modal} setVisible={setModal}>
            <PostForm create={addPost} />
         </MyModal>
         <PostsFilter filter={filter} setFilter={setFilter} />
         <Posts postsList={sortedAndSearchedPosts} removePost={removePost} />
      </div>
   );
}

export default Home;
