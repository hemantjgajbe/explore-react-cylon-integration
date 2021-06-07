import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import './App.css';

function App() {
  const [apiResponse, setApiResponse] = useState('');
  const setLEDConfiguration = () => {
    fetch('http://localhost:9000/cylonRoute/setLedRobotConfiguration')
      .then((res) => res.text())
      .then((res) => setApiResponse(res));
  };
  const startLED = () => {
    fetch('http://localhost:9000/cylonRoute/startLED')
      .then((res) => res.text())
      .then((res) => setApiResponse(res));
  };
  const stopLED = () => {
    fetch('http://localhost:9000/cylonRoute/stopLED')
      .then((res) => res.text())
      .then((res) => setApiResponse(res));
  };
  const stopInLED = () => {
    fetch('http://localhost:9000/cylonRoute/stopInLED')
      .then((res) => res.text())
      .then((res) => setApiResponse(res));
  };
  const blinkLED = () => {
    fetch('http://localhost:9000/cylonRoute/blinkLED')
      .then((res) => res.text())
      .then((res) => setApiResponse(res));
  };
  const changeBrightness = () => {
    fetch('http://localhost:9000/cylonRoute/changeBrightness')
      .then((res) => res.text())
      .then((res) => setApiResponse(res));
  };
  return (
    <div className='App'>
      <Button variant='primary' onClick={setLEDConfiguration}>
        Configure LED
      </Button>
      <Button variant='success' onClick={startLED}>
        Start the LED
      </Button>
      <Button variant='success' onClick={stopLED}>
        Stop the LED
      </Button>
      <Button variant='danger' onClick={stopInLED}>
        Stop the LED in 3 secs
      </Button>
      <Button variant='danger' onClick={blinkLED}>
        Blink the LED
      </Button>
      <Button variant='danger' onClick={changeBrightness}>
        Change brightness
      </Button>
      <p className='App-intro'>{apiResponse}</p>
    </div>
  );
}

export default App;
