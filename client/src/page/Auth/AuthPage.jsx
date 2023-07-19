import React from "react";
import Login from "../../components/Auth/Login";

const Auth = (props) => {
  const authState = props.authState;
  const authStateHandler = props.authStateHandler;
  return (
    <>
      <Login authState={authState} authStateHandler={authStateHandler} />
    </>
  );
};

export default Auth;
