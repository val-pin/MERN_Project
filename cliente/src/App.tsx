import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const fetchServer = async () => {
    const response = await fetch("http://localhost5000/api/test");
    const result = await response.json();
    console.log("result :>> ", result);
  };
  return (
    <>
      <div>
        <h1>B.Garden</h1>
      </div>
    </>
  );
}

export default App;
