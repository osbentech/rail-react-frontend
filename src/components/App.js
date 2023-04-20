import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Greetings from './Greetings';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Greetings />} />
    </Routes>
  );
}

export default App;
