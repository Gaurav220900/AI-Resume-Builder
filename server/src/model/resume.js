const mongoose = require('mongoose');

const resumeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    phone: {
        type: String,
        required: true,
        trim: true,
    },
    summary: {
        type: String,
        trim: true,
    },
    education: [
        {
            institution: String,
            degree: String,
            fieldOfStudy: String,
            startDate: Date,
            endDate: Date,
        },
    ],
    experience: [
        {
            company: String,
            position: String,
            startDate: Date,
            endDate: Date,
            description: String,
        },
    ],
    skills: [String],
    projects: [
        {
            title: String,
            description: String,
            link: String,
        },
    ],
    certifications: [
        {
            name: String,
            issuingOrganization: String,
            issueDate: Date,
        },
    ],
}, { timestamps: true });

const Resume = mongoose.model('Resume', resumeSchema);

module.exports = Resume;