import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./store";

import HomeScreen from "./screens/Home.screen";
import LoginScreen from "./screens/Login.screen";
import PrivateScreen from "./screens/Private.screen";
import CountScreen from "./screens/Count.screen";

const REACT_APP_CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const REACT_APP_AUTH0_DOMAIN = process.env.REACT_APP_AUTH0_DOMAIN;

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Auth0Provider
          domain={REACT_APP_AUTH0_DOMAIN}
          clientId={REACT_APP_CLIENT_ID}
          redirectUri={window.location.origin}
        >
          <Switch>
            <Route exact path="/" component={HomeScreen} />
            <Route exact path="/login" component={LoginScreen} />
            <Route exact path="/private" component={PrivateScreen} />
            <Route exact path="/count" component={CountScreen} />
          </Switch>
        </Auth0Provider>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
