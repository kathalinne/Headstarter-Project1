import React, { useState } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWind, faThermometerHalf, faTint, faSmog } from '@fortawesome/free-solid-svg-icons';

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
                <div className="container">
                    <form onSubmit={fetchAQI}>
                        <input
                            type="text"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            placeholder="City, State"
                        />
                        <button type="submit" className="submitButton">Get AQI</button>
                    </form>

                    {data && (
                        <div className="info">
                            <h5><FontAwesomeIcon icon={faSmog} /> AQI: {data.aqi}</h5>
                            <p><FontAwesomeIcon icon={faThermometerHalf} /> Temperature: {data.temp}°C</p>
                            <p><FontAwesomeIcon icon={faTint} /> Humidity: {data.humidity}%</p>
                            <p><FontAwesomeIcon icon={faWind} /> Wind Speed: {data.windspeed} m/s</p>
                        </div>
                    )}

                    {error && <p className="error">{error}</p>}
                </div>
            </header>
        </div>
    );
}

export default App;
