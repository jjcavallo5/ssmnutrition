import React from "react";
import styles from "./footerStyles.module.css";

import logo from "../../images/SAMPLE_logo.jpeg";
import NavBar from "../navbar/navbar";
import SocialsLinks from "../socials/socials";

const Footer = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.topHalf}>
                <img src={logo} alt="" srcset="" height={128} width={128} />
                <div className={styles.name}>
                    <h1>Saladowala</h1>
                    <h2>Sixth Man Nutrition</h2>
                </div>
            </div>
            <div className={styles.bottomHalf}>
                <NavBar />
                <div className={styles.socialsWrapper}>
                    <SocialsLinks />
                </div>
            </div>
        </div>
    );
};

export default Footer;
