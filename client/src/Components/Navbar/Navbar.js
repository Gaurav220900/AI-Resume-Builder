import React from "react";
import {Link} from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {

    return (
        <div className={styles.navbar}>
            <div style={{fontSize: '40px'}}><span style={{color:'Red'}}>AI</span>Resume</div>
            <div className={styles.links}>
                <Link className={styles.nav_button2}>Log In</Link>
                <Link className={styles.nav_button}>Get Started</Link>
            </div>
        </div>
    );
};

export default Navbar;