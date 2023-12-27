import React from "react";
import styles from "./navbar.module.css";

import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className={styles.navContainer}>
            <Link className={styles.links} to="/">
                Home
            </Link>
            <Link className={styles.links} to="/about">
                About Me
            </Link>
            <Link className={styles.links} to="/appointments">
                Make Appointment
            </Link>
            <Link className={styles.links} to="/reviews">
                Reviews
            </Link>
            <Link className={styles.links} to="/resources">
                Resources
            </Link>
            <Link className={styles.links} to="/contact">
                Contact Me
            </Link>
        </div>
    );
};

export default NavBar;
