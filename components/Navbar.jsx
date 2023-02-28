import "./Navbar.css";
import { Link } from "react-router-dom";

import React, { useState } from "react";

export default function Navbar() {
  const [input, setInput] = useState(false);
  const [data, setData] = useState(false);

  // Login-page!
  const signin = () => {
    setInput(!input);
  };

  const handel1 = (e) => {
    e.target.value();

    setInput(e.target.value);
  };

  const handel2 = (e) => {
    e.target.value();
    setInput(e.target.value);
  };
  const login = (event) => {
    event.preventDefault();

    setInput(event.target.value);
    setInput("");
    alert("login successful ✅");
  };



  // Register-Page!
const register=()=>{
setData(

!data

)
if(setData){
  setInput(!input)
}
}


// Submit-register!

const submitregister=(event)=>{
event.preventDefault();
setData('');
alert('register successful ✅')
}

const firstname=(e)=>{
e.target.value();
setData(e.target.value)

}

const lastname=(e)=>{
  e.target.value();
setData(e.target.value)
}

const email=(e)=>{
  e.target.value();
setData(e.target.value)
}

const passwordin=(e)=>{
  e.target.value();
setData(e.target.value)
}

const passwordconfirm=(e)=>{
  e.target.value();
setData(e.target.value)
}

  return (
    <div>
      <nav>
        <ul>
          <li>
          <Link to="/about">About</Link>
          
          </li>
          <li>
            <Link to="/post">Post</Link>
          </li>
          <li>
          <Link to="/">Home</Link>
          
          </li>
        </ul>
      </nav>








      
      <span className="sign-in" onClick={signin}>
        Sign In
      </span>

      {input ? (
        <span className="login" style={{ height: "30rem" }}>
          <br />
          <form onSubmit={login}>
            <label htmlFor="email" style={{ color: "gray" }}>
              E-mail
            </label>
            <br />
            <input
              type="email"
              name='e-mail'
            
              onChange={handel1}
              style={{ height: "2rem", cursor: "pointer" }}
            />
            <br />
            <label htmlFor="password" style={{ color: "gray" }}>
              Password
            </label>
            <br />
            <input
              type="password"
              name='password'
              onChange={handel2}
              style={{ height: "2rem", cursor: "pointer" }}
            />
            <br />
            <br />
            <input
              type="submit"
              value="login"
              style={{
                cursor: "pointer",
                cursor: "pointer",
                width: "18rem",
                height: "2rem",
                fontWeight:'600',
                backgroundColor: "teal",
              }}
            />
          </form>
          

          <span className='register-button' onClick={register}>Register</span>
<span className='or' style={{width:'16rem'}}>or</span>
<span className='login-logo'>Login</span>

        </span>
      ) : null}













    { data? <span className='register-form' style={{height:'29rem'}}>
      <form onSubmit={submitregister}>
      <label htmlFor="text">First Name</label><br/>
      <input type='text' name='first name'/><br/>

      <label htmlFor="text">Last Name</label><br/>
      <input type='text' onChange={firstname} name='first name'/><br/>
      
      <label htmlFor="email">E-mail</label><br/>
      <input type='email' onChange={lastname} name='email'/><br/>
      
      <label htmlFor="password">Password</label><br/>
      <input type='password' onChange={email} name='first name'/><br/>
      
      <label htmlFor="password">Confirm Password</label><br/>
      <input type='password' onChange={passwordin} name='confirm password'/><br/>
      
      <input type='submit' onChange={passwordconfirm} value='Register'  style={{position:'absolute',marginLeft:'11.5rem',marginTop:'1rem'}}/>
      </form>
      
      <span className='register-logo'>Register</span>
      </span>:null







            }



    </div>
  );
}
