import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Login from './components/Forms/Login';
import Register from './components/Forms/Register';
import Home from './components/Home/Home';
import ProtectedRoute from './components/Forms/Protectedroute';
import React, { useState } from 'react';
import Avatar from './components/Forms/Avatar';
import ApplicationHeaderComponent from './components/ApplicationHeader/ApplicationHeaderComponent';
import MovieDetail from './components/MovieDetailComponent/MovieDetail';


function App() {

  const [user, setUser] = useState(false);

  const handleLogin = e => {
    e.preventDefault();
    setUser(true);
  }

  const handleLogout = e => {
    e.preventDefault();
    setUser(false);
  }

  return (
    <Router>
      <div className="App">
        <ApplicationHeaderComponent user={user} handleLogout={handleLogout}/>
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return (
                { user } ?
                  <Redirect to="/home" /> :
                  <Redirect to="/sign-in" />
              )
            }}
          />
          <ProtectedRoute exact path='/home' user={user} component={Home} handleLogout={handleLogout} />
          <Route exact path="/sign-in" handleLogin={handleLogin} render={props => <Login {...props} user={user.toString()} handleLogin={handleLogin} />} />
          <Route exact path="/sign-up" handleLogin={handleLogin} render={props => <Register {...props} user={user.toString()} handleLogin={handleLogin} />} />
          <ProtectedRoute exact path="/avatar" user={user} handleLogin={handleLogin} component={Avatar} />
          <ProtectedRoute path="/movie" user={user} handleLogin={handleLogin} component={MovieDetail} />
        </Switch>
      </div>
    </Router>
  );
}
export default App;