import React, { useState } from "react";
import "./App.css";

function App() {
  const [isDark, setDark] = useState(false);

  function ChangeTheme() {
    setDark(!isDark);
  }

  return (
    <div
    className="App"
      style={{
        backgroundColor: isDark ? "Black" : "white",
        color: isDark ? "#fff" : "#000",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        transition: "all 0.4s ease",
          margin: -8,
        
      }}
    >
      <h1>{isDark ? "Dark Mode" : "Light Mode"}</h1>
      <button
        onClick={ChangeTheme}
        style={{
          backgroundColor: isDark ? "white" : "black",
          color: isDark ? "black" : "white",
          border: "none",
          padding: "10px 20px",
          borderRadius: "8px",
        

        }}
      >
        Switch Theme
      </button>
    </div>
  );
}

export default App;

