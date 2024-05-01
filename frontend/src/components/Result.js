import React from 'react';
import { useNavigate } from 'react-router-dom';

const Result = ({ result }) => {
  const navigate = useNavigate();

  const handleRestartGame = () => {
    // Redirect to the home page
    navigate('/');
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold mb-4">Result Page</h2>
      {result ? (
        <div>
          <p className="text-lg">
            {result.success ? `Criminal captured by ${result.capturingCop}` : 'Criminal not found!'}
          </p>
          {/* Button to restart the game */}
          <button onClick={handleRestartGame} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
            Restart Game
          </button>
        </div>
      ) : (
        <p className="text-lg">Loading...</p>
      )}
    </div>
  );
}

export default Result;
