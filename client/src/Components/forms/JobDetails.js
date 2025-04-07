import React, { useState } from 'react';
import styles from './forms.module.css'; // Assuming you have a CSS module for styling
const JobDetails = () => {
    const [jobTitle, setJobTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [skills, setSkills] = useState('');

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
                <label htmlFor="summary">Summary:</label>
                <textarea
                    id="summary"
                    value={summary}
                    onChange={(e) => setSummary(e.target.value)}
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
            <button type="submit">Save Job Details</button>
        </form>
    );
};

export default JobDetails;