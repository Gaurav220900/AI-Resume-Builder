import React from 'react';
import styles from './forms.module.css';

const JobDetails = ({ formData, setFormData, setActiveTab }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'skills' ? value.split(',').map(skill => skill.trim()) : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Job Details Submitted:', formData);
    setActiveTab('experience'); // Go to Experience tab
  };

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <h2 style={{ textAlign: 'center' }}>Job Details</h2>

      <div>
        <label htmlFor="jobTitle">Job Title:</label>
        <input
          type="text"
          name="jobTitle"
          id="jobTitle"
          value={formData.jobTitle}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="skills">Skills (comma-separated):</label>
        <input
          type="text"
          name="skills"
          id="skills"
          value={formData.skills.join(', ')}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="summary">Professional Summary:</label>
        <textarea
          name="summary"
          id="summary"
          value={formData.summary}
          placeholder="Write a brief summary of your professional background and goals."
          onChange={handleChange}
          rows="6"
          required
        />
      </div>

      <div style={{ float: 'right', display: 'flex', gap: '20px' }}>
        <button
          type="button"
          onClick={() => setActiveTab('personal')}
          style={{ backgroundColor: 'white', color: 'black' }}
        >
          Back to Personal Details
        </button>
        <button type="submit">Go to Experience</button>
      </div>
    </form>
  );
};

export default JobDetails;
