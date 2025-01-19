import React from 'react';
import './Control.css';

function Control({ onStart, onStop }) {
  return (
    <div className="control">
      <button className="start" onClick={onStart}>
        Start
      </button>
      <button className="stop" onClick={onStop}>
        Stop
      </button>
    </div>
  );
}

export default Control;