import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Login from './views/Auth/Login';
import Dashboard from './views/Dashboard';
import Profile from './views/Dashboard/Profile';

function App() {
  const idToken = localStorage.getItem('idToken');
  return (
    <div className="App">
      <Switch>
        <Route key="dashboard" path="/dashboard" component={Dashboard} exact />
        <Route key="login" path="/auth/login" component={Login} />
        <Route key="profile" path="/dashboard/profile" component={Profile} />
        <Redirect from="/" to={idToken ? "/dashboard" : '/auth/login'} />
      </Switch>
    </div>
  );
}

export default App;
