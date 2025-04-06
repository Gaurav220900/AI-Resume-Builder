import react from 'react';
import styles from './templatecss.module.css';
const Template1 = () => {
    /* General container styling */
    return (
        <div className={styles.container} style={{ fontFamily: 'Arial, sans-serif', padding: '20px', lineHeight: '1.6' }}>
            <header style={{ textAlign: 'center', marginBottom: '20px', color: 'black' }}>
                <h1 style={{ margin: '0', fontSize: '2em', color: 'black' }}>John Doe</h1>
                <p style={{ margin: '5px 0', fontSize: '1.2em', color: 'black' }}>Software Engineer</p>
                <p style={{ margin: '5px 0', color: 'gray' }}>johndoe@example.com | (123) 456-7890 | www.johndoe.com</p>
            </header>
            <section>
                <h2 style={{ borderBottom: '2px solid #000', paddingBottom: '5px' }}>Summary</h2>
                <p>
                    Experienced software engineer with a strong background in developing scalable web applications and
                    a passion for solving complex problems.
                </p>
            </section>
            <section>
                <h2 style={{ borderBottom: '2px solid #000', paddingBottom: '5px' }}>Experience</h2>
                <div>
                    <h3 style={{ margin: '10px 0 5px' }}>Software Engineer</h3>
                    <p style={{ margin: '0', color: 'gray' }}>Tech Company | Jan 2020 - Present</p>
                    <ul>
                        <li>Developed and maintained web applications using React and Node.js.</li>
                        <li>Collaborated with cross-functional teams to design and implement new features.</li>
                        <li>Optimized application performance, reducing load times by 30%.</li>
                    </ul>
                </div>
                <div>
                    <h3 style={{ margin: '10px 0 5px' }}>Junior Developer</h3>
                    <p style={{ margin: '0', color: 'gray' }}>Startup Inc. | Jun 2018 - Dec 2019</p>
                    <ul>
                        <li>Assisted in the development of e-commerce platforms using JavaScript and PHP.</li>
                        <li>Wrote unit tests to ensure code quality and reliability.</li>
                        <li>Participated in code reviews and team meetings.</li>
                    </ul>
                </div>
            </section>
            <section>
                <h2 style={{ borderBottom: '2px solid #000', paddingBottom: '5px' }}>Education</h2>
                <div>
                    <h3 style={{ margin: '10px 0 5px' }}>Bachelor of Science in Computer Science</h3>
                    <p style={{ margin: '0', color: 'gray' }}>University of Example | Graduated May 2018</p>
                </div>
            </section>
            <section>
                <h2 style={{ borderBottom: '2px solid #000', paddingBottom: '5px' }}>Skills</h2>
                <ul>
                    <li>JavaScript, React, Node.js</li>
                    <li>HTML, CSS, SASS</li>
                    <li>Git, Webpack, REST APIs</li>
                </ul>
            </section>
        </div>
    );
}

export default Template1;