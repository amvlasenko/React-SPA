import About from '../pages/About';
import Contact from '../pages/Contact';
import Home from '../pages/Home';
import Post from '../Components/Post/Post';
import Login from '../Components/Login/Login';

export const privatRoutes = [
   {path: '/about', component: About, exact: true},
   {path: '/contacts', component: Contact, exact: true},
   {path: '/home', component: Home, exact: true},
   {path: '/post/:id', component: Post, exact: true}
];
export const publicRoutes = [
   {path: '/login', component: Login, exact: true}
];
