import React, { useState } from 'react';
import styles from './forms.module.css'; // Assuming you have a CSS module for styling
import { Link } from 'react-router-dom';
const Education = ({ onSave }) => {
    const [educationDetails, setEducationDetails] = useState({
        school: '',
        degree: '',
        fieldOfStudy: '',
        startDate: '',
        endDate: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEducationDetails({ ...educationDetails, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (onSave) {
            onSave(educationDetails);
        }
        setEducationDetails({
            school: '',
            degree: '',
            fieldOfStudy: '',
            startDate: '',
            endDate: '',
        });
    };

    return (
        <form onSubmit={handleSubmit} className={styles.container}>
            <h2 style={{textAlign: 'center'}}>Education Details</h2>
            <div>
                <label>School:</label>
                <input
                    type="text"
                    name="school"
                    value={educationDetails.school}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Degree:</label>
                <input
                    type="text"
                    name="degree"
                    value={educationDetails.degree}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Field of Study:</label>
                <input
                    type="text"
                    name="fieldOfStudy"
                    value={educationDetails.fieldOfStudy}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Start Date:</label>
                <input
                    type="date"
                    name="startDate"
                    value={educationDetails.startDate}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>End Date:</label>
                <input
                    type="date"
                    name="endDate"
                    value={educationDetails.endDate}
                    onChange={handleChange}
                />
            </div>
            <Link to="/experience" style={{textDecoration: 'none'}}>
            <button type="submit">Back to Experience</button>
            </Link>
            <Link to='' style={{textDecoration: 'none'}}>
            <button type="submit">View Your Resume</button>
            </Link>
        </form>
    );
};

export default Education;