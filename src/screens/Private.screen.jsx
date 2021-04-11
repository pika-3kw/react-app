import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";

const Private = () => {
  const { user, logout } = useAuth0();

  return (
    <div>
      <img src={user.picture} alt={user.name} />
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default withAuthenticationRequired(Private, {
  onRedirecting: () => <div>Redirecting you to the login page...</div>,
});
