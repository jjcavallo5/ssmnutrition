import React from "react";
import styles from "./about.module.css";

import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

const AboutPage = () => {
    return (
        <div className={styles.container}>
            <Header />
            <h1>About</h1>
            <Footer />
        </div>
    );
};

export default AboutPage;
