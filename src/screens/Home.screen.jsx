import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Home = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <div>
      <h1>Home</h1>
      {!isAuthenticated && (
        <p>
          <Link to="/login">Login</Link>
        </p>
      )}
      <p>
        <Link to="/private">Private</Link>
      </p>
      <p>
        <Link to="/count">Count</Link>
      </p>
    </div>
  );
};

export default Home;
