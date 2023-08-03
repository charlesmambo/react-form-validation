// JumpingBalls.js
import React from 'react';
import './App.css';

const JumpingBalls = () => {
  const ballCount = 10; // Number of balls you want to display

  return (
    <div className="container">
      {[...Array(ballCount)].map((_, index) => (
        <div key={index} className="ball" style={{ '--index': index }}></div>
      ))}
    </div>
  );
};

export default JumpingBalls;
