import React from 'react';
import './Login.css';
const Login = () =>{
    return(
        <>
       <center>
        <div className="login-card">
            <h2>Sign in with email</h2>
            <p>Make a database with join and document with this login</p>
           
                <div className="form-control">
                     <form>
             <div><input type="email" placeholder="Enter you email"/></div>
            <div><input type="password" placeholder="Enter your password"/></div>
            <a href="#" className='forget'>Forgot password?</a>
            <div><button type ="submit">Login</button></div>
            </form>
            </div>
        </div>
        </center>
        </>
    )
}
export default Login;