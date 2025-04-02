import React from "react";
import styles from "./Section.module.css";
import { Link } from "react-router-dom";

const Section = () => {

    return (
        <div className={styles.section}>
            <div className={styles.section_title}>Build Your Resume <span style={{color: 'blue'}}>With AI</span></div>
            <div className={styles.section_subtitle}>
                Create a professional resume in minutes with our AI-powered resume builder. 
                <br />
                Get started today and land your dream job!
            </div>
            <div style={{width: '400px', margin: '0 auto', display: 'flex', gap: '20px', position: 'relative', right: '-50px'}}>
                <Link className={styles.section_button} to="/login">Get Started</Link> 
                <Link className={styles.section_button2}>Learn More</Link>
            </div>
        </div>
    );
};


export default Section;