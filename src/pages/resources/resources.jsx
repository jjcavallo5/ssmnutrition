import React from "react";
import styles from "./resources.module.css";

import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

const ResourcesPage = () => {
    return (
        <div className={styles.container}>
            <Header />
            <h1>Resources</h1>
            <Footer />
        </div>
    );
};

export default ResourcesPage;
