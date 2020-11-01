import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Login from './views/Auth/Login';
import Dashboard from './views/Dashboard';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route key="dashboard" path="/dashboard" component={Dashboard} exact />
        <Route key="login" path="/auth/login" component={Login} />
        <Redirect from="/" to="/dashboard" />
      </Switch>
    </div>
  );
}

export default App;
