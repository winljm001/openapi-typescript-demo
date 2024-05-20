import { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    API.test.createTest.request({}, { createDate: "123" });
  }, []);
  return <div>123</div>;
}

export default App;
