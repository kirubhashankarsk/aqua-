import React from 'react';
import './Logindem.css';
const Login = () =>{
    return(
        <>
        <div class="login-card">
        <div class="logo-icon">➔</div>
        
        <h2>Sign in with email</h2>
        <p>Make a new doc to bring your words, data,<br/>and teams together. For free</p>

        <form action="#">
            <div className="input-group">
                <span className="icon">✉️</span>
                <input type="email" placeholder="Email" required/>
            </div>

            <div class="input-group">
                <span className="icon">🔒</span>
                <input type="password" placeholder="Password" required/>
                <span className="icon-right">👁️</span>
            </div>

            <a href="#" className="forgot-password">Forgot password?</a>

            <button type="submit" class="submit-btn">Get Started</button>
        </form>

        <div className="divider">
            <span>Or sign in with</span>
        </div>

        <div className="social-login">
            <button class="social-btn">G</button>
            <button class="social-btn">f</button>
            <button class="social-btn"></button>
        </div>
    </div>
        </>
    )
}
export default Logindem;