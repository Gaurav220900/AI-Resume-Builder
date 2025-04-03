import React from "react";
import styles from "./CSS/styles.module.css";
import Navbar from "../Components/Navbar/Navbar";
import Section from "../Components/Section/Section";
import Footer from "../Components/Footer/Footer";
const Homepage = () => {
  return (
    <div className={styles.body}>
      <Navbar />
      <Section />
      <Footer />
    </div>
  );
}

export default Homepage;