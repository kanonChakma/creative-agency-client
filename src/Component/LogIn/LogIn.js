import React, {
    useContext,
    useState
} from 'react';
import './LogIn.css'
import logo from '../../images/logos/logo.png'
import google from '../../images/google.png'
import * as firebase from "firebase/app";
import "firebase/auth";
import {
    userContext
} from '../../App';
import firebaseConfig from './firebaseConfig';
import {
    useHistory,
    useLocation
} from 'react-router-dom';

firebase.initializeApp(firebaseConfig);
const LogIn = () => {
    const [signInUser, setSignInUser] = useContext(userContext);
  
    const history = useHistory();
    const location = useLocation()
    let {from} = location.state || { from: {  pathname: "/" }
    };

    const handleGoogleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then(result=>{
                const user = result.user;
                const{
                    displayName,
                    email,
                    photoURL
                } = user;
                fetch('http://localhost:5000/admin?email=' + email)
                    .then(res => res.json())
                    .then(data => {
                        if (data[0]){
                            const userInfo = {
                                name: displayName,
                                email: email,
                                img: photoURL,
                                isAdmin: true,
                            }
                            setSignInUser(userInfo);
                            setHandleToken();
                            history.replace('/dashboard');
                        }
                        else{
                            const userInfo={
                                name: displayName,
                                email: email,
                                img: photoURL,
                                isAdmin: false,
                            }
                            setSignInUser(userInfo);
                            history.replace('/user');
                        }
                    })   
            })
            .catch(error => {
                console.log(error.code, error.message)
            });
    }
    const setHandleToken=()=>{
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
        .then(function(idToken) {
          sessionStorage.setItem('token',idToken);
        }).catch(function(error) {
          
        });
      }
    
    return ( 
        < div className = "login-page text-center container" >
        < img className = "logo" src = {logo }alt = ""/>
        <div className = "sign-part">
                < h2 > Login With </h2>
                < div className = "logo-box"onClick = {handleGoogleSignIn} >
                <img src = {google} alt = ""/>
                <p> Continue with Google </p> 
                </div>
         </div>
      </div>
    );
};
export default LogIn;