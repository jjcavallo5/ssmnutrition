import React from "react";
import styles from "./resources.module.css";

import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import ArrowIcon from "../../icons/arrowIcon";

import oneOnOne from "../../images/1on1coaching.jpg";
import groupCoaching from "../../images/groupCoaching.jpg";
import planning from "../../images/planning.jpg";
import hikingZahid from "../../images/hikingZahid.jpg";

const ResourcesPage = () => {
    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.header}>
                <img src={hikingZahid} alt="Healthy Food" srcset="" />
                <div className={styles.headerTextCover}>
                    <h1>Resources</h1>
                    <h2>
                        Information that is important to success in nutrition
                    </h2>
                </div>
            </div>

            <h1 className={styles.coachingOptionsHeader}>online resources</h1>
            <h2 className={styles.coachingOptionsHeader2}>
                Learn more about the basics of nutrition
            </h2>

            <div className={styles.cardContainer}>
                <div className={styles.card}>
                    <h2>Resource 1</h2>
                    <img
                        src={oneOnOne}
                        alt=""
                        srcset=""
                        className={styles.cardImage}
                    />
                    <p>
                        This is a description of the resource and what
                        information it provides and how you use this resource
                    </p>
                    <button>
                        <h2>Learn More</h2>
                        <ArrowIcon
                            style={{ height: "3rem", backgroundColor: "#ccc" }}
                        />
                    </button>
                </div>
                <div className={styles.card}>
                    <h2>Resource 2</h2>
                    <img
                        src={groupCoaching}
                        alt=""
                        srcset=""
                        className={styles.cardImage}
                    />
                    <p>
                        This is a description of the resource and what
                        information it provides and how you use this resource
                    </p>
                    <button>
                        <h2>Learn More</h2>
                        <ArrowIcon
                            style={{ height: "3rem", backgroundColor: "#ccc" }}
                        />
                    </button>
                </div>
                <div className={styles.card}>
                    <h2>Resource 3</h2>
                    <img
                        src={planning}
                        alt=""
                        srcset=""
                        className={styles.cardImage}
                    />
                    <p>
                        This is a description of the resource and what
                        information it provides and how you use this resource
                    </p>
                    <button>
                        <h2>Learn More</h2>
                        <ArrowIcon
                            style={{ height: "3rem", backgroundColor: "#ccc" }}
                        />
                    </button>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ResourcesPage;
