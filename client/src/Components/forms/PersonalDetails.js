import React, { useState } from 'react';
import styles from './forms.module.css';
import {Link} from 'react-router-dom'; // Assuming you have a CSS module for styling
const PersonalDetails = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        contact: '',
        location: '',
        website: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data Submitted:', formData);
    };

    return (
        <form onSubmit={handleSubmit} className={styles.container}>
            <h2 style={{textAlign: 'center'}}>Personal Details</h2>
            <div >
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
                    type="tel"
                    name="Location"
                    value={formData.contact}
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
            <Link to="/jobdetails" style={{textDecoration: 'none'}}>
            <button style={{float: 'right'}} type="submit">Go to Job details page</button>
            </Link>
        </form>
    );
};

export default PersonalDetails;