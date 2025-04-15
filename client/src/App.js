import React from 'react';
import Homepage from './pages/Homepage';
import Templates from  './pages/Templates';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PersonalDetailPage from './pages/PersonalDetailPage';
import JobDetailPage from './pages/JobDetailPage';
import ExperienceDetailPage from './pages/ExperienceDetailPage';
import EducationDetailPage from './pages/EducationDetailPage';
import './App.css';

function App() {
  return (
    <div className="App">
      
        <Routes>
          <Route>
          <Route path="/" element={<Homepage />} />
          <Route path="/templates" element={<Templates />} />
          <Route path="/personal-details" element={<PersonalDetailPage />} />
          <Route path="/jobdetails" element={<JobDetailPage />} />
          <Route path="/experience" element={<ExperienceDetailPage />} />
          <Route path='/education' element={<EducationDetailPage />} />
          </Route>
        </Routes>
        
    </div>
  );
}

export default App;
