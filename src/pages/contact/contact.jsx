import React from "react";
import styles from './contact.module.css'

import NavBar from "../../components/navbar/navbar";

const ContactPage = () => {
    return (
        <div className={styles.container}>
            <NavBar />
            <h1>Contact</h1>
        </div>
    )
}

export default ContactPage;