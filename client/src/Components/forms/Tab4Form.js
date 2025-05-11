import React from 'react';
import styles from './forms.module.css';

const Education = ({ formData, setFormData, setActiveTab }) => {

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleNext = (e) => {
    e.preventDefault();
   // setActiveTab(5); // Move to Resume Preview (or whatever tab 5 is)
   console.log('full form data:', formData);
   
  };

  const handleBack = (e) => {
    e.preventDefault();
    setActiveTab(3); // Go back to Experience tab
  };

  return (
    <form onSubmit={handleNext} className={styles.container}>
      <h2 style={{ textAlign: 'center' }}>Education Details</h2>

      <div>
        <label>School:</label>
        <input
          type="text"
          name="school"
          value={formData.school}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Degree:</label>
        <input
          type="text"
          name="degree"
          value={formData.degree}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Field of Study:</label>
        <input
          type="text"
          name="fieldOfStudy"
          value={formData.fieldOfStudy}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Start Date:</label>
        <input
          type="month"
          name="startDateEdu"
          value={formData.startDateEdu}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>End Date:</label>
        <input
          type="month"
          name="endDateEdu"
          value={formData.endDateEdu}
          onChange={handleChange}
        />
      </div>

      <div style={{ float: 'right', display: 'flex', gap: '20px' }}>
        <button type="button" onClick={handleBack} style={{ backgroundColor: 'white', color: 'black' }}>
          Back to Experience
        </button>
        <button type="submit">View Your Resume</button>
      </div>
    </form>
  );
};

export default Education;
