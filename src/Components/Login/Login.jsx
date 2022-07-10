import React, {useContext} from 'react';
import MyButton from '../UI/MyButton/MyButton';
import {AuthContext} from '../../context/context';

const Login = () => {
   const {isAuth, setIsAuth} = useContext(AuthContext);
   const login = (event) => {
      event.preventDefault();
      setIsAuth(true);
      localStorage.setItem('auth', 'true');
   };
   return (
      <div className="row" style={{paddingTop: '5em'}}>
         <form className="col s12">
            <div className="container">
               <span className="pulse">* просто нажмите логин и всё заработает ;)</span>
               <div className="input-field col s6 offset-s3">
                  <input id="username" type="text" className="validate"/>
                  <label htmlFor="username">Username</label>
               </div>
               <div className="input-field col s6 offset-s3">
                  <input id="password" type="password" className="validate"/>
                  <label htmlFor="password">Password</label>
               </div>
               <div className="input-field col s6 offset-s3">
                  <MyButton onClick={(event) => login(event)}>Login</MyButton>
               </div>
            </div>
         </form>
      </div>
   );
};

export default Login;
