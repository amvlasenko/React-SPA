import { useMemo } from 'react';

export const useSortedPosts = (postsList, sort) => {
   const sortedPosts = useMemo(() => {
      if (sort) {
         return [...postsList].sort((a, b) => a[sort].localeCompare(b[sort]));
      }
      return postsList;
   }, [sort, postsList]);
   return sortedPosts;
};

export const usePosts = (postsList, sort, query) => {
   const sortedPosts = useSortedPosts(postsList, sort);
   const sortedAndSearchedPosts = useMemo(() => {
      return sortedPosts.filter((post) =>
         post.title.toLowerCase().includes(query.toLowerCase())
      );
   }, [query, sortedPosts]);
   return sortedAndSearchedPosts;
};
