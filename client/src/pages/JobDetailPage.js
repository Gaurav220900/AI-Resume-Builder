import React from "react";
import JobDetails from "../Components/forms/Tab2Form";
const JobDetailPage = () => {

    return (
        <div className="resume-details-form">
            <JobDetails />
            {/* You can include other components like ExperienceForm, EducationForm, etc. here */}
        </div>
    );
};

export default JobDetailPage;