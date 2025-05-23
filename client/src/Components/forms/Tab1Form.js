import React from 'react';
import styles from './forms.module.css';

const PersonalDetails = ({ formData, setFormData, setActiveTab }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

 
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Personal Details Submitted:', formData);
    setActiveTab("job"); // Automatically go to Job Details tab
  };

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <h2 style={{ textAlign: 'center' }}>Personal Details</h2>

      <div>
        <label>Full Name:</label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Contact:</label>
        <input
          type="tel"
          name="contact"
          value={formData.contact}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Location:</label>
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Website:</label>
        <input
          type="url"
          name="website"
          value={formData.website}
          onChange={handleChange}
        />
      </div>

      <button type="submit" style={{ float: 'right' }}>
        Next
      </button>
    </form>
  );
};

export default PersonalDetails;
