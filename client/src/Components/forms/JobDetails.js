import React, { useState,useEffect } from 'react';
import styles from './forms.module.css'; 
import {Link} from 'react-router-dom'; 
import api from '../../api'; 
const JobDetails = () => {
    const [jobTitle, setJobTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [skills, setSkills] = useState('');
    const [suggestion, setSuggestion] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        const jobData = {
            jobTitle,
            summary,
            skills: skills.split(',').map(skill => skill.trim()),
        };
        console.log('Job Details:', jobData);
        
    };

    function handleKeyPress(event) {
        if (event.key === 'Enter') {
            event.preventDefault(); // Prevent form submission on Enter key
            generateSuggestion(summary);
        }
    }

    const generateSuggestion = async (text) => {
        try {
            console.log('in function generate suggestion');
            
            const response = await api.post('/suggest', { text });
            setSuggestion(response.data.suggestion);
        } catch (error) {
            console.error('Error generating suggestion:', error);
        }
    }

    return (
        <form onSubmit={handleSubmit} className={styles.container}>
             <h2 style={{textAlign: 'center'}}>Personal Details</h2>
            <div>
                <label htmlFor="jobTitle">Job Title:</label>
                <input
                    type="text"
                    id="jobTitle"
                    value={jobTitle}
                    onChange={(e) => setJobTitle(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="skills">Skills (comma-separated):</label>
                <input
                    type="text"
                    id="skills"
                    value={skills}
                    onChange={(e) => setSkills(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="summary">Professional Summary:</label>
                <textarea
                    id="summary"
                    value={summary}
                    placeholder='Write a brief summary of your professional background and career goals.'
                    rows="10"
                    onChange={(e) => setSummary(e.target.value)}
                    onKeyDown={handleKeyPress}
                    required
                />
                
                
                <p>{suggestion}</p>
            
            </div>
            <Link to='/personal-details' style={{textDecoration: 'none', color: 'black'}}>
            <button type="submit">Back to personal detail page</button>
            </Link>
            <Link to='/experience' style={{textDecoration: 'none', color: 'black'}}>
            <button type="submit">Go to experience page</button>
            </Link>

        </form>
    );
};

export default JobDetails;