import React, {useEffect, useState} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import PostsService from '../../API/PostsService';
import MyButton from '../UI/MyButton/MyButton';
import useFetching from '../../hooks/useFetching';
import MyLoader from '../UI/MyLoader/MyLoader';

const Post = () => {
   const params = useParams();
   const router = useHistory();
   const [post, setPost] = useState({});
   const [fetchPostById, isLoading] = useFetching(async () => {
      let response = await PostsService.getPostById(params.id);
      setPost(response.data);
   });

   useEffect(() => {
      fetchPostById();
   }, []);

   return (
      <div className={'container'}>
         {isLoading ? (
            <MyLoader/>
         ) : (<div>
            <h4>
               {post.title}
            </h4>
            <p>
               {post.body}
            </p>
            <MyButton onClick={() => router.goBack()}>Назад</MyButton>
         </div>)}
      </div>
   );
};

export default Post;
