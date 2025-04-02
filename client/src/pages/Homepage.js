import React from "react";
import styles from "./CSS/styles.module.css";
import Navbar from "../Components/Navbar/Navbar";
import Section from "../Components/Section/Section";
const Homepage = () => {
  return (
    <div className={styles.body}>
      <Navbar />
      <Section />
    </div>
  );
}

export default Homepage;