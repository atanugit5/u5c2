import logo from "./logo.svg";
import "./App.css";
import { Rentals } from "./Components/Rentals/Rentals";
import { AddHouse } from "./Components/AddHouse/AddHouse";
import { useState } from "react";

function App() {
  const [toggle, isToggle] = useState(false);
  return (
    <div className="App">
      <button className="toggleForm" onClick={() => isToggle(!toggle)}>
        {/* Show text Add House or Show Rentals based on state */}
        Toggle
      </button>

      {/* Show component based on state */}
      {toggle ? <AddHouse /> : <Rentals />}
      <br />
    </div>
  );
}

export default App;
