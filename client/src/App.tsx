import React from "react";
import api from "./services/api";
import "./App.css";

function App() {
  return (
    <div className="App">
      <button onClick={api.createGame}>Create Game</button>
    </div>
  );
}

export default App;
