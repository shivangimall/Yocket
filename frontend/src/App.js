
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Selection from './components/Selection';
import Result from './components/Result';



function App() {
  return (
    <BrowserRouter>
   
      <Routes>
        <Route path='/' element={<LandingPage />} />

        <Route path='/city-selection' element={<Selection />} />
        <Route path='/result' element={<Result />} />
        
      </Routes>

    
    </BrowserRouter>
  );
}

export default App;
