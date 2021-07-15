import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";

import Error from "./containers/Error";
import HomePage from "./containers/HomePage";
import Navigation from "./containers/Navigation";

function App() {
  const location = useLocation();
  const [hash, setHash] = React.useState(location.hash);
  return (
    <>
      {location.pathname === "/" && <Navigation hash={hash} />}
      <Switch>
        <Route path="/" exact>
          <HomePage setHash={setHash} />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </>
  );
}

export default App;
