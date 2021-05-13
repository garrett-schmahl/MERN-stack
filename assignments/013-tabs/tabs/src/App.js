import React, { useState } from "react";
import "./App.css";
import SelectTab from "./components/SelectTab";
import DisplayTabContent from "./components/DisplayTabContent";

function App() {
  const [tab, setTab] = useState([
    { name: "tab1", data: "tab1 data" },
    { name: "tab2", data: "tab2 data" },
    { name: "tab3", data: "tab3 data" },
  ]);
  const [pageState, setPageState] = useState(false);
  return (
    <div className="App">
      <SelectTab tab={tab} pageState={pageState} setPageState={setPageState} />
      <DisplayTabContent tab={tab} pageState={pageState} />
    </div>
  );
}

export default App;
