import React from 'react';
import Homepage from './pages/Homepage';
import Templates from  './pages/Templates';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ResumeDetailsForm from './pages/ResumeDetailsForm';
import './App.css';

function App() {
  return (
    <div className="App">
      
        <Routes>
          <Route>
          <Route path="/" element={<Homepage />} />
          <Route path="/templates" element={<Templates />} />
          <Route path="/resume-details" element={<ResumeDetailsForm />} />
          </Route>
        </Routes>
        
    </div>
  );
}

export default App;
