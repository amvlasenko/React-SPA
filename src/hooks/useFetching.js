import { useState } from 'react';

function useFetching(callback) {
   const [isLoading, setIsLoading] = useState(false);
   const [error, setError] = useState('');
   const fetching = async () => {
      try {
         setIsLoading(true);
         await callback();
      } catch (error) {
         setError(error.message);
      } finally {
         setIsLoading(false);
      }
   };
   return [fetching, isLoading, error];
}

export default useFetching;
