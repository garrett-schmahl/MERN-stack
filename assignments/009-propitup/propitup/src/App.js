import React from "react";
import "./App.css";

import CardComponent from "./components/cardComponent";

function App() {
  return (
    <div className="App">
      <CardComponent
        firstName={"Jane"}
        lastName={"Doe"}
        age={45}
        hairColor={"Black"}
      />
      <CardComponent
        firstName={"John"}
        lastName={"Smith"}
        age={88}
        hairColor={"Brown"}
      />
      <CardComponent
        firstName={"Millard"}
        lastName={"Fillmore"}
        age={50}
        hairColor={"Brown"}
      />
      <CardComponent
        firstName={"Maria"}
        lastName={"Smith"}
        age={62}
        hairColor={"Brown"}
      />
    </div>
  );
}

export default App;
