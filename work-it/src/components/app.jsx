import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./login/login";
import styles from "./app.module.css";
import Main from "./main/main";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className={styles.background}>
      <BrowserRouter>
        <Switch>
          {isLoggedIn ? (
            <Route exact path="/">
              <Main />
            </Route>
          ) : (
            <Route exact path="/">
              <Login />
            </Route>
          )}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
