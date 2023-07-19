import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import HomePage from "./page/Home/Homepage";
import AuthPage from "./page/Auth/AuthPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { userActons } from "./store/user-reducer";

function App() {
  const dispatch = useDispatch();
  const [authState, setAuthState] = useState(true);
  const isLoggedIn = useSelector((state) => state.user.name);
  const authStateHandler = () => {
    setAuthState((prev) => !prev);
  };

  useEffect(() => {
    const getUser = async () => {
      const token = localStorage.getItem("token");
      const res = await axios.get(`http://localhost:3000/user/get-user`, {
        headers: { Authorization: token },
      });
      const user = res.data.user;
      dispatch(userActons.getUser({ name: user.name, email: user.email }));
    };
    getUser();
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <NavBar authStateHandler={authStateHandler} authState={authState} />
          {isLoggedIn === "" ? (
            <AuthPage
              authState={authState}
              authStateHandler={authStateHandler}
            />
          ) : (
            <HomePage />
          )}
        </>
      ),
    },
    {
      path: "/home",
      element: (
        <>
          <NavBar />
          {isLoggedIn === "" ? (
            <AuthPage
              authState={authState}
              authStateHandler={authStateHandler}
            />
          ) : (
            <HomePage />
          )}
        </>
      ),
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
