import React from "react";
import "../main.css";
import logo from "../imgs/mykidgenius-logo.svg";
import pixlogin from "../imgs/Login (1) (1).png";

const Login = () => {
  return (
    <div className="login">
      <div className="login__logo">
        <img src={logo} alt="" />
      </div>
      <div className="login__container">
        <div className="login__container__1">
          <div className="login__container__1__div">
            <h2>
              Login
              <div className="yellow-line"></div>
            </h2>
          </div>

          <form className="login__container__1__form" action="">
            <div>
              <label htmlFor="useremail">Username/Email</label>
              <input
                type="text"
                name="useremail"
                placeholder="Username/Email"
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
              />

              <a href="">Forgot password?</a>
            </div>

            <button type="submit">Sign in</button>
            <p>
              Don't have an account? <a href="">Sign up</a>
            </p>
          </form>
        </div>

        <div className="login__container__2">
          <div className="login__container__2__img-box">
            <img src={pixlogin} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
