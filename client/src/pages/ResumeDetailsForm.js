import React from "react";
import PersonalDetails from "../Components/forms/PersonalDetails";
import JobDetails from "../Components/forms/JobDetails";
import Experience from "../Components/forms/Experience";
import Education from "../Components/forms/Education";
const ResumeDetailsForm = () => {

    return (
        <div className="resume-details-form">
            <h2>Resume Details</h2>
            <PersonalDetails />
            <JobDetails />
            <Experience />
            <Education />
            {/* You can include other components like ExperienceForm, EducationForm, etc. here */}
        </div>
    );
};

export default ResumeDetailsForm;