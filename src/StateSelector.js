import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';

function StateSelector({ selectedCountry }) {
  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState('');

  useEffect(() => {
    if (selectedCountry) {
      fetch(`https://api.first.org/data/v1/countries/${selectedCountry}/regions`)
        .then(response => response.json())
        .then(data => {
          if (data.data[selectedCountry]) {
            setStates(data.data[selectedCountry]);
          }
        })
        .catch(error => console.error('Error fetching states:', error));
    }
  }, [selectedCountry]);

  const handleStateChange = e => {
    const state = e.target.value;
    setSelectedState(state);
    toast.success(`Selected state: ${state}`);
  };

  return (
    <div>
      <label htmlFor="state">Select State:</label>
      <select id="state" value={selectedState} onChange={handleStateChange}>
        <option value="">Select...</option>
        {states &&
          Object.entries(states).map(([key, value]) => (
            <option key={key} value={value}>{value}</option>
          ))}
      </select>
    </div>
  );
}

export default StateSelector;
