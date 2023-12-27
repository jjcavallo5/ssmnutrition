import React from "react";
import styles from './appointments.module.css'

import NavBar from "../../components/navbar/navbar";

const AppointmentsPage = () => {
    return (
        <div className={styles.container}>
            <NavBar />
            <h1>Appointments</h1>
        </div>
    )
}

export default AppointmentsPage;