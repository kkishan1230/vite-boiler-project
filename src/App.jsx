import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { headingStyles as styles } from "./styling";

function App() {
  const [count, setCount] = useState(0);

  return <h1 css={[styles.heading]}>kishan</h1>;
}

export default App;
