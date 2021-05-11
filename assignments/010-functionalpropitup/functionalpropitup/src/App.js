import "./App.css";
import React from "react";

import PersonCard from "./components/PersonCard";

function App() {
  return (
    <div className="App">
      <PersonCard
        firstName={"Jane"}
        lastName={"Doe"}
        startingAge={45}
        hairColor={"Black"}
      />
      <PersonCard
        firstName={"Jane"}
        lastName={"Doe"}
        startingAge={45}
        hairColor={"Black"}
      />
      <PersonCard
        firstName={"Jane"}
        lastName={"Doe"}
        startingAge={45}
        hairColor={"Black"}
      />
      <PersonCard
        firstName={"Jane"}
        lastName={"Doe"}
        startingAge={45}
        hairColor={"Black"}
      />
    </div>
  );
}

export default App;
