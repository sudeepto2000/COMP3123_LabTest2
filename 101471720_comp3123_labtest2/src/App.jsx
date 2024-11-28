import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Weather from './components/Weather.jsx';
import './App.css'


function App() {
  return (
      <div className="App">
          <h1>Weather App</h1>
          <Weather />
      </div>
  );
}


export default App
