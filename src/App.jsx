import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import FunctionalComponent from "./components/FunctionalComponent";
import ClassComponents from "./components/ClassComponent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      hi
      <FunctionalComponent />
      <ClassComponents />
    </div>
  );
}

export default App;
