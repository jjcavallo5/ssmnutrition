import React from "react";
import styles from "./footerStyles.module.css";

import NavBar from "../navbar/navbar";
import SocialsLinks from "../socials/socials";
import Logo from "../../icons/ssmn_logo";

const Footer = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.bottomHalf}>
                <Logo size={156} />
                <NavBar />
                <div className={styles.socialsWrapper}>
                    <SocialsLinks />
                </div>
            </div>
        </div>
    );
};

export default Footer;
