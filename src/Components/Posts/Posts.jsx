import { TransitionGroup, CSSTransition } from "react-transition-group";
import MyButton from "../UI/MyButton/MyButton";
import "./posts.css";

function Posts(props) {
   if (!props.postsList.length) {
      return (
         <>
            <span>Постов нет</span>
            <div class='progress'>
               <div class='indeterminate'></div>
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
                  <CSSTransition key={post.id} timeout={500} classNames='post'>
                     <li className='card horizontal row'>
                        <span className='card-title col s2'>{post.title}</span>
                        <div className='card-stacked'>
                           <p className='card-content'>{post.description}</p>
                           <div className='card-action'>
                              <MyButton
                                 style={{ bacgroundColor: "white" }}
                                 onClick={() => props.removePost(post)}
                              >
                                 Удалить
                              </MyButton>
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
