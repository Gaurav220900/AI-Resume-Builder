import React from "react";
import Tab1Form from "./Tab1Form";
import Tab2Form from "./Tab2Form";
import Tab3Form from "./Tab3Form";
import Tab4Form from "./Tab4Form";

const TabbedForm = () => {
  const [activeTab, setActiveTab] = React.useState("personal");

  const [formData, setFormData] = React.useState({
    fullName: '',
    email: '',
    contact: '',
    location: '',
    website: '',
    jobTitle: '',
    summary: '',
    skills: [],
    experience: [
      {
        company: '',
        startDate: '',
        endDate: '',
        description: [''],
      },
    ],
    school: '',
    degree: '',
    fieldOfStudy: '',
    startDateEdu: '',
    endDateEdu: '',
  });

  const tabs = [
    { id: "personal", label: "Personal Details" },
    { id: "job", label: "Job Details" },
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
  ];

  const renderComponent = () => {
    const props = { formData, setFormData, setActiveTab };

    switch (activeTab) {
      case "personal":
        return <Tab1Form {...props} switchTab={() => setActiveTab("job")} />;
      case "job":
        return (
          <Tab2Form
            {...props}
            switchTab={(tab) => setActiveTab(tab)}
          />
        );
      case "experience":
        return (
          <Tab3Form
            {...props}
            switchTab={(tab) => setActiveTab(tab)}
          />
        );
      case "education":
        return <Tab4Form {...props} />;
      default:
        return null;
    }
  };

  return (
    <div className="resume-tabs-container">
      <div className="tabs-header">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`tab-button ${activeTab === tab.id ? "active" : ""}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="tab-content">{renderComponent()}</div>
    </div>
  );
};

export default TabbedForm;
