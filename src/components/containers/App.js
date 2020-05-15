import React from "react";
import WbnPlayer from "./WbnPlayer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GlobalStyle from '../styles/GlobalStyle';

const App = () => (
  <Router basename="/react_videoplayer/">
    <Switch>
      <Route path="/" exact component={WbnPlayer} />
      <Route path="/:activeVideo" exact component={WbnPlayer} />
      <Route render={() => <h1>404 : Page Not Found</h1>} />
    </Switch>
    <GlobalStyle />
  </Router>
);

export default App;
