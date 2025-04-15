import React, { useState } from "react";
import styles from "./forms.module.css"; // Assuming you have a CSS module for styling
import { Link } from "react-router-dom";
const ExperienceForm = () => {
    const [experiences, setExperiences] = useState([
        { company: "", startDate: "", endDate: "", description: [""] },
    ]);

    const handleInputChange = (index, field, value) => {
        const updatedExperiences = [...experiences];
        if (field === "description") {
            updatedExperiences[index][field] = value.split("\n");
        } else {
            updatedExperiences[index][field] = value;
        }
        setExperiences(updatedExperiences);
    };

    const addExperience = () => {
        if (experiences.length < 3) {
            setExperiences([
                ...experiences,
                { company: "", startDate: "", endDate: "", description: [""] },
            ]);
        }
    };

    const removeExperience = (index) => {
        const updatedExperiences = experiences.filter((_, i) => i !== index);
        setExperiences(updatedExperiences);
    };

    return (
        <div className={styles.container}>
            <h2 style={{textAlign: 'center'}}>Experience</h2>
            {experiences.map((experience, index) => (
                <div key={index} style={{ marginBottom: "20px" }}>
                    <label>
                        Company Name:
                        <input
                            type="text"
                            value={experience.company}
                            onChange={(e) =>
                                handleInputChange(index, "company", e.target.value)
                            }
                        />
                    </label>
                    <br />
                    <label>
                        Start Date (Month/Year):
                        <input
                            type="month"
                            value={experience.startDate}
                            onChange={(e) =>
                                handleInputChange(index, "startDate", e.target.value)
                            }
                        />
                    </label>
                    <br />
                    <label>
                        End Date (Month/Year):
                        <input
                            type="month"
                            value={experience.endDate}
                            onChange={(e) =>
                                handleInputChange(index, "endDate", e.target.value)
                            }
                        />
                    </label>
                    <br />
                    <label>
                        Description:
                        <textarea
                            value={experience.description.join("\n")}
                            onChange={(e) =>
                                handleInputChange(index, "description", e.target.value)
                            }
                            rows='10'
                        />
                    </label>
                    <br />
                    {experiences.length > 1 && (
                        <button onClick={() => removeExperience(index)}>Remove</button>
                    )}
                </div>
            ))}
            {experiences.length < 3 && (
                <button onClick={addExperience}>Add Experience</button>
            )}
            <div style={{float: 'right'}}>
                <Link to='/jobdetails' style={{textDecoration: 'none', color: 'black'}}>
                <button type="submit">Back to Job details page</button>
                </Link>
                <Link to='/education' style={{textDecoration: 'none', color: 'black'}}>
                <button type="submit">Go to education detail page</button>
                </Link>
                
            </div>
        </div>
    );
};

export default ExperienceForm;