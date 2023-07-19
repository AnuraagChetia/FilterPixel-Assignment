import React from "react";
import "./navbar.css";
import logo from "../../assets/fpLogo.svg";
import { useSelector } from "react-redux";
import Glogout from "../Auth/Glogout";
const NavBar = (props) => {
  const token = localStorage.getItem("token");
  const authState = props.authState;
  const authStateHandler = props.authStateHandler;
  const name = useSelector((state) => state.user.name);
  const imgUrl = useSelector((state) => state.user.img);

  const logoutHandler = () => {
    localStorage.removeItem("token");
    const a = document.createElement("a");
    a.href = "http://localhost:5173/";
    a.click();
  };

  return (
    <div className="navbar">
      <div className="brand">
        <img src={logo} className="brandLogo" />
      </div>
      {!name && (
        <button type="button" onClick={authStateHandler}>
          {authState ? "Signup" : "Login"}
        </button>
      )}

      {imgUrl && (
        <>
          <div className="pfButton">
            <img src={imgUrl} className="pfp" />
            <span className="nameSpan">{name}</span>
            {imgUrl != "" ? (
              <Glogout />
            ) : (
              <button type="button" className="logout" onClick={logoutHandler}>
                Logout
              </button>
            )}
          </div>
        </>
      )}

      {token && (
        <div className="pfButton">
          <img src={imgUrl} className="pfp" />
          <span className="nameSpan">{name}</span>
          <button type="button" className="logout" onClick={logoutHandler}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default NavBar;
