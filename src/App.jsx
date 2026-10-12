import React, { useState } from 'react';
import './App.css';

function App() {
  const [accepted, setAccepted] = useState(false);
  const [noCount, setNoCount] = useState(0);
  const [noButtonStyle, setNoButtonStyle] = useState({});

  // Hayır butonuna tıklandığında veya üstüne gelindiğinde butonu rastgele hareket ettir / "dondur"
  const handleNoHover = () => {
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 200 - 100;
    setNoButtonStyle({
      transform: `translate(${x}px, ${y}px) rotate(${noCount * 45}deg)`,
      transition: 'all 0.2s ease',
    });
    setNoCount(prev => prev + 1);
  };

  const handleYesClick = () => {
    setAccepted(true);
  };

  return (
    <div className="container">
      <div className="card">
        {!accepted ? (
          <>
          
            <h1 className="title">Yaren, isteğimi artık kabul eder misin?</h1>
            <div className="btn-group">
              <button className="yes-btn" onClick={handleYesClick}>
                Evet
              </button>
              <button
                className="no-btn"
                style={noButtonStyle}
                onMouseEnter={handleNoHover}
                onClick={handleNoHover}
              >
                {noCount > 3 ? " 🥶:)" : "Hayır"}
              </button>
            </div>
          </>
        ) : (
          <div className="success-container">
            <div className="success-icon">🎉</div>
            <h1 className="title">Teşekkürler! ✨</h1>
           
          </div>
        )}
      </div>
    </div>
  );
}

export default App;