import React from "react";
import "./App.css"; 
import Greeting from "./Component/Greetings"; // import Greeting component

function App() {
  return (
    <div>
      <h1>My First React App</h1>
      <p>This is my first React app</p>
      <Greeting />
    </div>
  );
}
export default App; // export App component
