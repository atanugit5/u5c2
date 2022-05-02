import "./App.css";
import { Rentals } from "./app/src/Components/Rentals/Rentals";
import { AddHouse } from "./app/src/Components/AddHouse/AddHouse";

function App() {
  return (
    <div className="App">
      <button className="toggleForm">
        {/* Show text Add House or Show Rentals based on state */}
      </button>
      {/* Show component based on state */}
      <br />
    </div>
  );
}

export default App;
