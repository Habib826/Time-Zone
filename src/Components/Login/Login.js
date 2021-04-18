import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import Navbar from '../Home/Header/Navbar/Navbar';


const Login = () => {
    if(!firebase.apps.length){
        firebase.initializeApp(firebaseConfig);   
      }
      const [loggedInUser, setLoggedInUser]= useContext(UserContext)
      const history = useHistory();
      const location = useLocation();
     const { from } = location.state || { from: { pathname: "/" } };

     
    const  provider = new firebase.auth.GoogleAuthProvider();
    const handleGoogleLogin=() => {
        firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    const{displayName, email} = result.user;
       const signedInUser= {name: displayName, email} 
      const user = result.user;
      setLoggedInUser(signedInUser)
      history.replace(from)
  })}

    return (
        <div>
        <Navbar/>
        <div className="mt-5 d-flex align-items-center justify-content-center">
        <div>
            <button className="btn btn-primary align-middle p-3 bd-highlight col-example mt-5" onClick={handleGoogleLogin}> Sign in with Google</button>

        </div>
        </div>
        </div>
    );
};

export default Login;