import { useAuth0 } from "@auth0/auth0-react";

const ButtonLoginAuth0 = () => {
  const { loginWithRedirect } = useAuth0();

  return <button onClick={loginWithRedirect}>Login with Auth0</button>;
};

export default ButtonLoginAuth0;
