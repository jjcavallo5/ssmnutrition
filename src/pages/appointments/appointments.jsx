import React from "react";
import styles from "./appointments.module.css";

import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

const AppointmentsPage = () => {
    return (
        <div className={styles.container}>
            <Header />
            <h1>Appointments</h1>
            <Footer />
        </div>
    );
};

export default AppointmentsPage;
