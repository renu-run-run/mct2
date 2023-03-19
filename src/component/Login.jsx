import React from "react"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        
        navigate("/home");
    }
    return(
        <>
        <div className="form-div">
        <form className="login-form">
          <label htmlFor="email">Email</label>
          <input  
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          type="email" 
          placeholder="enter your email.."
          />
          <label htmlFor="password">Password</label>
          <input 
          value={pass} 
          onChange={(e) => setPass(e.target.value)} 
          type="password" 
          placeholder="*************"
          /> 
          <button className="login-btn" onClick={()=>handleSubmit()}>Log In</button>
         </form>
        </div>
         
        </>
    )
}

export default Login