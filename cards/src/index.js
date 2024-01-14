// Imoprt React and ReactDOM libraries
import React from "react"; //Defines what a component is and how multiple components work together
import ReactDOM from "react-dom/client"; // Knows how to show up in the browser
import App from "./App"


// Get reference to the div with root ID
const el = document.getElementById("root");

// Tell react to take control of the div element
const root = ReactDOM.createRoot(el);

// Show component on the screen
root.render(<App />)