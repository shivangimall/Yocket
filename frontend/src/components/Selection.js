import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Result from './Result';

const Selection = () => {
  const navigate = useNavigate();
  const [copSelections, setCopSelections] = useState([
    { city: '', vehicle: '' },
    { city: '', vehicle: '' },
    { city: '', vehicle: '' },
  ]);
  const [cities, setCities] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [result, setResult] = useState(null);
  const [selectedCities, setSelectedCities] = useState(Array(3).fill(''));

  useEffect(() => {
    // Fetch cities data from the backend
    axios.get('http://localhost:3000/cities')
      .then(response => {
        setCities(response.data);
      })
      .catch(error => {
        console.error('Error fetching cities:', error);
      });

    // Fetch vehicles data from the backend
    axios.get('http://localhost:3000/vehicles')
      .then(response => {
        setVehicles(response.data);
      })
      .catch(error => {
        console.error('Error fetching vehicles:', error);
      });
  }, []);

  const handleCitySelect = (city, index) => {
    setCopSelections(prevState => {
      const newState = [...prevState];
      newState[index].city = city;
      return newState;
    });

    // Disable the selected city for other cops
    setSelectedCities(prevCities => {
      const newSelectedCities = [...prevCities];
      newSelectedCities[index] = city;
      return newSelectedCities;
    });
  };

  const handleVehicleSelect = (vehicle, index) => {
    setCopSelections(prevState => {
      const newState = [...prevState];
      newState[index].vehicle = vehicle;
      return newState;
    });
  };

  const handleSubmit = () => {
    axios.post('http://localhost:3000/capture', { cops: copSelections })
      .then(response => {
        setResult(response.data); // Set result received from the backend
      })
      .catch(error => {
        console.error('Error capturing fugitive:', error);
        // Handle error
      });
  };

  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {!result ? (
          <div className="text-white">
            <h2 className="text-3xl font-semibold mb-4 text-center">Selection Page</h2>
            {copSelections.map((cop, index) => (
              <div key={index} className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Cop {index + 1}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <select value={cop.city} onChange={(e) => handleCitySelect(e.target.value, index)} className="border border-gray-300 rounded-md p-2 text-black">
                    <option value="">Select a City</option>
                    {cities.map(city => (
                      <option key={city.name} value={city.name} disabled={selectedCities.indexOf(city.name) !== -1 && selectedCities.indexOf(city.name) !== index}>
                        {city.name} - {city.distance} KM
                      </option>
                    ))}
                  </select>
                  <select value={cop.vehicle} onChange={(e) => handleVehicleSelect(e.target.value, index)} className="border border-gray-300 rounded-md p-2 text-black">
                    <option value="">Select a Vehicle</option>
                    {vehicles.map(vehicle => (
                      <option key={vehicle.type} value={vehicle.type}>
                        {vehicle.type} - Range: {vehicle.range} KM
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            ))}
            <button onClick={handleSubmit} className="bg-white hover:bg-gray-200 text-blue-600 font-bold py-2 px-4 rounded w-full md:w-auto shadow-md">
              Submit
            </button>
          </div>
        ) : (
          <Result result={result} /> // Pass result to Result component
        )}
      </div>
    </div>
  );
};

export default Selection;
