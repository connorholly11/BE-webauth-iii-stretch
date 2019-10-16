import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import LoginForm from "./components/login";
import SignUp from "./components/signUp";
import PrivateRoute from "./utils/PrivateRoute";
import Users from "./components/users";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={LoginForm} />
        <Route exact path="/signup" component={SignUp} />
        <PrivateRoute exact path="/users" component={Users} />
      </div>
    </Router>
  );
}

export default App;
