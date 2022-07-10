import {useEffect, useRef, useState} from 'react';
import PostsService from '../API/PostsService';
import PostForm from '../Components/PostForm';
import Posts from '../Components/Posts/Posts';
import PostsFilter from '../Components/PostsFilter';
import MyButton from '../Components/UI/MyButton/MyButton';
import MyLoader from '../Components/UI/MyLoader/MyLoader';
import MyModal from '../Components/UI/MyModal/MyModal';
import useFetching from '../hooks/useFetching';
import {usePosts} from '../hooks/usePosts';
import {getPagesCount} from '../utils/pages';

function Infinite() {
   const [postsList, setPostsList] = useState([]);
   const [filter, setFilter] = useState({sort: '', query: ''});
   const [modal, setModal] = useState(false);
   const [totalPages, setTotalPages] = useState(0);
   const [limit, setLimit] = useState(10);
   const [page, setPage] = useState(1);
   const lastElem = useRef();
   const observer = useRef();

   const [fetchPosts, isLoading, postsError] = useFetching(async () => {
      const response = await PostsService.getAll(limit, page);
      setPostsList([...postsList, ...response.data]);
      const totalCount = response.headers['x-total-count'];
      setTotalPages(getPagesCount(totalCount, limit));
   });

   useEffect(() => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();
      let callback = function (entries, observer) {
         entries.forEach(function (entry) {
            if (entry.isIntersecting && page < totalPages) {
               setPage(page + 1);
            }
         });
      };
      observer.current = new IntersectionObserver(callback);
      observer.current.observe(lastElem.current);
   }, [isLoading]);

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
         <span>Its Infinite</span>
         <MyButton style={{width: '150px'}} onClick={() => setModal(true)}>
            Создать пост
         </MyButton>
         <MyModal visible={modal} setVisible={setModal}>
            <PostForm create={addPost}/>
         </MyModal>
         <PostsFilter filter={filter} setFilter={setFilter}/>
         {postsError && <h1>Произошла обшибка {postsError}</h1>}
         <Posts postsList={sortedAndSearchedPosts} removePost={removePost}/>
         <div ref={lastElem} style={{height: '10px'}}/>
         {isLoading &&
            <MyLoader/>
         }
      </div>
   );
}

export default Infinite;
