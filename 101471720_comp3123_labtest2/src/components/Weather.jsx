import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Weather = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [city, setCity] = useState('Toronto');
    const [error, setError] = useState('');

    const API_KEY = '9f581fc0d0dc3c70f2347c70e1fe4fe7';
    const fetchWeather = async (city) => {
        try {
            const response = await axios.get(
                `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
            );
            setWeatherData(response.data);
            setError('');
        } catch (err) {
            setError('City not found. Please try again.');
        }
    };

    useEffect(() => {
        fetchWeather(city);
    }, [city]);

    return (
        <div>
            <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Enter city"
            />
            <button onClick={() => fetchWeather(city)}>Search</button>
            {error && <p>{error}</p>}
            {weatherData && (
                <div>
                    <h2>{weatherData.name}</h2>
                    <p>{weatherData.weather[0].description}</p>
                    <p>Temperature: {weatherData.main.temp} °C</p>
                    <p>Humidity: {weatherData.main.humidity}%</p>
                </div>
            )}
        </div>
    );
};

export default Weather;
