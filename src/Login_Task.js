import {React,useState} from 'react'

function Login_Task() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  function handleLogin(event) {
    event.preventDefault();
   
    alert("Login form submitted!");
  }




  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleLogin}>
        
        
        Email : <input type='email' placeholder='Enter  Email'  value={Email} onChange={(event) => setEmail(event.target.value)} /><br/><br/>
        Password : <input type='password' placeholder='Enter Password' value={Password} onChange={(event) => setPassword(event.target.value)} /><br/><br/>
        
        
      
        <button type='submit'>Login</button>

      </form>
    </div>
  )
}

export default Login_Task