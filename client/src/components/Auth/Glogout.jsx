import React from "react";
import { GoogleLogout } from "react-google-login";

const Glogout = () => {
  const clientId =
    "your_oAuth_client_id";

  const onSuccess = () => {
    const a = document.createElement("a");
    a.href = "http://localhost:5173/";
    a.click();
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
        theme="dark"
        icon={false}
      />
    </div>
  );
};

export default Glogout;
