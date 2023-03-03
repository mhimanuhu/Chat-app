import React from 'react';
import { Button } from '@material-ui/core';
import "./Login.css";
import { auth , provider} from "./firebase";
import { actionTypes } from './reducer';
import { useStateValue} from "./StateProvider"
function Login() {
    const [{}, dispatch] = useStateValue();
    const signIn = () =>{
       auth
       
       .signInWithPopup(provider)
       .then((result) =>{
           dispatch ({
               type : actionTypes.SET_USER,
               user: result.user,
               
           })
       })
       .catch((error) => alert(error.message));
    };

    return (
        <>
        <div className="login">
            <div className="Login__container" >
                <img src="data:image/jpeg;base64,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" alt="Login" />
            
            <div className="Login__text" >
                <h1> Sign in to Aapsi Baate</h1>
                       
                         <p>Enjoy the New User Interface</p>
            </div>

            <Button onClick={signIn}>
            <img src="https://img.icons8.com/color/40/000000/google-logo.png" alt="signin" className="SignIMG" /> Sign In With Google
            </Button>
          
            </div>
            <div className="Build__credit" >
            <h5   > A Build of Manu Sharma © Aapsi Baate 2021 </h5>
            
            </div>
        </div>
        
    </>
    );
}

export default Login
