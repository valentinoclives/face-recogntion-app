src/Camera.js
import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam';
import axios from 'axios';

function Camera() {

  const webcamRef = useRef(null);

  const [result, setResult] = useState('');

  const captureAndRecognize = async () => {

    const imageSrc = webcamRef.current.getScreenshot();

    try {

      const response = await axios.post(
        'http://127.0.0.1:5000/recognize',
        {
          image: imageSrc
        }
      );

      const faces = response.data.recognized_faces;

      if (faces.length > 0) {
        setResult(`Recognized: ${faces.join(', ')}`);
      } else {
        setResult('No faces recognized');
      }

    } catch (error) {
      console.error(error);
      setResult('Recognition failed');
    }
  };

  return (
    <div>

      <Webcam
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={500}
      />

      <br /><br />

      <button
        onClick={captureAndRecognize}
        style={{
          padding: '12px 20px',
          fontSize: '16px',
          cursor: 'pointer'
        }}
      >
        Recognize Face
      </button>
export default Camera;
