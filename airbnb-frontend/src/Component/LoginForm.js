import React, { Component } from 'react';

function LoginForm(){
    return (
        <div className="container">
          <form className="myform login">
            <h5>Log In</h5>
    
            <label>Email:</label>
            <input
              placeholder="Enter Email"
            />
            <label>Password:</label>
            <input
              placeholder="Enter Password"
              type="password"
            />
            <button>
              Login
            </button>
          </form>
        </div>
      );
}

export default LoginForm