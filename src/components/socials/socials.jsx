import React from "react";
import styles from "./socials.module.css";

import InstagramIcon from "../../icons/instagram";
import TwitterIcon from "../../icons/twitter";
import PhoneIcon from "../../icons/phone";
import EmailIcon from "../../icons/email";

const SocialsLinks = (props) => {
    return (
        <div className={styles.navContainer} style={{ ...props.style }}>
            <h2>Join my community!</h2>
            <div className={styles.iconsContainer}>
                <InstagramIcon size={32} />
                <TwitterIcon size={32} />
                <PhoneIcon size={32} />
                <EmailIcon size={32} />
            </div>
        </div>
    );
};

export default SocialsLinks;
