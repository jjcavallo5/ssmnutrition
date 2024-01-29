import React from "react";
import styles from "./appointments.module.css";

import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

import healthyFood from "../../images/healthyFood.jpg";

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
                    <p>
                        One-on-one coaching, designed specifically to fit your
                        nutrition and performance goals.
                    </p>
                    <button>Learn More</button>
                </div>
                <div className={styles.card}>
                    <h2>Virtual Group Session</h2>
                    <p>
                        Online session with a team or large group, outlining the
                        most important aspects of nutrition.
                    </p>
                    <button>Learn More</button>
                </div>
                <div className={styles.card}>
                    <h2>Meal Planning</h2>
                    <p>
                        A generic or personalized meal plan to fit your specific
                        nutrition and performance goals.
                    </p>
                    <button>Learn More</button>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default AppointmentsPage;
