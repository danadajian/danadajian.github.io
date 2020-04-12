import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {Home} from "./components/Home/Home";
import {About} from "./components/About/About";
import {Resume} from "./components/Resume/Resume";
import {Projects} from "./components/Projects/Projects";

const App = () => {
  return (
      <main>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} exact />
          <Route path="/resume" component={Resume} />
          <Route path="/projects" component={Projects} />
        </Switch>
      </main>
  );
};

export default App;
