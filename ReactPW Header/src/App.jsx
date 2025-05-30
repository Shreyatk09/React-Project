import React from 'react';
import './App.css';

function App() {
  const Header = () => {
    return (
      <header className="header">
        <div className="left">📺 YouTube</div>

        <div className="center">
          <input
            type="text"
            placeholder="Search"
            className="search-input"
          />
          <button className="search-button">🔍</button>
        </div>

        <div className="right">
          <span className="icon">📹</span>
          <span className="icon">🔔</span>
          <span className="icon">👤</span>
        </div>
      </header>
    );
  };

  return (
    <div>
      <Header />
    </div>
  );
}

export default App;