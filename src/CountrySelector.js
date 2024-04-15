import React, { useState, useEffect } from "react";

function CountrySelector({ onSelectCountry }) {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        setCountries(data);
      })
      .catch((error) => console.error("Error fetching countries:", error));
  }, []);

  const handleCountryChange = (e) => {
    const country = e.target.value;
    setSelectedCountry(country);
    onSelectCountry(country);
  };

  return (
    <div>
      <label htmlFor="country">Select Country:</label>
      <select
        id="country"
        value={selectedCountry}
        onChange={handleCountryChange}
      >
        <option value="">Select...</option>
        {countries.map((country) => (
          <option key={country.name.common} value={country.name.common}>
            {country.name.common}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CountrySelector;
