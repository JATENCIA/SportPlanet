import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const LoginButton = () => {
  const { loginWithPopup } = useAuth0();

  return <button onClick={() => loginWithPopup()}>LOGIN</button>;
};
