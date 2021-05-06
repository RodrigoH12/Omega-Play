<<<<<<< HEAD
import "./App.css";
import Search from "./components/SearchComponent/Search";
import MoviesCarousel from './components/Home/MoviesCarousel'
import ApplicationHeaderComponent from './components/ApplicationHeader/ApplicationHeaderComponent';
=======
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Login from './components/Forms/Login';
import Register from './components/Forms/Register';
import Home from './components/Home';
import ProtectedRoute from './components/Forms/Protectedroute'
import React, { useState } from 'react';

>>>>>>> c88d575 (Implementation of forms UI and protected routes.)

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
      <div>
      <ApplicationHeaderComponent />
      </div>
      <div>
        <MoviesCarousel />
        <Search />
      </div>
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
        </Switch>
      </div>
    </Router>
  );
}
export default App;