import React from "react";
import { ThemeProvider } from "./utils/ThemeContext";
import Home from "./pages/Home/Home";
import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;
