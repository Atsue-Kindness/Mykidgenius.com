import React from "react";
import "../main.css";
import logo from "../imgs/mykidgenius-logo.svg";
import pixlogin from "../imgs/signup.png";

const Signup = () => {
  return (
    <div className="login">
      <div className="login__logo">
        <img src={logo} alt="" />
      </div>
      <div className="login__container">
        <div className="login__container__1">
          <div className="login__container__1__div">
            <h2>
              Sign up
              <div className="yellow-line"></div>
            </h2>
          </div>

          <form className="login__container__1__form" action="">
            <div>
              <label htmlFor="surname">Surname</label>
              <input type="text" name="surname" placeholder="Surname" />
            </div>

            <div>
              <label htmlFor="firstname">First name</label>
              <input type="text" name="firstname" placeholder="First name" />
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <input type="email" name="email" placeholder="Email" />
            </div>

            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
              />
            </div>
            <div>
              <label htmlFor="confirmpassword">Confirm password</label>
              <input
                type="password"
                name="confirmpassword"
                id="confirmpassword"
                placeholder="Confirm password"
              />
            </div>

            <button type="submit">Sign up</button>
            <p>
              Already have an account? <a href="">Log in</a>
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

export default Signup;
