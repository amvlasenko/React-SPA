import {usePagination} from '../../../hooks/usePagination';
import classes from './MyPagination.module.css';

function MyPagination({totalPages, page, setPage}) {
   let pagesArray = usePagination(totalPages);
   return (
      <ul className="pagination">
         {pagesArray.map((p) => (
            <li
               key={p}
               className={page === p ? 'active' : 'waves-effect'}
               onClick={() => setPage(p)}
            >
               <a href="#!">{p}</a>
            </li>
         ))}
      </ul>
   );
}

export default MyPagination;
