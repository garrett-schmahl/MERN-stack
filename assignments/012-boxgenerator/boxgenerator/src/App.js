import React, { useState } from "react";
import "./App.css";
import BoxInput from "./components/BoxInput";
import BoxDisplay from "./components/BoxDisplay";

function App() {
  const [boxList, setBoxList] = useState({ boxes: [] });
  return (
    <div className="App">
      <BoxInput boxList={boxList} setBoxList={setBoxList} />
      <BoxDisplay boxList={boxList} />
    </div>
  );
}

export default App;
