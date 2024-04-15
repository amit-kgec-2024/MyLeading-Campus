import "./App.css";
import React, { useState } from "react";
import CountrySelector from "./CountrySelector"; 
import StateSelector from "./StateSelector"; 
import { Toaster } from "react-hot-toast"; 

function App() {
  const [selectedCountry, setSelectedCountry] = useState("");

  const handleSelectCountry = (country) => {
    setSelectedCountry(country);
  };

  return (
    <div className="mainbody">
      <h1>Country & State Selector</h1>
      <CountrySelector onSelectCountry={handleSelectCountry} />
      <StateSelector selectedCountry={selectedCountry} />
      <Toaster /> 
    </div>
  );
}

export default App;
