import {CSSTransition, TransitionGroup} from 'react-transition-group';
import MyButton from '../UI/MyButton/MyButton';
import './posts.css';
import {useHistory} from 'react-router-dom';

function Posts(props) {
   const router = useHistory();

   if (!props.postsList.length) {
      return (
         <>
            <span>Постов нет</span>
            <div className="progress">
               <div className="indeterminate"></div>
            </div>
         </>
      );
   }
   return (
      <div>
         <h2>Posts</h2>
         <ul>
            <TransitionGroup>
               {props.postsList.map((post) => (
                  <CSSTransition key={post.id} timeout={500} classNames="post">
                     <li className="row">
                        <div className="col s12 m8">
                           <div className="card blue-grey darken-1">
                              <div className="card-content white-text">
                                 <span className="card-title">
                                    {post.id}. {post.title}
                                 </span>
                                 <p>{post.body}</p>
                              </div>
                              <div className="card-action">
                                 <MyButton
                                    style={{margin: '10px'}}
                                    onClick={() => router.push(`/react-spa/post/${post.id}`)}
                                 >
                                    Открыть
                                 </MyButton>
                                 <MyButton
                                    onClick={() => props.removePost(post)}
                                 >
                                    Удалить
                                 </MyButton>
                              </div>
                           </div>
                        </div>
                     </li>
                  </CSSTransition>
               ))}
            </TransitionGroup>
         </ul>
      </div>
   );
}

export default Posts;
