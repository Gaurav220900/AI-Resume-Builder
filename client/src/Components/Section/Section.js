import React from "react";
import styles from "./Section.module.css";
import { Link } from "react-router-dom";
import { MdOutlineViewList } from "react-icons/md";
import { IoBulbOutline } from "react-icons/io5";
import { AiOutlineDownload } from "react-icons/ai";
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
            <div style={{textAlign: 'center', marginTop: '70px'}}> 
                <h1>Get Your Resume Build In 3 Steps</h1>
            </div>
            <div className={styles.card_container}>
                   <div className={styles.card}>
                        <Link to='/templates' style={{textDecoration: 'none', color: 'black'}}>
                        <div><MdOutlineViewList className={styles.card_icon} style={{fontSize: '25px', color: 'Black'}}/></div>
                        <h3 style={{margin: '0px'}}>Choose a template</h3>
                        <p>Select a resume template that showcases your skills and experience effectively. Whether modern, professional, or creative, the right design helps you stand out. Customize fonts, colors, and layouts to match your style and industry needs.</p>
                        </Link>
                    </div> 
                   <div className={styles.card}>
                   <IoBulbOutline  className={styles.card_icon} style={{fontSize: '25px', color: 'Black'}}/>
                    <h3 style={{margin: '0px'}}>AI-Powered Content</h3>
                    <p>Use our AI-powered resume builder to craft compelling content. Enter your work history, skills, and achievements, and let AI suggest powerful phrases and keywords. Save time while optimizing your resume for applicant tracking systems (ATS).</p>
                    </div>
                        
                   <div className={styles.card}>
                   <div><AiOutlineDownload className={styles.card_icon} style={{fontSize: '25px', color: 'Black'}}/></div>
                    <h3 style={{margin: '0px'}}>Download & Share</h3>
                    <p>Save your resume securely and generate a shareable link. Update it anytime, share with employers, or download in your preferred format. Keep it current with your latest skills and experience, accessible from any device for quick edits.</p>
                  </div>          
           </div>
        </div>
    );
};


export default Section;