import React from 'react';
import Company from '../pages/Company';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import '../styles/global.css';

const App = () => (
  <Router>
    <Switch>
      <Route path="/">
        <Company />
      </Route>
    </Switch>
  </Router>
);

export default App;
