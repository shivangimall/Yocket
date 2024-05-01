import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
    const navigate = useNavigate(); // Use the useNavigate hook to get access to the navigate function

    const startGame = () => {
      navigate('/city-selection'); // Use navigate to navigate to the '/city-selection' route
    };
  
    return (
      <div>
        <h1>Welcome to the Capture Fugitive Game</h1>
        <p>Choose a city and vehicle to capture the fugitive!</p>
        <button onClick={startGame}>Start Game</button>
      </div>
    );
  }

export default LandingPage