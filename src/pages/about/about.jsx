import React from "react";
import styles from './about.module.css'

import NavBar from "../../components/navbar/navbar";

const AboutPage = () => {
    return (
        <div className={styles.container}>
            <NavBar />
            <h1>About</h1>
        </div>
    )
}

export default AboutPage;