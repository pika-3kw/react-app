import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { get } from "lodash";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const Private = () => {
  const [message, setMessage] = useState("");

  const { logout } = useAuth0();

  const user = useSelector((state) => state.auth.user);
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    const callApi = async () => {
      const respone = await axios.get("/api/protect");
      const message = respone.data.message;
      setMessage(message);
    };

    callApi();
  }, []);

  return (
    <div>
      <h2>{message}</h2>
      <img src={get(user, "picture")} />
      <h2>{get(user, "name")}</h2>
      <p>{get(user, "email")}</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default withAuthenticationRequired(Private, {
  onRedirecting: () => <div>Redirecting you to the login page...</div>,
});
