import React from "react";

import "./App.css";

//Importing Components
import Form from "./components/Form.js";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Nathans Todo List</h1>
      </header>
      <Form />
    </div>
  );
}

export default App;
