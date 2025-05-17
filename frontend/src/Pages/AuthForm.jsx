import  { useState } from "react";
import axiosInstance from "../utils/axiosInstance";

const AuthForm = () => {
  const [isRightPanelActive, setIsRightPanelActive] = useState(false);

  const [user, setUser] = useState({
    userName : '',
    email : '',
    password : ''
  })

  const handleSingIn = async (e) => {
    e.preventDefault();
    const {userName, email, password} = user
     const res = await axiosInstance.post('/auth/signin', {
     userName ,
     email ,
     password 
     });
     console.log(res) 
  };

  const handleLogin = () => {

  }

  return (
    <>
      <div
        className={`container ${isRightPanelActive ? "right-panel-active" : ""}`}
        id="container"
      >
        <div className="form-container sign-up-container">
          <form onSubmit={ handleSingIn}>
            <h1 className="text-or">Create Account</h1>
            <input 
            type="text" 
            placeholder="Name" 
            onChange={(e) => setUser((prev) => ({...prev, userName : e.target.value}))}
            />
            <input type="email" placeholder="Email" 
            onChange={(e) => setUser(prev => ({...prev, email : e.target.value}))}
            />
            <input type="password" placeholder="Password" 
            onChange={(e) => setUser(prev => ({...prev, password : e.target.value}))}
            />
            <button type="submit">Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form onSubmit={handleLogin}>
            <h1>Sign in</h1>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <a href="#">Forgot your password?</a>
            <button type="submit">Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>To keep connected with us please login with your personal info</p>
              <button
                className="ghost"
                onClick={() => setIsRightPanelActive(false)}
              >
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button
                className="ghost"
                onClick={() => setIsRightPanelActive(true)}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default AuthForm;
