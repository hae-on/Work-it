import styles from "./app.module.css";
import AppRouter from "./router";

function App() {
  return (
    <div className={styles.background}>
      <AppRouter />
    </div>
  );
}

export default App;
