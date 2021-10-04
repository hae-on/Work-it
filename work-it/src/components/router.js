import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "components/login/login";
import Main from "components/main/main";
import Home from "./home/home";
import Register from "./register/register";

const AppRouter = ({ isLoggedIn }) => {
  return (
    <BrowserRouter>
      <Switch>
        {/* {isLoggedIn ? (
         
        ) : (
       
        )} */}
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
