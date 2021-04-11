import { useAuth0 } from "@auth0/auth0-react";

const ButtonLogoutAuth0 = () => {
  const { logout } = useAuth0();

  return (
    <button onClick={() => logout({ returnTo: window.location.origin })}>
      Logout
    </button>
  );
};

export default ButtonLogoutAuth0;
