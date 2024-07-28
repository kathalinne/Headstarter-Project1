import React, { useState, useEffect } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWind, faThermometerHalf, faTint, faSmog } from '@fortawesome/free-solid-svg-icons';

function App() {
    const [location, setLocation] = useState('');
    const [data, setData] = useState(null);
    const [error, setError] = useState(localStorage.getItem('error') || '');
    const [loading, setLoading] = useState(false);
    const [invalidCount, setInvalidCount] = useState(parseInt(localStorage.getItem('invalidCount'), 10) || 0);

    useEffect(() => {
        localStorage.setItem('error', error);
        localStorage.setItem('invalidCount', invalidCount);
    }, [error, invalidCount]);


    const fetchAQI = async (e) => {
        e.preventDefault();
        const [city, state] = location.split(',').map(part => part.trim());

        if (!city || !state) {
            setError('Please enter a valid city and state.');
            handleInvalidEntry();
            return;
        }

        setLoading(true);
        try {
            const response = await fetch(`/query_city?city=${city}&state=${state}&country=USA`);
            const result = await response.json();

            if (response.ok) {
                setData(result);
                setError('');
                setInvalidCount(0);
            } else {
                setData(null);
                setError(result.error || 'Failed to fetch data');
                handleInvalidEntry();
            }
        } catch (err) {
            setError('Failed to fetch data');
            handleInvalidEntry();
        } finally {
            setLoading(false);
        }
    };

    const handleInvalidEntry = () => {
        setInvalidCount(prevCount => {
            const newCount = prevCount + 1;
            if (newCount >= 1) {
                window.location.reload();
            } else {
                setTimeout(() => {
                    setError('');
                }, 5000); // Clear error message after 5 seconds
            }
            return newCount;
        });
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
                    
                    {loading && <p> </p>}
                    {data && !loading && (
                        <div id="id" className="info">
                            <h5><FontAwesomeIcon icon={faSmog} /> AQI: {data.aqi}</h5>
                            <p><FontAwesomeIcon icon={faThermometerHalf} /> Temperature: {data.temp}°C</p>
                            <p><FontAwesomeIcon icon={faTint} /> Humidity: {data.humidity}%</p> 
                            <p><FontAwesomeIcon icon={faWind} /> Wind Speed: {data.windspeed} m/s</p>
                            <p>
                                {data.aqi <= 50 ? (
                                    <span style={{ color: 'green' }}>Good Air Quality</span>
                                ) : data.aqi <= 100 ? (
                                    <mark>
                                    <span style={{ color: 'dark-yellow' }}>Moderate Air Quality</span>
                                    </mark>
                                ) : data.aqi <= 150 ? (
                                    <span style={{ color: 'orange' }}>Unhealthy for Sensitive Groups</span>
                                ) : data.aqi <= 200 ? (
                                    <span style={{ color: 'red' }}>Unhealthy</span>
                                ) : data.aqi <= 300 ? (
                                    <span style={{ color: 'purple' }}>Very Unhealthy</span>
                                ) : (
                                    <span style={{ color: 'maroon' }}>Hazardous</span>
                                )}
                            </p>
                        </div>
                    )}

                    {error && !loading && <p className="error">{error}</p>}
                </div>
            </header>
        </div>
    );
}

export default App;
