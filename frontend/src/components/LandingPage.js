import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
    const navigate = useNavigate(); // Use the useNavigate hook to get access to the navigate function

    const startGame = () => {
      navigate('/city-selection'); // Use navigate to navigate to the '/city-selection' route
    };
  
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white text-center">Welcome to the Capture Fugitive Game</h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-8 text-white text-center">Choose a city and vehicle to capture the fugitive!</p>
        <button 
          className="bg-white hover:bg-gray-200 text-blue-500 font-bold py-2 px-4 md:py-3 md:px-6 lg:py-4 lg:px-8 rounded"
          onClick={startGame}
        >
          Start Game
        </button>
      </div>
    );
}

export default LandingPage;
