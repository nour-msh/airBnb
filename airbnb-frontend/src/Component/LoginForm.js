import React, { Component } from 'react';

function LoginForm(){
    return (
        <div className="loginContainer">
          <form className="myform login">
            <h5>Log In</h5>
    
            
            <input
              placeholder="Enter Email"
            />
            
            <input
              placeholder="Enter Password"
              type="password"
            />
            <button className='login-btn'>
              Login
            </button>
          </form>
        </div>
      );
}

export default LoginForm