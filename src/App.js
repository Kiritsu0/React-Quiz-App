import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Questions from './Questions';
import Test from './Test'
import Result from './Result'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Questions />} />
        <Route path="Test" element={<Test />} />
        <Route path="Result" element={<Result />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
