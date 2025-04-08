import React, { useState,useEffect } from 'react';
import styles from './forms.module.css'; 
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
        // You can handle the data further, like sending it to an API
    };

    useEffect(() => {
        const fetchSuggestion = async () => {
            if (summary.length > 30) {
                try {
                    const response = await api.post('/suggest', { summary });
                    setSuggestion(response.data.suggestion);
                } catch (error) {
                    console.error('Error fetching suggestion:', error);
                }
            } else {
                setSuggestion('Please enter a summary of at least 30 characters for AI suggestions.');
            }
        }
        fetchSuggestion();
    }, [summary]);   

    return (
        <form onSubmit={handleSubmit} className={styles.container}>
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
                <label htmlFor="summary">Professional Summary:</label>
                <textarea
                    id="summary"
                    value={summary}
                    onChange={(e) => setSummary(e.target.value)}
                    required
                />
                
                
                <p>{suggestion}</p>
            
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
            <button type="submit">Prev</button>
            <button type="submit">Next</button>

        </form>
    );
};

export default JobDetails;