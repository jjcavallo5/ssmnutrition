import React from "react";
import styles from "./appointments.module.css";

import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import ArrowIcon from "../../icons/arrowIcon";

import healthyFood from "../../images/healthyFood.jpg";
import oneOnOne from "../../images/1on1coaching.jpg";
import groupCoaching from "../../images/groupCoaching.jpg";
import planning from "../../images/planning.jpg";

const AppointmentsPage = () => {
    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.header}>
                <img src={healthyFood} alt="Healthy Food" srcset="" />
                <div className={styles.headerTextCover}>
                    <h1>Nutrition Coaching</h1>
                    <h2>
                        Book an appointment today to start your nutrition
                        journey
                    </h2>
                </div>
            </div>
            <h1 className={styles.coachingOptionsHeader}>
                my coaching options
            </h1>
            <h2 className={styles.coachingOptionsHeader2}>
                Learn more about what I have to offer
            </h2>
            <div className={styles.cardContainer}>
                <div className={styles.card}>
                    <h2>1:1 Coaching</h2>
                    <img
                        src={oneOnOne}
                        alt=""
                        srcset=""
                        className={styles.cardImage}
                    />
                    <p>
                        One-on-one coaching, designed specifically to fit your
                        nutrition and performance goals.
                    </p>
                    <button>
                        <h2>Learn More</h2>
                        <ArrowIcon
                            style={{ height: "3rem", backgroundColor: "#ccc" }}
                        />
                    </button>
                </div>
                <div className={styles.card}>
                    <h2>Virtual Group Session</h2>
                    <img
                        src={groupCoaching}
                        alt=""
                        srcset=""
                        className={styles.cardImage}
                    />
                    <p>
                        Online session with a team or large group, outlining the
                        most important aspects of nutrition.
                    </p>
                    <button>
                        <h2>Learn More</h2>
                        <ArrowIcon
                            style={{ height: "3rem", backgroundColor: "#ccc" }}
                        />
                    </button>
                </div>
                <div className={styles.card}>
                    <h2>Meal Planning</h2>
                    <img
                        src={planning}
                        alt=""
                        srcset=""
                        className={styles.cardImage}
                    />
                    <p>
                        A generic or personalized meal plan to fit your specific
                        nutrition and performance goals.
                    </p>
                    <button>
                        <h2>Learn More</h2>
                        <ArrowIcon
                            style={{ height: "3rem", backgroundColor: "#ccc" }}
                        />
                    </button>
                </div>
            </div>

            <div className={styles.oneOnOneTransition} />
            <div className={styles.quoteContainer}>
                <div className={styles.quote}>
                    <p className={styles.quoteText}>
                        "This is a really cool quote about how much I love
                        Zahid's consulting company"
                    </p>
                    <h2>A loyal customer</h2>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default AppointmentsPage;
