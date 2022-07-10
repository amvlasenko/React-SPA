import {Link, useHistory} from 'react-router-dom';
import {useContext, useEffect} from 'react';
import {AuthContext} from '../context/context';
import M from 'materialize-css';
import MyButton from '../Components/UI/MyButton/MyButton';
import MyLoader from '../Components/UI/MyLoader/MyLoader';

function Header() {
   const history = useHistory();
   const {isAuth, setIsAuth, isLoading} = useContext(AuthContext);
   let elems;
   let instances;

   useEffect(() => {
      elems = document.querySelectorAll('.sidenav');
      instances = M.Sidenav.init(elems);
   }, []);

   useEffect(() => {
      elems = document.querySelectorAll('.sidenav');
      instances = M.Sidenav.init(elems);
   }, [isAuth]);

   const logout = (event) => {
      event.preventDefault();
      setIsAuth(false);
      localStorage.setItem('auth', 'false');
      history.push('/react-spa/login');
      elems = document.querySelectorAll('.sidenav');
      instances = M.Sidenav.init(elems);
   };

   if (isLoading) {
      return <MyLoader></MyLoader>;
   }

   return (isAuth
      ? <>
         <nav>
            <div className="nav-wrapper  blue-grey darken-3">
               <div className="right brand-logo">
                  <div className="hide-on-med-and-down" style={{marginRight: '10px', display: 'inline-block'}}>
                     <MyButton onClick={(event) => logout(event)}>Logout</MyButton></div>
                  <Link to="/react-spa/home">react-spa</Link>
               </div>
               <a href="#" data-target="mobile-demo" className="sidenav-trigger">
                  <i className="material-icons">menu</i>
               </a>
               <ul className="left hide-on-med-and-down">
                  <li>
                     <Link to="/react-spa/home">Home</Link>
                  </li>
                  <li>
                     <Link to="/react-spa/infinite">Infinite</Link>
                  </li>
                  <li>
                     <Link to="/react-spa/contacts">Contact</Link>
                  </li>
               </ul>
            </div>
         </nav>
         <ul id="mobile-demo" className="sidenav">
            <li>
               <Link to="/react-spa/home">Home</Link>
            </li>
            <li>
               <Link to="/react-spa/infinite">Infinite</Link>
            </li>
            <li>
               <Link to="/react-spa/contacts">Contact</Link>
            </li>
            <li>
               <a href="#" style={{textDecoration: 'underline'}} onClick={(event) => logout(event)}>Logout</a>
            </li>
         </ul>
      </>
      : <nav>
         <div className="nav-wrapper  blue-grey darken-3">
            <a href="#" className="brand-logo right">
               react-spa
            </a>
         </div>
      </nav>);
}

export default Header;
