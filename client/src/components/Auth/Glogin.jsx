import React from "react";
import { useDispatch } from "react-redux";
import { GoogleLogin } from "react-google-login";
import { userActons } from "../../store/user-reducer";
const Glogin = () => {
  const dispatch = useDispatch();
  const clientId =
    "your_oAuth_client_id";

  const onSuccess = (res) => {
    const { name, email, imageUrl } = res.profileObj;
    dispatch(userActons.getUser({ name, email, imageUrl }));
  };
  const onFailure = (res) => {
    console.log("LOGIN FAILED!!", res);
  };
  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login with google"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy="single_host_origin"
        isSignedIn={true}
      />
    </div>
  );
};

export default Glogin;
