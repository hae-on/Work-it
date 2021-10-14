import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "components/login/login";
import Main from "components/main/main";
import Home from "./home/home";
import Register from "./register/register";
import Input from "./input_form/input";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
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
        <Route exact path="/input">
          <Input />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
