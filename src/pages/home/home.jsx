import React from "react";
import styles from "./home.module.css";

import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

import hikingZahid from "../../images/hikingZahidTwo.jpg";
import dietitianZahid from "../../images/dietitianZahid.jpg";

const HomePage = () => {
    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.bodyContainer}>
                <div className={styles.header}>
                    <img
                        src={hikingZahid}
                        alt="A picture of zahid working in a hospital"
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
                        src={dietitianZahid}
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

                <div className={styles.callToAction}>
                    <h1 className={styles.ifYouAre}>If you are...</h1>
                    <ul className={styles.list}>
                        <li>Looking to enhance athletic performance</li>
                        <li>
                            Wondering how nutrition can be utilized to improve
                            recovery
                        </li>
                        <li>
                            Looking to lose weight in a healthy and sustainable
                            way
                        </li>
                    </ul>

                    <button className={styles.callToActionButton}>
                        Lets Talk!
                    </button>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default HomePage;
