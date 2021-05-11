import React from "react";
import "./App.css";

import CardComponent from "./components/cardComponent";

function App() {
  return (
    <div className="App">
      <CardComponent
        firstName={"Jane"}
        lastName={"Doe"}
        startingAge={45}
        hairColor={"Black"}
      />
      <CardComponent
        firstName={"John"}
        lastName={"Smith"}
        startingAge={88}
        hairColor={"Brown"}
      />
      <CardComponent
        firstName={"Millard"}
        lastName={"Fillmore"}
        startingAge={50}
        hairColor={"Brown"}
      />
      <CardComponent
        firstName={"Maria"}
        lastName={"Smith"}
        startingAge={62}
        hairColor={"Brown"}
      />
    </div>
  );
}

export default App;
