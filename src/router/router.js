import Contact from '../pages/Contact';
import Home from '../pages/Home';
import Post from '../Components/Post/Post';
import Login from '../Components/Login/Login';
import Infinite from '../pages/Infinite';

export const privatRoutes = [
   {path: '/react-spa/infinite', component: Infinite, exact: true},
   {path: '/react-spa/contacts', component: Contact, exact: true},
   {path: '/react-spa/home', component: Home, exact: true},
   {path: '/react-spa/post/:id', component: Post, exact: true}
];
export const publicRoutes = [
   {path: '/react-spa/login', component: Login, exact: true}
];
