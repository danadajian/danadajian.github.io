import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {Home} from "./components/Home";
import {Resume} from "./components/Resume";

const App = () => {
  return (
      <main>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/resume" component={Resume} />
        </Switch>
      </main>
  );
};

export default App;
