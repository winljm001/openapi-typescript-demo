import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { TestApi } from "./services";

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    new TestApi().findTestById(213);
  }, []);
  return (
    <>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
