
import React from "react";
import { useState } from "react";
const Contact =() =>{
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    
    return(
        <>
        <div className="form-div">
        <form className="login-form">
          <h3>Hey There! It's Great to See you here..</h3>
          <label htmlFor="email">Email</label>
          <input  value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="enter your email.."/>
          <label htmlFor="password">Message</label>
          <input value={pass} onChange={(e) => setPass(e.target.value)} type="text" placeholder="Write a massage"/> 
          <button className="login-btn" >Say Hii! </button>
          <h3>Made with ❤️ & 💻</h3>
          <h6>©️renukaChoudhary</h6>
         </form>
        </div>
        </>
    )
}
export default Contact;
