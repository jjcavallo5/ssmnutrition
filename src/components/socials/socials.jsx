import React from "react";
import styles from "./socials.module.css";

import { Link } from "react-router-dom";
import InstagramIcon from "../../icons/instagram";
import TwitterIcon from "../../icons/twitter";
import PhoneIcon from "../../icons/phone";
import EmailIcon from "../../icons/email";

const SocialsLinks = () => {
    return (
        <div className={styles.navContainer}>
            <InstagramIcon size={32} />
            <TwitterIcon size={32} />
            <PhoneIcon size={32} />
            <EmailIcon size={32} />
        </div>
    );
};

export default SocialsLinks;
