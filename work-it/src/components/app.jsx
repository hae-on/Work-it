import React, { useEffect, useState } from "react";
import styles from "./app.module.css";
import { authService } from "service/fbase";
import AppRouter from "./router";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [init, setInit] = useState(false);

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);

  return (
    <div className={styles.background}>
      {init ? <AppRouter isLoggedIn={isLoggedIn} /> : "준비 중"}
    </div>
  );
}

export default App;
