import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Header from './pages/Header';
import Footer from './pages/Footer';
import {privatRoutes, publicRoutes} from './router/router';
import {useState} from 'react';
import {AuthContext} from './context/context';
import 'materialize-css/dist/css/materialize.min.css';

function App() {
   const [isAuth, setIsAuth] = useState(false);
   return (<AuthContext.Provider value={{
         isAuth,
         setIsAuth
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
                        />
                     )}
                     <Redirect to="/home"/>
                  </Switch>
                  : <Switch>
                     {publicRoutes.map(route =>
                        <Route
                           component={route.component}
                           path={route.path}
                           exact={route.exact}
                        />
                     )}
                     <Redirect to="/login"/>
                  </Switch>
               }
            </main>
            <Footer/>
         </Router>
      </AuthContext.Provider>
   );
}

export default App;
