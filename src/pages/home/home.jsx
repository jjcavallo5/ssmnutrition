import React from "react";
import styles from './home.module.css'

import NavBar from "../../components/navbar/navbar";

const HomePage = () => {
    return (
        <div className={styles.container}>
            <NavBar />
            <h1>Home</h1>
            
        </div>
    )
}

export default HomePage;