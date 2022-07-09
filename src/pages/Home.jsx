import {useState, useEffect} from 'react';
import PostsService from '../API/PostsService';
import PostForm from '../Components/PostForm';
import Posts from '../Components/Posts/Posts';
import PostsFilter from '../Components/PostsFilter';
import MyButton from '../Components/UI/MyButton/MyButton';
import MyLoader from '../Components/UI/MyLoader/MyLoader';
import MyModal from '../Components/UI/MyModal/MyModal';
import MyPagination from '../Components/UI/MyPagination/MyPagination';
import useFetching from '../hooks/useFetching';
import {usePosts} from '../hooks/usePosts';
import {getPagesCount} from '../utils/pages';

function Home() {
   const [postsList, setPostsList] = useState([]);
   const [filter, setFilter] = useState({sort: '', query: ''});
   const [modal, setModal] = useState(false);
   const [totalPages, setTotalPages] = useState(0);
   const [limit, setLimit] = useState(10);
   const [page, setPage] = useState(1);
   const [fetchPosts, isLoading, postsError] = useFetching(async () => {
      const response = await PostsService.getAll(limit, page);
      setPostsList(response.data);
      const totalCount = response.headers['x-total-count'];
      setTotalPages(getPagesCount(totalCount, limit));
   });

   useEffect(() => fetchPosts(), []);

   const sortedAndSearchedPosts = usePosts(
      postsList,
      filter.sort,
      filter.query
   );

   useEffect(() => fetchPosts(), [page]);

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
         <MyButton style={{width: '150px'}} onClick={() => setModal(true)}>
            Создать пост
         </MyButton>
         <MyModal visible={modal} setVisible={setModal}>
            <PostForm create={addPost}/>
         </MyModal>
         <MyPagination totalPages={totalPages} page={page} setPage={setPage}/>
         <PostsFilter filter={filter} setFilter={setFilter}/>
         {postsError && <h1>Произошла обшибка {postsError}</h1>}
         {isLoading ? (
            <MyLoader/>
         ) : (
            <Posts postsList={sortedAndSearchedPosts} removePost={removePost}/>
         )}
      </div>
   );
}

export default Home;
