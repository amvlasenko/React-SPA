import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import Header from './pages/Header';
import Footer from './pages/Footer';
import {privatRoutes, publicRoutes} from './router/router';
import {useEffect, useState} from 'react';
import {AuthContext} from './context/context';
import 'materialize-css/dist/css/materialize.min.css';
import MyLoader from './Components/UI/MyLoader/MyLoader';

function App() {
   const [isAuth, setIsAuth] = useState(false);
   const [isLoading, setIsLoading] = useState(true);
   useEffect(() => {
      let auth = localStorage.getItem('auth');
      if (auth === 'true') {
         setIsAuth(true);
      }
      setIsLoading(false);
   }, []);
   if (isLoading) {
      return <MyLoader></MyLoader>;
   }
   return (<AuthContext.Provider value={{
         isAuth,
         setIsAuth,
         isLoading,
         setIsLoading
      }}>
         <Router>
            <Header/>
            <main>
               {isAuth
                  ? <Switch>
                     {privatRoutes.map(route =>
                        <Route
                           component={route.component}
                           path={route.path}
                           exact={route.exact}
                           key={route.path}
                        />
                     )}
                     <Redirect to="/react-spa/home"/>
                  </Switch>
                  : <Switch>
                     {publicRoutes.map(route =>
                        <Route
                           component={route.component}
                           path={route.path}
                           exact={route.exact}
                           key={route.path}
                        />
                     )}
                     <Redirect to="/react-spa/login"/>
                  </Switch>
               }
            </main>
            <Footer/>
         </Router>
      </AuthContext.Provider>
   );
}

export default App;
