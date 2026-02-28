import React from 'react';
import './L.css'
const L=()=>{
        return(
        <>
        <div class="login-card">
        <div class="logo-icon">📨</div>
        
        <h2>Login Gmail</h2>
        <p>Please enter your details <br/> To Sign In</p>

        <form action="#">
<div className="input-group">
             <span className="icon">👤</span>   
                <input type="Name" placeholder="Name" required/>
            </div>

            <div className="input-group">
                <span className="icon">✉︎</span>
                <input type="email" placeholder="Email" required/>
            </div>
             


            <div class="input-group">
                <span className="icon">🔐</span>
                <input type="password" placeholder="Password" required/>
            </div>

            <a href="#" className="forgot-password">Forgot password?</a>

            <button type="submit" class="submit-btn">Login</button>
        </form>
        <div className="divider">
            <span>Or sign in with</span>
        </div>

        <div className="social-login">
            <button class="social-btn">˖⌕ ۫Google﹫</button>

        </div>
        
    </div>
        </>
    )
}
export default L;