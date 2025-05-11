import React from "react";
import styles from "./forms.module.css";

const Tab3Form = ({ formData, setFormData, switchTab }) => {
  const experiences = formData.experience;

  const handleInputChange = (index, field, value) => {
    const updatedExperiences = [...experiences];

    if (field === "description") {
      updatedExperiences[index][field] = value.split("\n");
    } else {
      updatedExperiences[index][field] = value;
    }

    setFormData({ ...formData, experience: updatedExperiences });
  };

  const addExperience = () => {
    if (experiences.length < 3) {
      setFormData({
        ...formData,
        experience: [
          ...experiences,
          { company: "", startDate: "", endDate: "", description: [""] },
        ],
      });
    }
  };

  const removeExperience = (index) => {
    const updatedExperiences = experiences.filter((_, i) => i !== index);
    setFormData({ ...formData, experience: updatedExperiences });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    switchTab("education");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <h2 style={{ textAlign: "center" }}>Experience</h2>

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
              required
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
              required
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
              required
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
              rows="10"
              required
            />
          </label>
          <br />
          {experiences.length > 1 && (
            <button type="button" onClick={() => removeExperience(index)}>
              Remove
            </button>
          )}
        </div>
      ))}

      {experiences.length < 3 && (
        <button
          type="button"
          onClick={addExperience}
          style={{ backgroundColor: "darkgreen", color: "white" }}
        >
          Add Experience
        </button>
      )}

      <div style={{ float: "right", display: "flex", gap: "20px" }}>
        <button
          type="button"
          onClick={() => switchTab("job")}
          style={{ backgroundColor: "white", color: "black" }}
        >
          Back to Job Details
        </button>
        <button type="submit">Go to Education</button>
      </div>
    </form>
  );
};

export default Tab3Form;
