import React from "react";
import styles from "./headerStyles.module.css";
import NavBar from "../navbar/navbar";
import Logo from "../../icons/ssmn_logo";

const Header = (props) => {
    return (
        <div className={styles.container}>
            <Logo size={156} />
            <NavBar />
        </div>
    );
};

export default Header;
