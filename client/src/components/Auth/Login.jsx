import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import gLogo from "../../assets/googleLogo.png";
import { loginAction, signupAction } from "../../functions/loginActions";
import "./login.css";
import Glogin from "./Glogin";
import { gapi } from "gapi-script";
import Glogout from "./Glogout";
import { useDispatch } from "react-redux";
import { userActons } from "../../store/user-reducer";
const Login = (props) => {
  const clientId =
    "your_oAuth_client_id";
  //Refs
  const emailRef = useRef();
  const passwordRef = useRef();
  const nameRef = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const authState = props.authState; // login-signup state
  const authStateHandler = props.authStateHandler; // auth state handlerf

  useEffect(() => {
    const start = () => {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    };
    gapi.load("client:auth2", start);
  }, []);

  // login handler
  const loginHandler = async (e) => {
    e.preventDefault();
    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;
    const credentials = {
      email: enteredEmail,
      password: enteredPassword,
    };
    //make a req to backend
    const res = await loginAction(credentials);
    dispatch(
      userActons.getUser({ name: res.data.name, email: res.data.email })
    );

    if (res.status === 200) {
      navigate("/home");
      localStorage.setItem("token", res.data.token);
    }
    //if login successful navigate to homepage else show error
  };

  const signupHandler = async (e) => {
    e.preventDefault();
    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;
    const enteredName = nameRef.current.value;

    const credentials = {
      email: enteredEmail,
      password: enteredPassword,
      name: enteredName,
    };
    //make a signup request to backend
    const res = await signupAction(credentials);
    if (res.status === 200) {
      alert("Signup successful");
      authStateHandler();
    }
    //if signup successful show success message and navigate to login page
    //else show error
  };

  return (
    <div className="loginContainer">
      <div className="login">
        <h1 className="title">FilterPixel</h1>
        <Glogin />
        <div className="or">
          <hr className="hr" />
          OR
          <hr className="hr" />
        </div>
        <form
          className="loginForm"
          onSubmit={authState ? loginHandler : signupHandler}
        >
          {!authState && (
            <input
              type="name"
              placeholder="Your Name"
              className="loginInput"
              ref={nameRef}
              required
            ></input>
          )}
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="loginInput"
            ref={emailRef}
            required
          ></input>
          <input
            type="password"
            placeholder="Password"
            className="loginInput"
            ref={passwordRef}
            required
          ></input>
          {authState ? (
            <button type="submit">Login</button>
          ) : (
            <button type="submit">Signup</button>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;
