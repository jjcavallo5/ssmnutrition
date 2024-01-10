import React from "react";
import styles from "./about.module.css";

import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

import zahidRunning from "../../images/runningZahid.jpg";
import graduationZahid from "../../images/graduationZahid.jpg";

const AboutPage = () => {
    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.bodyContainer}>
                <img
                    src={zahidRunning}
                    alt="A picture of zahid running in college"
                    srcset=""
                    className={styles.zahidRunning}
                />
                <div className={styles.rightSide}>
                    <h1 className={styles.header}>Hello, I'm Zahid</h1>
                    <h2 className={styles.subHeader}>
                        I am a registered dietitian looking to help athletes and
                        former athletes get closer to their fitness goals
                        through nutrition.
                    </h2>
                    <p className={styles.rightSideText}>
                        I've been there. I know what it's like to be a
                        high-level student athlete, and often, nutrition can be
                        the difference between being good and being exceptional.
                        When athletes prioritize their nutrition, they perform
                        better in workouts, recover faster, are less likely to
                        be injured, and most importantly, outperform others on
                        game day. Let's meet and discuss how you, too, can
                        achieve greatness through nutrition.
                    </p>
                    <button className={styles.meetNow}>
                        Set up a meeting!
                    </button>
                </div>
            </div>

            <div className={styles.qualificationsContainer}>
                <img
                    src={graduationZahid}
                    alt="An image of Zahid in his cap and gown"
                    srcset=""
                    className={styles.graduationZahid}
                />

                <div className={styles.qualificationsRightSide}>
                    <h1 className={styles.qualificationsHeader}>
                        My Qualifications
                    </h1>
                    <div className={styles.qualificationsListItems}>
                        <h2 className={styles.qualificationName}>
                            Registered Dietitian
                        </h2>
                        <h3 className={styles.qualificationLocation}>
                            IDK where this is from
                        </h3>
                        <h2 className={styles.qualificationName}>
                            Bachelors of Science in Dietetics
                        </h2>
                        <h3 className={styles.qualificationLocation}>
                            Wayne State University
                        </h3>
                        <h2 className={styles.qualificationName}>
                            2 Years of Clinical Experience
                        </h2>
                        <h3 className={styles.qualificationLocation}>
                            IDK where
                        </h3>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default AboutPage;
