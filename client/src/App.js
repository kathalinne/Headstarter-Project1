import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:5000/check_code', { code: inputValue });
      setMessage(response.data.message);
    } catch (error) {
      setMessage('There was an error processing your request.');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter the code"
          />
          <button type="submit">Submit</button>
        </form>
        {message && <p>{message}</p>}
      </header>
    </div>
  );
}

export default App;
