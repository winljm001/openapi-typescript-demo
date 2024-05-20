import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import "./App.css";
import React from "react";
import { useEffect } from "react";
import { findTestById } from "./services/api/test";

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    findTestById({ id: 123 });
  }, []);
  return <div>123</div>;
}

export default App;
