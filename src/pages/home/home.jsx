import React from "react";
import styles from "./home.module.css";

import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

import hikingZahid from "../../images/hikingZahidTwo.jpg";
import runningZahid from "../../images/runningZahid.jpg";

const HomePage = () => {
    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.bodyContainer}>
                <div className={styles.header}>
                    <img
                        src={hikingZahid}
                        alt="A picture of zahid hiking in the mountains"
                        srcset=""
                        className={styles.headerImage}
                    />

                    <div className={styles.headerText}>
                        <h2 className={styles.level}>LEVEL UP WITH</h2>
                        <h1 className={styles.nutrition}>NUTRITION</h1>
                        <button className={styles.getStarted}>
                            Get Started!
                        </button>
                    </div>
                </div>

                <div className={styles.about}>
                    <img
                        src={runningZahid}
                        alt="A picture of zahid running"
                        srcset=""
                        className={styles.zahidRunning}
                    />
                    <div className={styles.aboutText}>
                        <h1>Who am I?</h1>
                        <p>
                            I'm Zahid, a registered dietitian who can help you
                            reach your fitness goals through the power of
                            nutrition.
                        </p>
                        <button className={styles.aboutButton}>
                            Learn More!
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default HomePage;
