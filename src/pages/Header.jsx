import {Link} from 'react-router-dom';
import {useContext, useEffect, useState} from 'react';
import {AuthContext} from '../context/context';
import M from 'materialize-css';

function Header() {
   const {isAuth, setIsAuth} = useContext(AuthContext);
   const [location, setLocation] = useState({});
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
   return (isAuth
      ? <>
         <nav>
            <div className="nav-wrapper  blue-grey darken-3">
               <a href="/home" className="brand-logo right">
                  react-spa
               </a>
               <a href="#" data-target="mobile-demo" className="sidenav-trigger">
                  <i className="material-icons">menu</i>
               </a>
               <ul className="left hide-on-med-and-down">
                  <li>
                     <Link to="/home">Home</Link>
                  </li>
                  <li>
                     <Link to="/about">About</Link>
                  </li>
                  <li>
                     <Link to="/contacts">Contact</Link>
                  </li>
               </ul>
            </div>
         </nav>
         <ul id="mobile-demo" className="sidenav">
            <li>
               <Link to="/home">Home</Link>
            </li>
            <li>
               <Link to="/about">About</Link>
            </li>
            <li>
               <Link to="/contacts">Contact</Link>
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
