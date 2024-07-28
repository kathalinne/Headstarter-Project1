import React, { useState } from 'react';
import './App.css';

function App() {
    const [location, setLocation] = useState('');
    const [data, setData] = useState(null);
    const [error, setError] = useState('');

    const fetchAQI = async (e) => {
        e.preventDefault();
        const [city, state] = location.split(',').map(part => part.trim());

        if (!city || !state) {
            setError('Please enter a valid city and state.');
            return;
        }

        try {
            const response = await fetch(`/query_city?city=${city}&state=${state}&country=USA`);
            const result = await response.json();

            if (response.ok) {
                setData(result);
                setError('');
            } else {
                setData(null);
                setError(result.error || 'Failed to fetch data');
            }
        } catch (err) {
            setError('Failed to fetch data');
        }
    };

    return (
        <div className='App'>
            <header className="App-header">
                <form onSubmit={fetchAQI}>
                    <input
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="Enter city, state (e.g., Salem, Oregon)"
                    />
                    <button type="submit">Get AQI</button>
                </form>

                {data && (
                    <div>
                        <p>AQI: {data.aqi}</p>
                        <p>Temperature: {data.temp}°C</p>
                        <p>Humidity: {data.humidity}%</p>
                        <p>Wind Speed: {data.windspeed} m/s</p>
                    </div>
                )}
            </header>
        </div>
    );
}

export default App;
