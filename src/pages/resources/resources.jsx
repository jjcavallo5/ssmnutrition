import React from "react";
import styles from './resources.module.css'

import NavBar from "../../components/navbar/navbar";

const ResourcesPage = () => {
    return (
        <div className={styles.container}>
            <NavBar />
            <h1>Resources</h1>
        </div>
    )
}

export default ResourcesPage;