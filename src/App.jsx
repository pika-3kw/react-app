import { Route, Switch } from "react-router-dom";
import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch } from "react-redux";
import axios from "axios";

import HomeScreen from "./screens/Home.screen";
import LoginScreen from "./screens/Login.screen";
import PrivateScreen from "./screens/Private.screen";
import CountScreen from "./screens/Count.screen";

import { saveUserAndToken, clearUserAndToken } from "./actions/authActions";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

function App() {
  const currentToken = localStorage.getItem("token");
  axios.defaults.baseURL = BACKEND_URL;
  axios.defaults.headers.common["Authorization"] = `Bearer ${currentToken}`;
  const { isAuthenticated, user, getAccessTokenSilently } = useAuth0();

  const dispatch = useDispatch();

  useEffect(() => {
    const saveUserProfile = async () => {
      if (isAuthenticated) {
        const token = await getAccessTokenSilently();
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        localStorage.setItem("token", token);
        dispatch(saveUserAndToken(user, token));
      }

      if (!isAuthenticated) {
        localStorage.removeItem("token");
        dispatch(clearUserAndToken());
      }
    };

    saveUserProfile();
  }, [isAuthenticated]);
  return (
    <Switch>
      <Route exact path="/" component={HomeScreen} />
      <Route exact path="/login" component={LoginScreen} />
      <Route exact path="/private" component={PrivateScreen} />
      <Route exact path="/count" component={CountScreen} />
    </Switch>
  );
}

export default App;
