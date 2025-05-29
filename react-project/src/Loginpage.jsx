import React from 'react'

function Loginpage() {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form>
          <div className="input-group">
            <input type="email" placeholder="Email" required />
          </div>
          <div className="input-group">
            <input type="password" placeholder="Password" required />
          </div>
          {/* <div className="options">
            <label><input type="checkbox" /> Remember me</label>
            <a href="#">Forgot Password?</a>
          </div> */}
          <button type="submit">Login</button>
          {/* <p className="register">Don’t have an account? <a href="#">Register</a></p> */}
        </form>
      </div>
    </div>
  );
}

export default Loginpage