import React from "react";
import PersonalDetails from "../Components/forms/PersonalDetails";
const PersonalDetailPage = () => {

    return (
        <div className="resume-details-form">
            <PersonalDetails />
            {/* You can include other components like ExperienceForm, EducationForm, etc. here */}
        </div>
    );
};

export default PersonalDetailPage;