import './App.css';
import FahrenheitFormat from './components/FahrenheitFormat';
import KelvinFormat from './components/KelvinFormat'
import Form from './components/Form';
import { useState } from 'react';

function App() {

  const [temperature, setTemperature] = useState(0)

  return (
    <div className='app'>
      <h1>Weather Calculator</h1>
      <Form temperature={temperature} setTemperature={setTemperature}/>
      <div>
        <KelvinFormat temperature={temperature}/>
        <FahrenheitFormat temperature={temperature}/>
      </div>
    </div>
  );
}

export default App;
