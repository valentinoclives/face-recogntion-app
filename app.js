src/app.js
import React from 'react';
import Camera from './Camera';

function App() {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Face Recognition System</h1>
      <Camera />
    </div>
  );
}

export default App;
